const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "light") {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
  }
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  isValid &= validateField("name", "Name is required");
  isValid &= validateEmail("email");
  isValid &= validateField("message", "Message cannot be empty");

  if (isValid) {
    form.reset();
    alert("Message sent successfully!");
  }
});

function validateField(id, message) {
  const input = document.getElementById(id);
  const group = input.parentElement;
  const error = group.querySelector(".error-msg");

  if (!input.value.trim()) {
    showError(group, error, message);
    return false;
  }

  clearError(group, error);
  return true;
}

function validateEmail(id) {
  const input = document.getElementById(id);
  const group = input.parentElement;
  const error = group.querySelector(".error-msg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(input.value.trim())) {
    showError(group, error, "Enter a valid email");
    return false;
  }

  clearError(group, error);
  return true;
}

function showError(group, error, message) {
  group.classList.add("error");
  error.textContent = message;
}

function clearError(group, error) {
  group.classList.remove("error");
  error.textContent = "";
}

