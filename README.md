# Saigon Restaurant Website

This is a static website designed for a restaurant, it provides a straightforward navigation for customers to explore the menu, make reservations, contact the restaurant, and order online.

## Features

- **Interactive Menu:** The restaurant menu features interactive `FOOD` and `DRINKS` buttons. These buttons enable users to switch between viewing food items and drinks, eliminating the need to scroll extensively. This interactivity enhances the user experience by catering to their specific interests. Additionally, a button is provided to hide or show images, further enhacing the viewing experience.

- **Reservations:** Allows customers to book a table in advance, ensuring a seamless dining experience, powed by TouchBistro.
- **Contact:** Provides contact information and a form for customers to reach out with any questions or feedback.
- **Order Online:** powered by Uber Eats.

## Technologies Used

- Svelte/SvelteKit
- Tailwind CSS

## What I learned

- **Contact Form Implementation:** The journey to implement a functional contact form was a learning curve. Here are the key takeaways:
    - **Nodemailer:** Initially, I attempted to create the form using Nodemailer. However, I discovered that Nodemailer, being a Node.js package, isn't supported in the Cloudflare Workers Workerd environment.
    - **Fabform.io:** I then switched to using fabform.io due to its generous free tier. However, I found limitations such as the inability to customize the "from" part of the email and the inability to handle post-submission behaviour.
    - **SendGrid:** I moved on to SendGrid, initially using their npm package. However, I encountered the same issue as with Nodemailer - Node.js packages are not runnable on Cloudflare Workers Workerd environment. Eventually, I learned that SendGrid provides RESTful APIs. Since RESTful APIs are universally compatible, they can be used in any environment that supports HTTP requests.
    - **Platform Considerations:** It's worth noting that while Nodemailer does work on Vercel, I opted not to use this option in this project because the main site was already being hosted on Cloudflare Pages.

- **Newsletter Implementation**: I gained experience using Brevo.com to set up a newsletter for the website. However, the client later decided against this feature, as they infrequently send out emails to clients.

  
Through these iterations, I learned the importance of understanding the environment in which your code will run and ensuring compatibility between your chosen technologies. This was a good learning experience.
