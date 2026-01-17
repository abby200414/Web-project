Here's your README in an attractive code format with proper Markdown styling:

```markdown
# 🌍 Wanderlust - Explore the World

Wanderlust is a full-stack web application for exploring and sharing travel destinations. Built with Node.js, Express, MongoDB, and modern web technologies, this platform allows users to discover, create, and review beautiful places around the world.

## 🚀 Live Demo

**Visit the application:** [https://web-project-49r1.onrender.com/listings](https://web-project-49r1.onrender.com/listings)

## ✨ Features

> **Architecture:** The project follows the **MVC architecture** with **Models** for data (MongoDB schemas), **Views** for UI (EJS templates), and **Controllers** for business logic to ensure organized, maintainable code.

- **🔐 User Authentication & Authorization** - Secure signup/login with Passport.js
- **📝 CRUD Operations** - Create, read, update, and delete travel listings
- **⭐ Review System** - Users can leave reviews and ratings for destinations
- **🖼️ Image Upload** - Cloudinary integration for listing images
- **🗺️ Interactive Maps** - MapTiler SDK for location visualization
- **📱 Responsive Design** - Mobile-friendly EJS templates with custom CSS
- **💬 Flash Messages** - User feedback for actions
- **🔒 Session Management** - Persistent user sessions with MongoDB storage

## 🛠️ Tech Stack

### **Backend**
![Node.js](https://img.shields.io/badge/Node.js-22.17.0-green)
![Express.js](https://img.shields.io/badge/Express.js-5.1.0-lightgrey)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Mongoose](https://img.shields.io/badge/Mongoose-8.19.2-red)
![Passport.js](https://img.shields.io/badge/Passport.js-0.7.0-blue)

### **Frontend**
![EJS](https://img.shields.io/badge/EJS-3.1.10-yellow)
![CSS3](https://img.shields.io/badge/CSS3-Styling-blue)
![MapTiler](https://img.shields.io/badge/MapTiler-SDK-orange)

### **Utilities & Packages**
- **Cloudinary** - Image upload and storage
- **Multer** - File upload handling
- **Joi** - Data validation
- **Axios** - HTTP client
- **Dotenv** - Environment variables
- **Express-session** - Session management
- **Connect-flash** - Flash messages

## 📁 Project Structure

```
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
├── .env                      # Environment variables
├── .gitignore
├── package.json
└── package-lock.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v22.17.0 or later)
- MongoDB Atlas account
- Cloudinary account
- MapTiler API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PROJECT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_api_key
   CLOUDINARY_SECRET=your_api_secret
   MAP_URL=your_maptiler_url
   DB_URL=your_mongodb_atlas_url
   SECRET=your_session_secret
   ```

4. **Start the application**
   ```bash
   node app.js
   ```

5. **Visit the application**
   Open `http://localhost:3000` in your browser

## 🌐 Deployment

| **Platform** | **Render.com** |
|--------------|----------------|
| **Runtime** | Node.js 22.17.0 |
| **Build Command** | `npm install` |
| **Start Command** | `node app.js` |
| **Database** | MongoDB Atlas |
| **Environment** | Configured in Render dashboard |

## 📝 Key Functionalities

### 👥 For All Users
- 🌐 Browse all travel listings
- 🔍 View detailed listing pages with reviews
- 🎯 Search and filter destinations

### 👤 For Registered Users
- ➕ Create new travel listings
- ✏️ Edit/delete own listings
- ⭐ Leave reviews and ratings
- 🖼️ Upload listing images
- 🗺️ Interactive map viewing

### 🔐 Authentication Features
- 🔒 Secure password hashing
- 🎫 Session-based authentication
- 🛡️ Authorization checks
- 💬 Flash messages for feedback

## 🧠 Learning Outcomes

This project was developed with guidance from **Apna College tutorials** and helped master:

- 🏗️ Full-stack development with Node.js and Express
- 🗄️ MongoDB database design with Mongoose
- 🔐 User authentication and authorization
- 📁 File upload handling with Cloudinary
- 🔗 RESTful API design principles
- 🎨 EJS templating and partials
- ⚠️ Error handling and validation
- ☁️ Deployment to cloud platforms

## 🔧 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/listings` | View all listings | ❌ |
| POST | `/listings` | Create new listing | ✅ |
| GET | `/listings/:id` | View single listing | ❌ |
| PUT | `/listings/:id` | Update listing | ✅ |
| DELETE | `/listings/:id` | Delete listing | ✅ |
| POST | `/listings/:id/reviews` | Add review | ✅ |
| DELETE | `/reviews/:id` | Delete review | ✅ |
| GET | `/signup` | User registration | ❌ |
| GET | `/login` | User login | ❌ |
| POST | `/signup` | Create user | ❌ |
| POST | `/login` | Authenticate user | ❌ |
| GET | `/logout` | User logout | ✅ |

## 🤝 Contributing

While this is a learning project, suggestions are welcome! Feel free to:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. 💻 Commit your changes
4. 🔀 Submit a pull request

## 🙏 Acknowledgments

| Resource | Purpose |
|----------|---------|
| **Apna College** | Comprehensive tutorials and guidance |
| **Render.com** | Hosting services |
| **MongoDB Atlas** | Cloud database |
| **Cloudinary** | Image storage |
| **All open-source packages** | Project dependencies |

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

**✨ Built with passion for travel and technology ✈️💻**
```

This format includes:
- Badges for technologies
- Clean table layouts
- Emoji icons for visual appeal
- Proper code blocks
- Organized sections with clear headings
- Responsive design elements
- GitHub-friendly markdown formatting
