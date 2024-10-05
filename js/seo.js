// accordion start
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// time line script start
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});
// Validation for Form 9
document.getElementById("quoteForm9").addEventListener("submit", function(event) {
  event.preventDefault();
  // Clear previous error messages
  document.getElementById("nameError9").textContent = "";
  document.getElementById("phoneError9").textContent = "";
  document.getElementById("emailError9").textContent = "";

  // Get form values
  var name = document.getElementById("inputName9").value.trim();
  var phone = document.getElementById("inputPhone9").value.trim();
  var email = document.getElementById("inputEmail9").value.trim();

  var isValid = true;

  // Validation checks
  if (name === "") {
      document.getElementById("nameError9").textContent = "Please enter your name.";
      isValid = false;
  }

  if (phone === "" || !/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError9").textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError9").textContent = "Please enter a valid email address.";
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
          document.getElementById("quoteForm9").reset(); // Reset the form after submission
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
  



// seo header button validation

document.getElementById("callbackForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";

  // Get form values
  var name = document.getElementById("callbackName").value.trim();
  var phone = document.getElementById("callbackPhone").value.trim();
  var email = document.getElementById("callbackEmail").value.trim();

  var isValid = true;

  // Validation checks
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

  // If validation passes, submit the form
  if (isValid) {
      const formData = {
          name: name,
          phone: phone,
          email: email,
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
              alert("Form submitted successfully!");
              document.getElementById("callbackForm").reset();
          } else {
              alert("Error submitting the form.");
          }
      } catch (error) {
          alert("Error: " + error.message);
      }
  }
});