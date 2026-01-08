# Portfolio - Fekhreddine ARRAG

Professional portfolio application showcasing modern web development skills.
Built with **Angular 17+** (Frontend) and **Spring Boot 3** (Backend), fully containerized with **Docker**.

## 🚀 Key Features

### 🎨 Frontend (Angular)
-   **Modern UI/UX**: Glassmorphism design system using variable-based CSS (no external CSS frameworks).
-   **Mobile First**: Fully responsive with a custom hamburger menu and fullscreen overlay.
-   **Lazy Loading**: Optimized performance by loading modules (Projects, Contact, etc.) on demand.
-   **Internationalization (i18n)**: Full English/French support with dynamic switching.
-   **SEO Optimized**: Dynamic Titles, Meta Descriptions, and Open Graph tags for social sharing.
-   **Custom 404 Page**: User-friendly error handling with a "Lost in Space" theme.

### 🛠️ Backend (Spring Boot)
-   **REST API**: Robust API serving resume data (Experience, Education, Skills).
-   **Security**:
    -   **XSS Protection**: Jsoup sanitation for all user inputs.
    -   **SQL Injection Prevention**: Using Spring Data JPA repositories.
-   **Email Service**: Async email notifications using Gmail SMTP.
-   **Database**: H2 Database (In-Memory) for easy deployment and testing.

### 🐳 DevOps
-   **Docker Compose**: One command to launch the full stack (Frontend + Backend + Database).
-   **Nginx**: Serves the Angular app and acts as a reverse proxy for the API (resolving CORS).
-   **Multi-Stage Builds**: Optimized Docker images for production.

---

## 🛠️ Tech Stack

-   **Frontend**: Angular 17, TypeScript, CSS3 (Variables, Flexbox/Grid)
-   **Backend**: Java 17, Spring Boot 3, Spring Data JPA, H2 Database
-   **Tools**: Docker, Docker Compose, Git, Maven, Node.js

---

## 🏁 Getting Started

### Prerequisites
-   [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
-   (Optional) Java 17 & Node.js 20 for local development without Docker.

### 📥 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Fekhreddine23/portfolio.git
    cd portfolio
    ```

2.  **Configure Environment (Optional)**
    To enable email sending, create a `.env` file in the root directory:
    ```env
    MAIL_PASSWORD=your_gmail_app_password
    ```

3.  **Run with Docker Compose**
    ```bash
    docker-compose up -d --build
    ```

4.  **Access the Application**
    -   Frontend: [http://localhost](http://localhost)
    -   Backend API: [http://localhost/api](http://localhost/api)

---

## 📂 Project Structure

```
portfolio/
├── backend/            # Spring Boot Application
│   ├── src/            # Java Source Code
│   ├── Dockerfile      # Backend Container Config
│   └── pom.xml         # Maven Dependencies
├── frontend/           # Angular Application
│   ├── src/            # Components, Services, Styles
│   ├── public/         # Assets (Start files)
│   ├── Dockerfile      # Frontend Container Config
│   └── nginx.conf      # Nginx Proxy Configuration
└── docker-compose.yml  # Orchestration
```

---

## 👤 Author

**Fekhreddine ARRAG**
-   [LinkedIn](https://www.linkedin.com/in/fekhreddine-arrag/)
-   [GitHub](https://github.com/Fekhreddine23)
