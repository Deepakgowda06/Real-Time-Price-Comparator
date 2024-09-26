# Real-Time Price Comparison

This project is a real-time price comparison web application that fetches price data from various platforms using the **Gemini API**. The application presents real-time price differences in a single, easy-to-view page. It uses **Node.js** as the backend, and **EJS** (Embedded JavaScript) for the frontend to dynamically render data on the webpage.

## Features

- Fetches real-time cryptocurrency prices from Gemini API.
- Displays price differences between multiple platforms.
- User-friendly interface with dynamic and real-time data updates.
- Built using Node.js with EJS templating engine.

## Technologies Used

- **Node.js**: Server-side runtime environment.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine to render dynamic HTML pages.
- **Gemini API**: Provides real-time cryptocurrency price data.
- **Axios**: For making HTTP requests to fetch price data.


## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- You will need a Gemini API key to fetch the price data.

## Project Structure

The project follows a structured and organized layout for better readability and maintainability. Below is an outline of the project structure:

```bash

├── views
│   ├── index.ejs           # Main page template to display the price comparison
├── routes
│   ├── index.js            # Handles API calls and data rendering
├── public
│   ├── css
│   │   └── styles.css      # CSS file for styling the webpage
│   ├── js
│   │   └── script.js       # JavaScript file for front-end interaction (if needed)
├── app.js                  # Main application file that initializes the server
├── package.json            # Contains project dependencies and scripts
├── package-lock.json       # Auto-generated file for locking dependency versions
 ```


### API Usage

This project makes use of the Gemini API to fetch real-time price data. You can find more details about Gemini's API here:https://gemini.google.com/app?hl=en-IN.




### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepakgowda06/Real-Time-Price-Comparator.git

2. Install the required dependencies:

   ```bash
   npm install

  3. Start the Node.js server:
        ```bash
        npm start
Note : Create your Gemini API and install necessary Node modules
