// pop up display cookie
document.addEventListener("DOMContentLoaded", function () {
  const popupWindow = document.getElementById("popupWindow");
  const closeButton = document.querySelector(".close");
  const userForm = document.getElementById("userForm");
  const okButton = document.getElementById("okButton");

  // Flag to track if the form has been submitted
  let formSubmitted = false;

  function showPopup() {
      popupWindow.style.display = 'block';
  }

  // Show the popup every 5 seconds
  const intervalId = setInterval(() => {
      if (!formSubmitted) { // Only show if the form hasn't been submitted
          showPopup();
      }
  }, 5000);

  closeButton.addEventListener('click', function () {
      popupWindow.style.display = 'none';
  });

  userForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;

      // Simulate sending data to the server
      fetch('http://localhost:3000/submit', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, mobile })
      })
      .then(response => {
          if (response.ok) {
              formSubmitted = true; // Update the flag
              displayThankYouMessage();
          } else {
              throw new Error('Network response was not ok.');
          }
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
  });

  function displayThankYouMessage() {
      popupWindow.querySelector('.popup-content').innerHTML = `
          <h2>Thank You!</h2>
          <p>Your details have been submitted.</p>
          <button id="okButton" class="btn-wrappers">OK</button>
      `;
      // Attach event listener for the new OK button
      document.getElementById("okButton").addEventListener('click', function () {
          popupWindow.style.display = 'none';
      });
      popupWindow.style.display = 'block'; // Show the updated popup
  }
});

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


    //   contact form
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
    
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
    
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert("Please fill out all fields.");
            return;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        // Send data to the server if validation is successful
        const response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        });
    
        const data = await response.json();
        alert(data.message);
    });
    