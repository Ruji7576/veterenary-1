# Veterinary Management System

## Installation and Running

To get started with this application, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ruji7576/veterenary-1.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd veterenary-1
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

**Note:** The application may not function correctly until the database is connected and the backend services are running.

## Features

### Patient Management

The main page of the application contains a form for entering and managing patient data, including:

- **Name**: Patient's name
- **Age**: Patient's age
- **Breed**: Patient's breed
- **Gender**: Patient's gender
- **Identification Number**: Unique ID for the patient
- **Tutor First Name**: First name of the pet's owner
- **Tutor Last Name**: Last name of the pet's owner
- **Tutor Phone Number**: Contact number of the pet's owner
- **Treatment**: Description of the current treatment
- **Profile Image**: URL or upload of the patient's image

#### Screenshots

- ![First Page - Form View 1](https://github.com/Ruji7576/veterenary-1/blob/main/src/Examples/First_Page_1.jpg?raw=true)
- ![First Page - Form View 2](https://github.com/Ruji7576/veterenary-1/blob/main/src/Examples/First_Page_2.jpg?raw=true)

### Appointment Management

The application also includes a page for managing appointments related to each patient. The appointment data includes:

- **DateTime**: Date and time of the appointment
- **Consultation Type**: Type of the consultation (e.g., routine check-up, specialist consultation)
- **Reason**: Reason for the consultation
- **Status**: Boolean value indicating whether the consultation is completed

#### Screenshot

- ![Second Page - Appointments View](https://github.com/Ruji7576/veterenary-1/blob/main/src/Examples/Second_Page_1.jpg?raw=true)
- ![Second Page - Appointments View](https://github.com/Ruji7576/veterenary-1/blob/main/src/Examples/Second_Page_2.jpg?raw=true)

## API Endpoints

### Patients

- **Add a Patient**
  - `POST http://localhost:8080/api/patients`
  
- **Update a Patient**
  - `PUT http://localhost:8080/api/patients/${id}`

- **Delete a Patient**
  - `DELETE http://localhost:8080/api/patients/${id}`

- **Get All Patients**
  - `GET http://localhost:8080/api/patients`

### Appointments

- **Get All Appointments for a Patient**
  - `GET http://localhost:8080/appointments/${patientId}`

- **Get a Specific Appointment**
  - `GET http://localhost:8080/api/patients/patients/${patientId}`

- **Add an Appointment**
  - `POST http://localhost:8080/appointments`

- **Update an Appointment**
  - `PUT http://localhost:8080/appointments/${id}`

- **Delete an Appointment**
  - `DELETE http://localhost:8080/appointments/${id}`
    
## Technologies Used

- **React**: A JavaScript library for building user interfaces. It was used to create the dynamic and responsive UI of the application.

- **Axios**: A promise-based HTTP client for the browser and Node.js. Axios was used for making API requests to the backend services, allowing the application to fetch, update, and delete patient and appointment data.

- **JavaScript (ES6+)**: The primary programming language used for frontend development, leveraging modern features such as arrow functions, async/await, and destructuring.

- **HTML5 & CSS3**: Markup and styling languages used for structuring and designing the UI.

- **Node.js & npm**: Node.js was used for setting up the development environment and npm (Node Package Manager) for managing dependencies.

- **Git**: Version control system used for tracking changes and collaborating on the project.

- **GitHub**: Hosting service for version control that was used to manage and store the project’s codebase.


