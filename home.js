//section1

function toggleMenu() {
    var links = document.querySelector('.section1 .links ul');
    links.classList.toggle('active');
}

//hide unhide 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  function revealContentOnScroll() {
      sections.forEach((section) => {
          const sectionPosition = section.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 2;

          if (sectionPosition < screenPosition) {
              section.classList.add("visible");
          }
      });
  }

  // Trigger content reveal on initial scroll
  revealContentOnScroll();

  // Trigger content reveal on scroll
  window.addEventListener("scroll", revealContentOnScroll);
});



//section2

document.getElementById("contactButton").addEventListener("click", function() {
  document.getElementById("modalContainer").style.display = "block";
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("modalContainer").style.display = "none";
  window.location.href = window.location.href; // Refresh the page
});



//section3

  // Function to animate numbers
  function animateNumber(element, targetNumber) {
    let currentNumber = 0;
    const interval = setInterval(() => {
      currentNumber += Math.ceil(targetNumber / 1000);
      element.textContent = currentNumber;
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
        element.textContent = targetNumber;
      }
    }, 350);
  }

  // Update the following values with your actual data
  const websitesMade = 15;
  const yearsExperience = 3;
  const clientsWorkedWith = 10;
  const countriesWorkingIn = 5;

  // Animate the numbers when the page loads
  window.addEventListener("load", () => {
    animateNumber(document.getElementById("websitesMade"), websitesMade);
    animateNumber(document.getElementById("yearsExperience"), yearsExperience);
    animateNumber(document.getElementById("clientsWorkedWith"), clientsWorkedWith);
    animateNumber(document.getElementById("countriesWorkingIn"), countriesWorkingIn);
  });


  //smooth scroll

  const links = document.querySelectorAll('.smooth-scroll');

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const initialPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + initialPosition;
    const distance = targetPosition - initialPosition;
    const duration = 1500; // Adjust this value to control the scrolling speed (in milliseconds)
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const progress = currentTime - start;
      window.scrollTo(0, easeInOutCubic(progress, initialPosition, distance, duration));
      if (progress < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }


  //section8

  const questions = document.querySelectorAll('.question');

  // Add click event listener to each question element
  questions.forEach(question => {
    question.addEventListener('click', () => {
      // Toggle the 'active' class on the answer element
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
    });
  });
  

  //section9

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name.trim() === "") {
      alert("Please enter your name.");
      return false;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (message.trim() === "") {
      alert("Please enter your message.");
      return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  