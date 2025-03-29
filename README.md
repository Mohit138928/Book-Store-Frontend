# 📚 Book Store MERN Application

A full-stack e-commerce book store application built with MERN stack (MongoDB, Express.js, React.js, Node.js) with Firebase Authentication.

## ✨ Features

- 📱 Responsive Design
- 🔐 User Authentication with Firebase
- 👤 Admin Dashboard
- 📖 Book Management (CRUD Operations)
- 🛒 Shopping Cart Functionality
- 💳 Order Management
- 📊 Category Filtering (in progress)
- 🔍 Search Functionality (in progress)

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS
- Firebase Authentication
- Axios
- React Router DOM
- SweetAlert2
- Semantic UI

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS

## 🚀 Live Demo

- Frontend: [https://book-store-web-seven.vercel.app/](https://book-store-web-seven.vercel.app/)
- Backend: [https://book-store-backend-mocha-one.vercel.app/](https://book-store-backend-mocha-one.vercel.app/)

## 🛠️ Installation & Setup

1. Clone the repository
```bash
git clone https://github.com/Mohit138928/Book-Store-Frontend.git
```

2. Install dependencies for frontend
```bash
cd frontend
npm install
```

3. Install dependencies for backend
```bash
cd backend
npm install
```

4. Create `.env` files:

Frontend `.env`:
```env
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGE_SENDER_ID=your_firebase_sender_id
VITE_APP_ID=your_firebase_app_id
```

Backend `.env`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
PORT=5000
```

5. Run the application:

```bash
# Run frontend (in frontend directory)
npm run dev

# Run backend (in backend directory)
npm start
```

## 👥 Team Members

- **Project Lead & Backend Development:**
  - Mohit maurya
  - GitHub: [Mohit Maurya](https://github.com/Mohit138928)

- **UI/UX & Documentation:**
  - Mansi Sharma
  - GitHub: [Mansi Sharma](https://github.com/Mansi200311)
  - Role: Frontend UI Figma Design & Project Documentation
  - Figma Design Link : [Figma Design](https://www.figma.com/design/K6uSEDLw7zvyrQSgEHj4Cg/book-store?node-id=0-1&t=Hc89qaZJQ56Bthmv-1)

## 📱 Screenshots

  - [Home Page](/src/assets/Screenshots/Home.png)
  - [Books Page](/src/assets/Screenshots/Books.png)
  - [Checkout Page](/src/assets/Screenshots/Checkout.png)

## 🔑 Key Features Explained

### Admin Dashboard
- Book Management (Add, Edit, Delete)
- Order Management
- User Management

### User Features
- Browse Books by Category
- Search Functionality (in progress)
- Shopping Cart
- Order History
- User Profile

## 🛡️ API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get single book
- `POST /api/books/create-book` - Add new book (Admin)
- `PUT /api/books/edit/:id` - Update book (Admin)
- `DELETE /api/books/:id` - Delete book (Admin)

### Authentication
- Firebase Authentication for frontend
- JWT token-based authentication for admin operations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
⭐️ If you found this project helpful, please star it on GitHub!
