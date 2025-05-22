# Velara

## Overview

Velara simplifies HR management with features for hiring, payroll, employee records, and digital contracts. It streamlines processes, ensuring efficiency and compliance for modern businesses.

## Features

- Manage employee data and digital hiring processes
- Track salaries, reimbursements, absences, and vacation days
- Integrated calendar for employee attendance
- Responsive design with dark mode support
- Admin dashboard for centralized HR control

## How To Use

To use Velara, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/HavolliErjon/VELARA.git
    ```

2. Navigate to the project directory:

    ```bash
    cd velara
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create `.env` files for the client and server by using the provided `.env.example` files.

    - **Client**: Go to the `client` folder and create a `.env` file using the `client/.env.example` template.
    - **Server**: Go to the `server` folder and create a `.env` file using the `server/.env.example` template.

    In the `client/.env` file, you'll need to add the following variable:

    ```env
    VITE_API_URL=your_backend_api_url
    ```

    In the `server/.env` file, you'll need to add these variables:

    ```env
    PORT=your_server_port
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Access the application through your web browser at `http://localhost:3000`.

## API Access and Role-based Authorization

- The API endpoint `/api/employees` returns the list of employees.
- **Only users with the role `admin` can access this endpoint.**  
  This is enforced by the backend middleware:
  - `authMiddleware` verifies the JWT token and identifies the user.
  - `adminMiddleware` checks the user's role.
- If a non-admin user tries to access employee data, the server responds with HTTP status **403 Forbidden**.
- This ensures that sensitive employee data is protected and accessible only by authorized administrators.


## Admin Test Credentials

For testing purposes, you can use the following admin account to access protected routes and verify the user list:

- **Email:** Havollierjon1@hotmail.com  
- **Password:** (the password you set during user creation)

> **Note:** The password stored in the database is hashed with bcrypt for security reasons. If needed, you can specify here the plaintext password you used when creating this admin account.

If you prefer, you can also create your own admin user via the registration process or seed scripts.



## Demo

Check out [Velara](https://velara-cyan.vercel.app/)

## Technologies Used

Velara is built with modern web technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - The application data platform for NoSQL databases

## License

This project is open source and available under the [MIT License](LICENSE).

---

> Created by [Havolli Erjon](https://havollierjon.github.io/Porfolio/) &nbsp;&middot;&nbsp;
> For issues and feature requests, please [open an issue](https://github.com/HavolliErjon/VELARA)
