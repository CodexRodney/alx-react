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