
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
    document.getElementById("nameError4").textContent = "";
    document.getElementById("phoneError4").textContent = "";
    document.getElementById("emailError4").textContent = "";

    var name = document.getElementById("inputName4").value.trim();
    var phone = document.getElementById("inputPhone4").value.trim();
    var email = document.getElementById("inputEmail4").value.trim();

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

    if (isValid) {
        document.getElementById("quoteForm4").submit();
    }
});
// Validation for Form 5
document.getElementById("quoteForm5").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("nameError5").textContent = "";
    document.getElementById("phoneError5").textContent = "";
    document.getElementById("emailError5").textContent = "";

    var name = document.getElementById("inputName5").value.trim();
    var phone = document.getElementById("inputPhone5").value.trim();
    var email = document.getElementById("inputEmail5").value.trim();

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

    if (isValid) {
        document.getElementById("quoteForm5").submit();
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