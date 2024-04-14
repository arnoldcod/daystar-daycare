function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Check if the email is in valid format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }
    
    // Check if the password meets your criteria
    // In this example, let's assume the password must be at least 6 characters long
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; // Prevent form submission
    }
    
    // Check if the password is unique (you may implement this check using a backend service)
    if (!isPasswordUnique(password)) {
        alert("This password has been used before. Please choose a different one.");
        return false; // Prevent form submission
    }
    
    // If all validations pass, allow form submission
    return true;
}

function isPasswordUnique(password) {
    // Implement logic to check if the password is unique
    // This could involve a backend service or a database query
    // For the sake of this example, let's assume the password is unique
    return true;
}