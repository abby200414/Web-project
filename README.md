🌍 Wanderlust - Explore the World
Wanderlust is a full-stack web application for exploring and sharing travel destinations. Built with Node.js, Express, MongoDB, and modern web technologies, this platform allows users to discover, create, and review beautiful places around the world.

🚀 Live Demo
Visit the application: https://web-project-49r1.onrender.com/listings

✨ Features
The project follows the MVC architecture with Models for data (MongoDB schemas), Views for UI (EJS templates), and Controllers for business logic to ensure organized, maintainable code.

User Authentication & Authorization - Secure signup/login with Passport.js

CRUD Operations - Create, read, update, and delete travel listings

Review System - Users can leave reviews and ratings for destinations

Image Upload - Cloudinary integration for listing images

Interactive Maps - MapTiler SDK for location visualization

Responsive Design - Mobile-friendly EJS templates with custom CSS

Flash Messages - User feedback for actions

Session Management - Persistent user sessions with MongoDB storage

🛠️ Tech Stack
Backend
Node.js (v22.17.0) - JavaScript runtime

Express.js - Web application framework

MongoDB Atlas - Cloud database

Mongoose - MongoDB object modeling

Passport.js - Authentication middleware

Frontend
EJS - Embedded JavaScript templating

EJS-Mate - Layout and partial support

CSS - Custom styling with rating.css and style.css

MapTiler SDK - Interactive maps

Utilities & Packages
Cloudinary - Image upload and storage

Multer - File upload handling

Joi - Data validation

Axios - HTTP client

Dotenv - Environment variables

Express-session - Session management

Connect-flash - Flash messages

📁 Project Structure
text
PROJECT/
├── app.js                    # Main application entry point
├── cloudConfig.js            # Cloudinary configuration
├── middleWare.js             # Custom middleware
├── schema.js                 # Joi validation schemas
│
├── controllers/              # Business logic
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
│
├── models/                   # MongoDB schemas
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── routes/                   # Route definitions
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── utils/                    # Utility functions
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── public/                   # Static assets
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│
├── views/                    # EJS templates
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   └── users/
│
├── init/                     # Initialization scripts
│   ├── data.js
│   └── index.js
│
├── node_modules/
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── package-lock.json
🚦 Getting Started
Prerequisites
Node.js (v22.17.0 or later)

MongoDB Atlas account

Cloudinary account

MapTiler API key

Installation
Clone the repository

bash
git clone <repository-url>
cd PROJECT
Install dependencies

bash
npm install
Configure environment variables
Create a .env file in the root directory with:

text
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAP_URL=your_maptiler_url
DB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
Start the application

bash
node app.js
Visit the application
Open your browser and navigate to http://localhost:3000

🌐 Deployment
This project is deployed on Render.com with the following configuration:

Runtime: Node.js 22.17.0

Build Command: npm install

Start Command: node app.js

Database: MongoDB Atlas (cloud)

Environment Variables: Configured in Render dashboard

📝 Key Functionalities
For All Users
Browse all travel listings

View detailed listing pages with reviews

Search and filter destinations

For Registered Users
Create new travel listings

Edit/delete own listings

Leave reviews and ratings

Upload listing images

Interactive map viewing

Authentication Features
Secure password hashing

Session-based authentication

Authorization checks

Flash messages for feedback

🧠 Learning Outcomes
This project was developed with guidance from Apna College tutorials and helped master:

Full-stack development with Node.js and Express

MongoDB database design with Mongoose

User authentication and authorization

File upload handling with Cloudinary

RESTful API design principles

EJS templating and partials

Error handling and validation

Deployment to cloud platforms

🔧 API Endpoints
Method	Endpoint	Description
GET	/listings	View all listings
POST	/listings	Create new listing
GET	/listings/:id	View single listing
PUT	/listings/:id	Update listing
DELETE	/listings/:id	Delete listing
POST	/listings/:id/reviews	Add review
DELETE	/reviews/:id	Delete review
GET	/signup	User registration
GET	/login	User login
POST	/signup	Create user
POST	/login	Authenticate user
GET	/logout	User logout
🤝 Contributing
While this is a learning project, suggestions are welcome! Feel free to fork the repository and submit pull requests for improvements.

🙏 Acknowledgments
Apna College for comprehensive tutorials and guidance

Render.com for hosting services

MongoDB Atlas for cloud database

Cloudinary for image storage

All open-source packages used in this project

📄 License
This project is licensed under the ISC License - see the LICENSE file for details.

Built with passion for travel and technology ✈️💻
