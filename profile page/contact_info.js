function resetEmail() {
    const emailField = document.getElementById('email-field');
    if (emailField) {
        emailField.value = ''; // Clear the email input field
        emailField.placeholder = 'Enter your new email address...'; // Update placeholder
        alert('Email field has been reset!');
    }
}
