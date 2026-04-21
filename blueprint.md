This document outlines the development plan and features of the Islah ul Madaris application, a comprehensive management system for Islamic educational institutions.

## **Project Overview**

The goal of this project is to build a modern, intuitive, and efficient Madaris Management System using React and Firebase. The application will provide administrators with the tools they need to manage madaris, students, classes, exams, and reports in a centralized dashboard.

## **Core Features**

*   **Multi-language Support:** The application supports both English and Urdu, with seamless language switching.
*   **Secure Authentication:** Secure user login and signup using Firebase Authentication.
*   **Role-Based Access Control:** Private routes restrict access based on user authentication status.
*   **Responsive Layout:** A flexible layout with a responsive `AppBar` and `Sidebar` that works seamlessly on desktop, tablet, and mobile devices.
*   **Professional Dashboard:** A premium dashboard featuring:
    *   **Visually Strong Hero Banner:** A premium banner with a dark emerald gradient background, a prominent Islamic icon, and large, well-spaced Urdu typography for a visually appealing and inspiring welcome.
    *   **Modern Statistic Cards:** Clean, balanced, and modern cards for key metrics with a subtle hover effect.
    *   **Consistent Quick Actions:** A dedicated section for common tasks with professionally styled buttons (primary and secondary) for a unified look.
    *   **Modern Data Table:** An improved "Recent Students" table with increased row height, a bold header, light dividers, and a row hover effect for a clean, readable, and modern user experience.
*   **CRUD Operations:** Full Create, Read, Update, and Delete functionality for Madaris, Students, and Classes.
*   **Data Filtering:** Users can easily filter data tables by madrasa or class to quickly find the information they need.

## **Design System**

*   **Color Palette:** A professional and modern color scheme has been implemented for a calm, premium SaaS feel.
    *   **Primary:** `#0B3D2E` (Deep Emerald Green)
    *   **Secondary:** `#14532D` (Darker Green)
    *   **Accent:** `#D4AF37` (Gold, for highlights only)
    *   **Background:** `#F5F7FA` (Light Gray)
    *   **Cards & Paper:** `#FFFFFF` (White)
    *   **Text Primary:** `#1F2937`
    *   **Text Secondary:** `#6B7280`
*   **Typography:** The application uses the 'Poppins' font for a clean, modern look, with special attention to the readability of Urdu text using the 'Noto Nastaliq Urdu' font.
*   **Component Library:** The UI is built with Material-UI (MUI), customized to match the professional design system.
*   **Buttons:**
    *   **Primary:** Solid deep green (`#0B3D2E`) with white text.
    *   **Secondary:** White with a subtle border.
    *   All buttons feature an 8px border-radius, consistent padding, and a gentle hover effect.

## **Current Plan**

The application's core CRUD features and the professional dashboard UI have been successfully implemented. The next phase will focus on building out the Exams, Marks, and Reports sections, and implementing more advanced role-based permissions.
