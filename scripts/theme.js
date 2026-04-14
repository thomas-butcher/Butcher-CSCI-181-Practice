const themeToggleButton = document.querySelector("#theme-toggle");

if (themeToggleButton) {
  const updateThemeToggleLabel = () => {
    const isDarkTheme = document.body.classList.contains("dark");

    themeToggleButton.textContent = isDarkTheme
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  };

  updateThemeToggleLabel();

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateThemeToggleLabel();
  });
}