import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './styles.css'; // Import the CSS styles

// Render the App component inside the root div
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
