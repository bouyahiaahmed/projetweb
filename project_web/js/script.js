function validateForm() {
    var nameInput = document.getElementById('contactName');
    var surnameInput = document.getElementById('contactLastName');
    var emailInput = document.getElementById('contactEmail');
    var cinInput = document.getElementById('contactcin');
    var cinValue = cinInput.value;

    if (!/^[a-zA-Z\s]{3,}$/.test(nameInput.value)) {
        alert('Name must contain only characters and be at least 3 characters long.');
        nameInput.focus();
        return false;
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(surnameInput.value)) {
        alert('Surname must contain only characters and be at least 3 characters long.');
        surnameInput.focus();
        return false;
    }

    if (!/^\d{8}$/.test(cinValue)) {
        alert('CIN must be a number with exactly 8 digits.');
        cinInput.focus();
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Enter a valid email address.');
        emailInput.focus();
        return false;
    }

    return true; // Form will be submitted if all validations pass
}
