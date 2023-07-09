import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const div = document.createElement("div");
div.id = 'root-notifications';
document.body.insertBefore(div, document.getElementById('root'));

const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
    <React.StrictMode>
        <Notifications />
    </React.StrictMode>
);