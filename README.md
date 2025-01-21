# URL Redirector

The URL Redirector is a lightweight web application for creating and managing custom shortened URLs. It provides a modern UI to add, display, and copy mappings, with backend support for URL redirection.

## Features

- **Custom URL Shortening**: Map long URLs to user-defined, custom URLs.
- **Dynamic Mappings Display**: View existing mappings in an organized and responsive layout.
- **Clipboard Copying**: Copy shortened URLs with a single click.
- **Redirection Support**: Automatically redirect from custom URLs to original URLs.
- **In-Memory Storage**: Simple storage for development and testing.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Styling**: Modern responsive design with hover effects

## Installation

Follow the steps below to set up and run the application on your local machine:

### Prerequisites

- **Node.js** installed (version 14 or higher recommended).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-redirector.git
   cd url-redirector

2. Install dependencies:
   ```bash     
   npm install

3. Start the server
   ```bash
   node server.js

4. Open the application in your browser
   ```bash
   http://localhost:3000

## Usage

#### 1. Create a Mapping:

- Enter the original URL and your desired custom URL in the input fields.
- Click the Create Mapping button to save the mapping.
 
#### 2. View Existing Mappings:
- Scroll down to the Existing Mappings section.
- Each mapping shows the custom URL, original URL, and a Copy button.

#### 3. Redirect Using Custom URLs:
- Use the custom URL (e.g., http://localhost:3000/shortname) in your browser to redirect to the original URL.

#### 4. Copy Custom URLs:
- Click the Copy button next to a mapping to copy the shortened URL to your clipboard.

## File Structure
    ```bash
    url-redirector/
    ├── public/
    │   ├── index.html       # Frontend interface
    │   └── style.css        # Styles for the frontend
    ├── server.js            # Backend server
    ├── package.json         # Node.js project file
    └── README.md            # Project documentation
    

## Enhancements
Here are some potential improvements for future versions:

- Database Integration: Use a database (e.g., MongoDB, MySQL) for persistent storage.
- User Authentication: Allow users to log in and manage their URLs securely.
- Analytics: Track click counts and analytics for each custom URL.