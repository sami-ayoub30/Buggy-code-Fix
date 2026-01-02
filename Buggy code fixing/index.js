const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
