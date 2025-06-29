# Student App

**Hello Abdelilah Bouslama,**

This project is a simple web application designed to **add**, **edit**, and **delete** student records. It's built using a lightweight **frontend** and **backend**, each running in a separate **Docker container**, and tested on a **headless CentOS 7** server.

---

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, and JavaScript (static files)
- **Backend**: Python with Flask
- **Containerization**: Docker + `docker-compose`
- **Operating System**: CentOS 7 (command line only, no GUI)

---

## 📁 Project Structure

student-app/
│
├── backend/         # Flask backend application
│   ├── app.py
│   └── requirements.txt
│
├── frontend/        # Static HTML/CSS/JS frontend
│   └── index.html
│
├── docker-compose.yml
└── README.md

---

## 🚀 How to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/hberrady/student-app.git
   cd student-app
2. Build and start the containers
   ```bash
   docker-compose up --build
4. Access the application in your browser
  Frontend: http://your-server-ip:8080
  Backend API: http://your-server-ip:5000
 
