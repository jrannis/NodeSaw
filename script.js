const darkButton = document.getElementById("DarkMode_Button");
const logos = document.querySelectorAll(".logo");

darkButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

