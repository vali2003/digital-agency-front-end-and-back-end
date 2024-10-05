// Validation for Form 7
document.getElementById("quoteForm7").addEventListener("submit", function(event) {
    event.preventDefault();
    // Clear previous error messages
    document.getElementById("nameError7").textContent = "";
    document.getElementById("phoneError7").textContent = "";
    document.getElementById("emailError7").textContent = "";

    // Get form values
    var name = document.getElementById("inputName7").value.trim();
    var phone = document.getElementById("inputPhone7").value.trim();
    var email = document.getElementById("inputEmail7").value.trim();

    var isValid = true;

    // Validation checks
    if (name === "") {
        document.getElementById("nameError7").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError7").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError7").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If validation passes, submit the form via fetch
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
            document.getElementById("quoteForm7").reset(); // Reset the form after submission
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

// Validation for Form 8
document.getElementById("quoteForm8").addEventListener("submit", function(event) {
    event.preventDefault();
    // Clear previous error messages
    document.getElementById("nameError8").textContent = "";
    document.getElementById("phoneError8").textContent = "";
    document.getElementById("emailError8").textContent = "";

    // Get form values
    var name = document.getElementById("inputName8").value.trim();
    var phone = document.getElementById("inputPhone8").value.trim();
    var email = document.getElementById("inputEmail8").value.trim();

    var isValid = true;

    // Validation checks
    if (name === "") {
        document.getElementById("nameError8").textContent = "Please enter your name.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError8").textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError8").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // If validation passes, submit the form via fetch
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
            document.getElementById("quoteForm8").reset(); // Reset the form after submission
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
  



//   header form validation
    function validateForm(formNumber) {
        // Clear previous error messages
        document.getElementById("nameError" + formNumber).textContent = "";
        document.getElementById("phoneError" + formNumber).textContent = "";
        document.getElementById("emailError" + formNumber).textContent = "";

        // Get form values
        var name = document.getElementById("callbackName" + formNumber).value.trim();
        var phone = document.getElementById("callbackPhone" + formNumber).value.trim();
        var email = document.getElementById("callbackEmail" + formNumber).value.trim();

        var isValid = true;

        // Validation checks
        if (name === "") {
            document.getElementById("nameError" + formNumber).textContent = "Please enter your name.";
            isValid = false;
        }

        if (phone === "" || !/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError" + formNumber).textContent = "Please enter a valid 10-digit phone number.";
            isValid = false;
        }

        if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
            document.getElementById("emailError" + formNumber).textContent = "Please enter a valid email address.";
            isValid = false;
        }

        return isValid;
    }

    // Attach submit event listener for the specific form
    document.getElementById("callbackForm2").addEventListener("submit", async function(event) {
        event.preventDefault();

        if (validateForm(2)) {
            const formData = {
                name: document.getElementById("callbackName2").value.trim(),
                phone: document.getElementById("callbackPhone2").value.trim(),
                email: document.getElementById("callbackEmail2").value.trim(),
            };

            try {
                const response = await fetch('http://localhost:3000/submit-quote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Form 2 submitted successfully!");
                    document.getElementById("callbackForm2").reset();
                } else {
                    alert("Error submitting the form.");
                }
            } catch (error) {
                alert("Error: " + error.message);
            }
        }
    });

