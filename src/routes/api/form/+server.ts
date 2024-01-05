import { z } from 'zod';
import { type SendMailOptions } from 'nodemailer';
import transporter from '$lib/emailSetup.server';
import { GOOGLE_EMAIL } from '$env/static/private';
import { json } from '@sveltejs/kit';

const FormDataSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string()
});

export async function POST({ request }) {
	try {
		const formData = await request.formData();

		const parsedData = FormDataSchema.safeParse({
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		});

		if (!parsedData.success) {
			// Handle form validation error
			console.error(parsedData.error);
			return json({ success: false });
		}

		const customerNotification = {
			from: 'Saigon Ottawa <info@saigonottawa.com>',
			to: parsedData.data.email,
			subject: `Thank You for Contacting Saigon! We’ve Received Your Message`,
			text: `Hey ${parsedData.data.name},

Big thanks for hitting us up at Saigon!
				
Hang tight, we're diving into your message and will circle back to you soon. Just a heads up, we might take a bit longer during our rush hours.
				
Stay awesome!
				
Thank you,
The Saigon Squad`
		};

		const restaurantNotification = {
			from: GOOGLE_EMAIL,
			to: 'info@saigonottawa.com',
			subject: `New Saigon Form Message from ${parsedData.data.name}`,
			text: `Hey Team,

We've got a new message from ${parsedData.data.name} in our inbox. Let's check it out and get back to them ASAP.
				
Here are the details:
- Name: ${parsedData.data.name}
- Email: ${parsedData.data.email}
- Message: ${parsedData.data.message}
				
Let's keep up the good work and make Saigon the best place for our awesome customers!
				
Thank you,
The Saigon Notification Bot`
		};

		const sendEmail = async (message: SendMailOptions) => {
			await new Promise((resolve, reject) => {
				transporter.sendMail(message, (err, info) => {
					if (err) {
						console.error(err);
						reject(err);
					} else {
						resolve(info);
					}
				});
			});
		};

		await sendEmail(customerNotification);
		await sendEmail(restaurantNotification);

		return json({ success: true });
	} catch (error) {
		console.error(error);
		return json({ success: false });
	}
}
