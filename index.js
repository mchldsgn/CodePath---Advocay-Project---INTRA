const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled')
  } else if (window.scrollY <= 50) {
    navbar.classList.remove('navbar-scrolled')
  }
});
 
 
 
 
 
 
 // Newsletter

  function openModal() {
    document.getElementById("signupModal").style.display = "block";
    // Reset input values
    document.getElementById("nl-name").value = "";
    document.getElementById("nl-email").value = "";
}

function closeModal() {
    document.getElementById("signupModal").style.display = "none";
}

function validateForm() {
    let name = document.getElementById("nl-name").value;
    let email = document.getElementById("nl-email").value;
    let message = "";

    if (name == "") {
        message = "Please enter your name";
    } else if (email == "") {
        message = "Please enter your email";
    } else if (!isValidEmail(email)) {
        message = "Please enter a valid email address";
    }

    if (message !== "") {
        alert(message);
        return false;
    }

    openModal();
    return false; // Prevents the form from submitting
}

function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


