
// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};
spinner();


// Initiate the wowjs
new WOW().init();

// Validation for Form 4
document.getElementById("quoteForm4").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError4").textContent = "";
    document.getElementById("phoneError4").textContent = "";
    document.getElementById("emailError4").textContent = "";

    // Get form values
    var name = document.getElementById("inputName4").value.trim();
    var phone = document.getElementById("inputPhone4").value.trim();
    var email = document.getElementById("inputEmail4").value.trim();

    // Basic validation
    var isValid = true;

    if (name === "") {
        document.getElementById("nameError4").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError4").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError4").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If all validations pass, submit the form via fetch
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
            document.getElementById("quoteForm4").reset(); // Reset the form after submission
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

// Validation for Form 5
document.getElementById("quoteForm5").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError5").textContent = "";
    document.getElementById("phoneError5").textContent = "";
    document.getElementById("emailError5").textContent = "";

    // Get form values
    var name = document.getElementById("inputName5").value.trim();
    var phone = document.getElementById("inputPhone5").value.trim();
    var email = document.getElementById("inputEmail5").value.trim();

    // Basic validation
    var isValid = true;

    if (name === "") {
        document.getElementById("nameError5").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError5").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError5").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If all validations pass, submit the form via fetch
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
            document.getElementById("quoteForm5").reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
    // Back to top button
    
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#c99a36 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  