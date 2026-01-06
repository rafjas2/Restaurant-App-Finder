# Restaurant App Finder

A simple web application to find restaurants, built with Node.js and Express.

## Description

This project serves a static front-end for a restaurant finder application. It uses Express.js to serve HTML, CSS, and JavaScript files.

## Prerequisites

- Node.js (v12 or higher recommended)
- npm (Node Package Manager)

## Installation

1.  Clone the repository or download the source code.
2.  Navigate to the project directory in your terminal.
3.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the server:

    ```bash
    npm start
    ```

2.  Open your browser and navigate to:

    ```
    http://localhost:8080
    ```

## Project Structure

-   `server.js`: The main entry point for the Express server.
-   `public/`: Directory containing static assets.
    -   `index.html`: The main HTML file.
    -   `css/`: Stylesheets.
    -   `js/`: JavaScript files.

## API Endpoints

-   `GET /`: Serves the `index.html` file.
