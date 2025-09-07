// Theme toggle
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("theme-light");
  body.classList.toggle("theme-dark");
});

// Auto year update
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form validation (basic demo)
document.querySelector(".contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  
  if (name.length < 2) {
    alert("Name must be at least 2 characters.");
    return;
  }
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  alert("Form submitted successfully!");
});
