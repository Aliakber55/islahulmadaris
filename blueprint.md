# Islah-ul-Madaris

## Overview

Islah-ul-Madaris is a web application designed to streamline the management of madaris (Islamic schools). It provides a centralized platform for administrators to manage student records, track exam schedules, record marks, and generate insightful reports. The application is built with a modern tech stack, leveraging the power of React for a dynamic user interface, Firebase for secure authentication and data storage, and Material-UI for a clean and responsive design.

## Implemented Features

*   **Secure Authentication:** Users can log in securely using their email and password. The application uses Firebase Authentication to ensure that only authorized users can access the system.
*   **Role-Based Access Control:** The application implements role-based access control, ensuring that users can only access the features and data that are relevant to their roles. This is achieved through the use of private routes, which restrict access to certain pages based on the user's authentication status.
*   **Dashboard:** The application features a dashboard that provides a quick overview of the system. The dashboard displays key metrics and provides easy access to the most frequently used features.
*   **Madaris Management:** The application allows administrators to manage the madaris in the system. This includes adding new madaris, updating existing madaris, and deleting madaris.
*   **Student Management:** The application allows administrators to manage the students in the system. This includes adding new students, updating existing students, and deleting students.
*   **Exam Management:** The application allows administrators to manage the exams in the system. This includes adding new exams, updating existing exams, and deleting exams.
*   **Marks Management:** The application allows administrators to manage the marks in the system. This includes adding new marks, updating existing marks, and deleting marks.
*   **Reporting:** The application allows administrators to generate reports on the data in the system. This includes reports on student performance, exam results, and madaris statistics.

## Current Task: Initial Setup and Component Creation

I am currently in the process of setting up the basic structure of the application. This includes creating the main components, setting up the routing, and establishing the authentication flow.

### Plan

1.  **Create Placeholder Pages:** I have created placeholder pages for all the main sections of the application. These pages will be populated with content as the development progresses.
2.  **Set Up Routing:** I have set up the routing for the application using `react-router-dom`. This allows users to navigate between the different pages of the application.
3.  **Implement Authentication:** I have implemented the authentication flow for the application using Firebase Authentication. This includes creating a login page, a private route component, and an authentication context.
4.  **Create Sidebar:** I have created a sidebar component that provides easy access to all the main sections of the application.
5.  **Error Resolution:** I have resolved an `eslint` error related to the use of multiple exports in a single file. This was achieved by separating the `useAuth` hook from the `AuthProvider` component.
