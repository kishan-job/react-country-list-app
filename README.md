# My Country App

A responsive React application built with Vite, featuring a Login and Home page, Redux for state management, form validation, an image slider, and a country listing with pagination. All components are styled .

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [Redux State Management](#redux-state-management)
- [Styling](#styling)
- [Authentication](#authentication)
- [Image Assets](#image-assets)
- [Live Demo (Optional)](#live-demo-optional)
- [Contributing (Optional)](#contributing-optional)
- [License](#license)

## Features

* **User Authentication:**
    * Login page with form validation (username/email, password complexity).
    * Simulated login functionality using Redux.
    * Redirection to Home page upon successful login.
    * Protection of Home page, redirecting unauthenticated users to Login.
* **Responsive Design:** Optimized for various screen sizes (mobile, tablet, desktop).
* **Redux State Management:**
    * `authSlice`: Manages user login/logout status.
    * `countriesSlice`: Handles fetching and pagination of country data from ` https://restcountries.com/v2/all?fields=name,region,flag`.
* **Dynamic Image Slider:**
    * Displays country flags from the `displayedCountries` Redux state.
    * Manual navigation with previous/next buttons.
* **Country Listing:**
    * Fetches and displays a list of countries (name, region, flag).
    * **Continent Filtering:** Users can filter countries by continent.
    * **Pagination ("Load More"):** Dynamically loads more countries as the user scrolls or clicks a button.
    * Loading and error states are handled gracefully.
* **Reusable Components:** Breaking down the UI into smaller, manageable components.
* **Form Validation:** Client-side validation for login form inputs.
* **Social Login Placeholders:** Buttons for Google, Facebook, LinkedIn, Twitter (functional integration not included).
* **Footer:** Standard footer with social links and contact info.

## Technologies Used

* **React** (with Vite for fast development)
* **Redux Toolkit** (for efficient state management)
* **React Router DOM** (for navigation)
* **React Icons** (for various UI icons)