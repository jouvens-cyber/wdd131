const themeSelect = document.querySelector("#theme-select");
const logo = document.querySelector("footer img");

themeSelect.addEventListener("change", changeTheme);

function changeTheme() {
    const currentTheme = themeSelect.value;

    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        logo.src =
            "https://wddbyui.github.io/wdd131/images/byui-logo-white.png";
    } else {
        document.body.classList.remove("dark");
        logo.src =
            "https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp";
    }
}