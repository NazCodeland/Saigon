
# Saigon Restaurant Website

[Saigon Restaurant](https://saigonottawa.com/) approached me with the need for a static website that would provide their customers a user-friendly interface. The client already had a website and provided two additional websites as examples of websites that they liked. This allowed me to bypass the design phase typically done in Figma and iterate directly in development.

<br/>

## Client's Requirements
1. **Easy Navigation:** The client wanted an easy-to-navigate website where everything was accessible with minimal clicks.
   
3. **Prominent Food and Drink Menus:** The client wanted the `FOOD` and `DRINKS` menus to be the `main focus` of the website.
   
5. **User-Friendly Food Menu:** The client wanted to simplify the navigation of the food menu, especially in mobile view, to make it easier for users to browse through the items without having to scroll extensively.

6. **Communication and Information:** The client had specific requirements to ensure easy communication and information availability. These included:
   - **Business Hours and Location**: The client wanted to provide customers with information about their operating hours and location.
     
   - **Contact Information**: The client wanted to share their address, phone number, email, and social media handles.
     
   - **Contact Form**: The client wanted a form on the website for customers to reach out to them.

<br/>

## Development Approach 
1. **Single Page Site:** I decided to develop the entire site as a single page with different sections. This approach makes everything within the site accessible with just one click, providing ease of navigation.
   
3. **Visible Main Navigation:** In alignment with the client's current site and the two examples they provided, I developed a 'hamburger menu' design for mobile viewports and an alternative main navigation that is always visible on both mobile and desktop viewports. After experiencing the benefit of _ease of access_ in the customer’s user experience (UX), the client favored the always-visible navigation approach.
  
5. **Interactive Menu:**  The restaurant menu prominently features interactive `FOOD` and `DRINKS` buttons within the _viewport_ across a range of screen sizes, from 320px to 1024px. This directly addresses the client's need for the food and drinks menus to be the main focus of the website. Additionally, a `hide images` button is provided that hides all the images of food and drink items, allowing more items to be displayed in the viewport and thus reducing extensive scrolling as per the client's requirement.

   ### Takeaways
      - Throughout the development process, I used [ngrok](https://ngrok.com/) to provide the client with live updates of each section of the site. This allowed the client to provide feedback in real-time, ensuring that the final product would align with their vision. This made the development experience amazing as I was able to iterate very fast. I understand I won't be able to do this with all clients but when it works, it’s simply fantastic.
   
   ### Features
      - **Reservations:** Allows customers to book a table in advance, ensuring a seamless dining experience, powed by TouchBistro.
         
      - **Contact:** Provides contact information and a form for customers to reach out with any questions or feedback.
         
      - **Order Online:** powered by Uber Eats.
   
      ### Technologies Used
      ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) ![SvelteKit](https://img.shields.io/badge/SvelteKit-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)

<br/>

## Challenges

1. **Contact Form Implementation:** Implementing a functional contact form was a significant challenge. Initially I tried, `Nodemailer`, a Node.js package, but found it wasn't supported in the Cloudflare Workers environment. I then switched to `fabform.io`, but found limitations such as the inability to customize the **from** part of the email and handle post-submission behaviour.
   - Eventually, I discovered that SendGrid provides `RESTful APIs`, which are universally compatible and can be used in any environment that supports HTTP requests. This was the solution I implemented.
   
4. **Platform Considerations:** While Nodemailer does work on Vercel, I chose not to use this option because the main site was already being hosted on Cloudflare Pages.
   
5. **Newsletter Implementation:** I set up a newsletter for the website using Brevo.com. However, the client later decided against this feature, as they infrequently send out emails to clients.

   ### Takeaways
      - Through these iterations, I learned the importance of understanding the environment in which your code will run and ensuring compatibility between your chosen technologies. This project was a valuable learning experience.
   
   
   ### What I learned
      - **Cloudflare Pages and Workers**: Gained experience working with Cloudflare's hosting and serverless platform.
      
      - **Newsletter Form with Brevo.com**: Learned how to set up a newsletter form using Brevo.com.
      - **Using Nodemailer**: Acquired skills in using Nodemailer, a Node.js package for sending emails.
