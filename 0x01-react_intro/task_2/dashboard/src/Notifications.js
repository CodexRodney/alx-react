import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
};

export default Notifications;