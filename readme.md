# DayStar Daycare Management System

This web application is designed to manage the operations of DayStar Daycare in Kabalagala, Uganda. It handles baby registration, sitter management, procurement, and payment processing.

## Tech Stack

- **Frontend**: Pug (template engine)
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Features

1. Baby Management
   - Register babies with details (name, age, fee)
   - Record arrivals and departures
   - Manage payment options (half-day, full-day, monthly)

2. Sitter Management
   - Register sitters with detailed information
   - Track sitter assignments and payments

3. Procurement
   - Manage inventory of supplies (diapers, fruits, milk)
   - Handle 'Dolls' stall operations

4. Reporting
   - Generate daily reports on baby attendance
   - Track financial transactions

5. User Authentication
   - Secure login for staff members

## Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/daystar-daycare.git
   ```

2. Install dependencies
   ```
   cd daystar-daycare
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the application
   ```
   npm start
   ```

## Project Structure

```
daystar-daycare/
├── config/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── app.js
├── package.json
└── README.md
```

## API Endpoints

- `/api/babies`: CRUD operations for baby management
- `/api/sitters`: CRUD operations for sitter management
- `/api/procurement`: Manage supplies and 'Dolls' stall
- `/api/payments`: Handle payment processing
- `/api/reports`: Generate various reports

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.