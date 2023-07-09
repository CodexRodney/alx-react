// function to return the current year
export function getFullYear() {
    const year = new Date();
    return year.getFullYear();
}

// function to return the the index
export function getFooterCopy(isIndex) {
    if (isIndex === true)
        return "Holberton School";
    return "Holberton School main dashboard";
}

// function that returns latest notifications
export function getLatestNotification(){
    return "<strong>Urgent requirement</strong> - complete by EOD"
}
