
window.onload = function() {
    // Query all select elements and set their selectedIndex to -1
    var selects = document.querySelectorAll('select');
    selects.forEach(function(select) {
        select.selectedIndex = -1;
    });
};

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var inputs = document.querySelectorAll('input, select');

    // Validation on submit
    form.addEventListener('submit', function(event) {
        var isValid = true;
        inputs.forEach(function(input) {
            // Reset custom validity
            input.setCustomValidity('');

            // Custom messages for blank or invalid inputs
            if (input.value.trim() === '') { // Check for blank space
                input.setCustomValidity('dude wtf');
                input.classList.add('invalid');
                isValid = false;
            } else if (!input.checkValidity()) { // Check for invalid input
                input.setCustomValidity('r u kidding');
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });

        // Check the form again to show custom validity messages
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            // Display the first error message
            inputs.forEach(function(input) {
                if (input.classList.contains('invalid')) {
                    alert(input.validationMessage);
                    return;
                }
            });
        }
    });

    // Remove invalid class on input and reset custom validity
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            if (input.classList.contains('invalid')) {
                input.classList.remove('invalid');
                input.setCustomValidity('');
            }
        });
    });
});
