document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Get form values
    var name = document.getElementById("inputName").value.trim();
    var phone = document.getElementById("inputPhone").value.trim();
    var email = document.getElementById("inputEmail").value.trim();

    // Basic validation
    var isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        fetch('http://localhost:3000/submit-quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, phone, email }),
        })
        .then(response => response.text())
        .then(data => {
            showAlert(data);
            document.getElementById("quoteForm").reset();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

function showAlert(message) {
    const alertElement = document.getElementById("alertMessage");
    alertElement.textContent = message;
    alertElement.classList.remove("hidden");
    alertElement.classList.add("visible");

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
        alertElement.classList.remove("visible");
        alertElement.classList.add("hidden");
    }, 3000);
}
