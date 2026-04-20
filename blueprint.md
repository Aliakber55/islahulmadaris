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

## Current Task: Dashboard UI/UX Enhancement

I have performed a significant update on the main dashboard to improve its layout, functionality, and visual appeal based on user feedback.

### Plan & Changes

1.  **Read Original Files:** I started by reading the `Dashboard.jsx` and translation files (`en/translation.json`, `ur/translation.json`) to understand the existing implementation.
2.  **Fix Layout and Style Issues:** I addressed several UI bugs reported by the user:
    *   **Restored Welcome Banner:** Fixed an issue where the main welcome banner was not appearing. This was caused by a missing translation key for the banner's image, which I have now added.
    *   **Corrected Quick Actions:** The "Quick Actions" buttons were overlapping. I replaced the container with a Material-UI `Grid` to ensure proper alignment and spacing, making them fully responsive.
    *   **Improved Recent Students Table:** The table for recent students was poorly formatted. I have adjusted the styling to ensure it is clean, aligned, and readable within its container.
    *   **Added Footer:** A proper footer with the current copyright year and a top border has been added to the bottom of the page.
3.  **Implement Landscape Chart Cards:** The user requested the chart cards be changed from a vertical (portrait) to a horizontal (landscape) orientation.
    *   I modified the `ChartCard` component to use a `row` flex-direction.
    *   I adjusted the internal layout to place the title/icon and the chart side-by-side.
    *   To accommodate the wider cards, I changed the grid layout to display two cards per row on larger screens (`md={6}`), improving the overall visual balance of the dashboard.
4.  **Add Internationalization (i18n) Support:** To support the new UI elements, I added the following keys to both the English and Urdu translation files: `quick_actions`, `recent_students`, `view_reports`, and `quran_icon`.
5.  **Update Blueprint:** I am now updating this `blueprint.md` file to document these changes.
6.  **Commit and Push:** I will now commit and push all the changes to the Git repository.
