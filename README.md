
# Saigon Restaurant Website

[Saigon Restaurant](https://saigonottawa.com/) approached me with the need for a static website that would provide their customers a user-friendly interface. The client already had a website and provided two additional websites as examples of websites that they liked. This allowed me to bypass the design phase typically done in Figma and iterate directly in development.

<br/>

## Client's Requirements
1. **Easy Navigation:** The client wanted an easy-to-navigate website where everything was accessible with minimal clicks.
   
3. **Food and Drink Menus:** The client wanted the `FOOD` and `DRINKS` menus to be the `main focus` of the website.
   
5. **Simplified Food Menu:** The client wanted to simplify the navigation of the food menu, especially in mobile view, to make it easier for users to browse through the items without having to scroll extensively.

<br/>

## Development Approach 
1. **Single Page Site Design:** I decided to develop the entire site as a single page with different sections. This approach makes everything within the site accessible with just one click, providing ease of navigation.
   
3. **Visible Main Navigation:** In alignment with the client's current site and the two examples they provided, I developed a 'hamburger menu' design for mobile viewports. I also developed an alternative main navigation that is always visible on both mobile and desktop viewports. I explained the benefits of this approach to the client, particularly its ease of access. The client preferred the always-visible navigation.
  
5. **Interactive Menu:**  The restaurant menu prominently features interactive `FOOD` and `DRINKS` buttons within the viewport across a range of screen sizes, from 320px to 1024px. This directly addresses the client's need for the food and drinks menus to be the main focus of the website. Additionally, a `hide images` button is provided that hides all the images of food and drink items, allowing more items to be displayed in the viewport and thus reducing extensive scrolling as per the client's requirement.

   ### Features
    - **Reservations:** Allows customers to book a table in advance, ensuring a seamless dining experience, powed by TouchBistro.
      
    - **Contact:** Provides contact information and a form for customers to reach out with any questions or feedback.
      
    - **Order Online:** powered by Uber Eats.

    ### Technologies Used
    ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) ![SvelteKit](https://img.shields.io/badge/SvelteKit-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

<br/>

## What I Learned
### Iterative Development and Client Feedback
Throughout the development process, I used ngrok to provide the client with live updates of each section of the site. This allowed the client to provide feedback in real-time, ensuring that the final product would align with their vision.

**Challenges and Solutions:**
1. **Contact Form Implementation:** Implementing a functional contact form was a significant challenge. I initially tried using Nodemailer, a Node.js package, but found it wasn't supported in the Cloudflare Workers environment. I then switched to fabform.io, but found limitations such as the inability to customize the "from" part of the email and handle post-submission behaviour. Eventually, I discovered that SendGrid provides RESTful APIs, which are universally compatible and can be used in any environment that supports HTTP requests. This was the solution I implemented.
2. 
3. **Platform Considerations:** While Nodemailer does work on Vercel, I chose not to use this option because the main site was already being hosted on Cloudflare Pages.
4. 
5. **Newsletter Implementation:** I set up a newsletter for the website using Brevo.com. However, the client later decided against this feature, as they infrequently send out emails to clients.

Through these iterations, I learned the importance of understanding the environment in which your code will run and ensuring compatibility between your chosen technologies. This project was a valuable learning experience.
