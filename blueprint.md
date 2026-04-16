# Islah-ul-Madaris

## Overview

Islah-ul-Madaris is a web application designed to streamline the management of madaris (Islamic schools). It provides a centralized platform for administrators to manage student records, track exam schedules, record marks, and generate insightful reports. The application is built with a modern tech stack, leveraging the power of React for a dynamic user interface, Firebase for secure authentication and data storage, and Material-UI for a clean and responsive design.

## Implemented Features

*   **Secure Authentication:** Users can log in and sign up securely using their email and password. The application uses Firebase Authentication to ensure that only authorized users can access the system.
*   **Role-Based Access Control:** The application implements role-based access control, ensuring that users can only access the features and data that are relevant to their roles. This is achieved through the use of private routes, which restrict access to certain pages based on the user's authentication status.
*   **Dashboard:** The application features a dashboard that provides a quick overview of the system. The dashboard displays key metrics and provides easy access to the most frequently used features.
*   **Madaris Management:** The application allows administrators to manage the madaris in the system. This includes adding new madaris, updating existing madaris, and deleting madaris.
*   **Classes Management:** The application allows administrators to manage the classes in the system. This includes adding new classes, updating existing classes, and deleting classes.
*   **Student Management:** The application allows administrators to manage the students in the system. This includes adding new students, updating existing students, and deleting students. The system also supports filtering students by madrasa and class, and automatically generates a unique roll number for each new student.
*   **Exam Management:** The application allows administrators to manage the exams in the system. This includes adding new exams, updating existing exams, and deleting exams.
*   **Marks Management:** The application allows administrators to manage the marks in the system. This includes adding new marks, updating existing marks, and deleting marks.
*   **Reporting:** The application allows administrators to generate reports on the data in the system. This includes reports on student performance, exam results, and madaris statistics.
*   **Internationalization (i18n):** The application supports both English and Urdu languages, allowing users to switch between them. This is implemented using the `react-i18next` and `i18next` libraries.
*   **Reusable `CrudTable` Component:** To reduce code duplication and improve maintainability, a generic `CrudTable` component was created. This component encapsulates the common logic for CRUD (Create, Read, Update, Delete) operations, including form handling (with support for text and select inputs) and data display in a table. It is used in the `Madaris`, `Classes`, and `Students` pages.

## Current Task: Firebase Authentication Fix and Deployment

I have resolved a persistent "auth/configuration-not-found" error that was occurring during user signup. The issue was due to a misconfiguration in the local development environment's connection to Firebase services.

### Plan

1.  **Reinstall Dependencies:** Reinstalled all necessary npm packages, including `firebase`, `@mui/material`, `@emotion/react`, and `@emotion/styled` to ensure all dependencies are correct and up-to-date.
2.  **Verify Firebase Configuration:** Double-checked the Firebase configuration in `src/services/firebase.js` to ensure all keys and project details were correct.
3.  **Rebuild Application:** Performed a fresh build of the application using `npm run build` to ensure all the latest code changes were compiled correctly.
4.  **Reconfigure and Redeploy:** Re-created the `firebase.json` file with the correct hosting settings and redeployed the application to Firebase Hosting.
5.  **Configured Local Firebase Emulation:** Correctly configured the `.idx/mcp.json` file to enable proper local emulation of Firebase services, which was the root cause of the "auth/configuration-not-found" error.
6.  **Update Blueprint:** I am now updating this `blueprint.md` file to reflect these latest changes.
7.  **Commit and Push:** I will now commit all the changes to the git repository and push them to the remote.
