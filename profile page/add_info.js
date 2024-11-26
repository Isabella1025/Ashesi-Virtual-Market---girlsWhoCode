document.addEventListener('DOMContentLoaded', () => {
    // Get query parameters (e.g., ?type=email)
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    const formTitle = document.getElementById('form-title');
    const inputLabel = document.getElementById('input-label');
    const inputField = document.getElementById('input-field');

    // Update the form based on the type
    switch (type) {
        case 'instagram':
            formTitle.textContent = 'Add Instagram';
            inputLabel.textContent = 'Instagram Handle';
            inputField.placeholder = 'Enter your Instagram handle...';
            break;
        case 'tiktok':
            formTitle.textContent = 'Add TikTok';
            inputLabel.textContent = 'TikTok Username';
            inputField.placeholder = 'Enter your TikTok username...';
            break;
        case 'twitter':
            formTitle.textContent = 'Add Twitter';
            inputLabel.textContent = 'Twitter Handle';
            inputField.placeholder = 'Enter your Twitter handle...';
            break;
        case 'birthday':
            formTitle.textContent = 'Add Birthday';
            inputLabel.textContent = 'Birthday';
            inputField.type = 'date';
            inputField.placeholder = '';
            break;
        case 'gender':
            formTitle.textContent = 'Add Gender';
            inputLabel.textContent = 'Gender';
            inputField.placeholder = 'Enter your gender...';
            break;
        case 'email':
            formTitle.textContent = 'Edit Email';
            inputLabel.textContent = 'Email Address';
            inputField.type = 'email'; // Set input type to email
            inputField.placeholder = 'Enter your new email address...';
            break;
        default:
            formTitle.textContent = 'Add Info';
            inputLabel.textContent = 'Information';
            inputField.placeholder = 'Enter your information here...';
    }
});
