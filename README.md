# Feedback System

A simple customer feedback web application with user authentication, feedback form, and admin dashboard using Node.js, Express, and MongoDB (with frontend in HTML/CSS/JavaScript).

## 🔧 Features

- 📝 User Registration & Login
- 🔐 Session-based authentication
- ✅ Protected dashboard and feedback form
- 📋 Submit detailed feedback (age, satisfaction, ratings, message)
- 🗂 Admin dashboard (basic)
- 🎨 Background images for different pages
- 💾 MongoDB Atlas integration

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas + Mongoose
- HTML, CSS, Vanilla JavaScript
- bcryptjs (password hashing)
- express-session (for login sessions)

## 📦 Installation

1. **Clone the repository:**

   ````bash
   git clone https://github.com/your-username/feedback-system.git
   cd feedback-system
   ```Install dependencies:

   ````

2. npm install
   Set up environment variables:

   Create a .env file in the root directory with the following content:

   MONGO_URI=your_mongodb_atlas_connection_string

3. Run the server:
   node server.js

   or if you have nodemon installed:
   nodemon server.js

4. Access the app:

   Open your browser and go to the port you want to use
   for example: http://localhost:3000

5. Create a user (register):

   Navigate to http://localhost:3000/register.html

   Fill the form to register as a new user.

6. Login:

   After registering, go to http://localhost:3000/login.html

   Log in to access the dashboard and feedback form.

7. Submit feedback:

   From the dashboard, click the button to go to the feedback form.

   Fill out and submit your customer satisfaction survey.
