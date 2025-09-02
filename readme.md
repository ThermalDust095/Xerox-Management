# Xerox Shop Management System 📄

A modern DBMS project built to streamline file sharing and printing services in college xerox shops. This web application provides a seamless interface for students to upload documents and shop owners to manage printing orders efficiently.

## 🎯 Project Overview

This project addresses the common challenges faced in college xerox shops by digitizing the file sharing and order management process. Built with Flask and MySQL, it offers a dual-interface system for both students and shop administrators.

### Key Features

- **Student Portal**: Secure account creation and file upload system
- **Admin Dashboard**: Order management and queue tracking interface
- **Real-time Updates**: Dynamic order queue with live status updates
- **File History**: Complete upload and order history tracking
- **USN Authentication**: College-specific user verification system

## 🛠️ Tech Stack

- **Backend**: Flask (Python Web Framework)
- **Database**: MySQL with Flask-SQLAlchemy ORM
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: Session-based user management

## 👥 User Roles

### Student Interface (Client Side)
- Create account using college USN
- Secure login system
- Upload files for printing
- View upload history and order status
- Track previous transactions

### Admin Interface (`/admin`)
- Xerox shop owner dashboard
- Password-protected admin access
- Order queue management
- Mark orders as completed or reject them
- Real-time order updates

## 🚀 Installation & Setup

### Prerequisites
- Python 3.7+
- MySQL Server
- Virtual Environment (recommended)

### Local Setup

1. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure database**
   - Create a MySQL database
   - Update database configuration in the application

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**
   - Student Portal: `http://localhost:5000`
   - Admin Dashboard: `http://localhost:5000/admin`

## 📱 Usage

### For Students
1. Register with your college USN
2. Login to your account
3. Upload files for printing
4. Monitor order status and history

### For Shop Owners
1. Navigate to `/admin`
2. Login with admin credentials
3. View incoming orders in real-time
4. Accept, reject, or mark orders as completed
5. Manage the printing queue efficiently

## 🤝 Contributing

This is a college DBMS project. Contributions and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of college coursework.

## 🎓 About

Developed as a Database Management System project to solve real-world problems faced in college xerox shops, promoting digital transformation in campus services.

---

**Note**: This is the client-side repository. For complete functionality, ensure both client and server components are properly configured.