
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



  // graphic header validations
  function validateForm(formNumber) {
    document.getElementById("nameError" + formNumber).textContent = "";
    document.getElementById("phoneError" + formNumber).textContent = "";
    document.getElementById("emailError" + formNumber).textContent = "";

    var name = document.getElementById("callbackName" + formNumber).value.trim();
    var phone = document.getElementById("callbackPhone" + formNumber).value.trim();
    var email = document.getElementById("callbackEmail" + formNumber).value.trim();

    var isValid = true;

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

document.getElementById("callbackForm1").addEventListener("submit", async function(event) {
    event.preventDefault();

    if (validateForm(1)) {
        const name = document.getElementById("callbackName1").value.trim();
        const phone = document.getElementById("callbackPhone1").value.trim();
        const email = document.getElementById("callbackEmail1").value.trim();

        const response = await fetch('http://localhost:3000/submit-quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email })
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            document.getElementById("callbackForm1").reset();
        } else {
            alert("Error submitting form.");
        }
    }
});


// form validation -1
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

  if (phone === "" || !/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
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

// Validation for Form 2
document.getElementById("quoteForm2").addEventListener("submit", function(event) {
  event.preventDefault();

  // Clear previous error messages
  document.getElementById("nameError2").textContent = "";
  document.getElementById("phoneError2").textContent = "";
  document.getElementById("emailError2").textContent = "";

  // Get form values
  var name = document.getElementById("inputName2").value.trim();
  var phone = document.getElementById("inputPhone2").value.trim();
  var email = document.getElementById("inputEmail2").value.trim();

  // Basic validation
  var isValid = true;

  if (name === "") {
      document.getElementById("nameError2").textContent = "Please enter your name.";
      isValid = false;
  }

  if (phone === "" || !/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError2").textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError2").textContent = "Please enter a valid email address.";
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
          document.getElementById("quoteForm2").reset(); // Reset the form after submission
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
});




// Validation for Form 3
document.getElementById("quoteForm3").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Clear previous error messages
  document.getElementById("nameError3").textContent = "";
  document.getElementById("phoneError3").textContent = "";
  document.getElementById("emailError3").textContent = "";

  // Get form values
  var name = document.getElementById("inputName3").value.trim();
  var phone = document.getElementById("inputPhone3").value.trim();
  var email = document.getElementById("inputEmail3").value.trim();

  // Basic validation
  var isValid = true;

  if (name === "") {
      document.getElementById("nameError3").textContent = "Please enter your name.";
      isValid = false;
  }

  if (phone === "" || !/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError3").textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError3").textContent = "Please enter a valid email address.";
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
          document.getElementById("quoteForm3").reset(); // Reset the form after submission
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
});