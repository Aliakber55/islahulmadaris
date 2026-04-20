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

## Current Task: Professional Sidebar Design

I have updated the sidebar with a more professional and modern design. It now features a subtle gradient background, softer text and icon colors, and a clear visual distinction for the active link, making it more visually appealing and easier to read.

### Plan

1.  **Read Sidebar Component:** I read the content of the `src/components/Sidebar.jsx` file to understand its current structure and styling.
2.  **Update Sidebar Component:** I modified the `Sidebar.jsx` file to include the new design. This involved the following changes:
    *   **Background:** Replaced the solid dark blue background with a linear gradient from `#1e3c72` to `#2a5298`.
    *   **Text and Icon Colors:** Changed the color of the text and icons to a softer `#e0e0e0` for better readability.
    *   **Active Link Styling:** Added a background color, a left border, and extra padding to the active link to make it more prominent.
    *   **Hover Effect:** Implemented a subtle background color change on hover to provide visual feedback to the user.
    *   **Logo and Title:** Added a border to the bottom of the logo and title section to separate it from the navigation links.
3.  **Update Blueprint:** I am now updating this `blueprint.md` file to reflect these latest changes.
4.  **Commit and Push:** I will now commit all the changes to the git repository and push them to the remote.
