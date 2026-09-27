
const selectElem = document.querySelector("#theme-select");
const pageContent = document.querySelector("body");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    const current = selectElem.value;

    if (current === "ocean") {
        pageContent.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === "forest") {
        pageContent.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === "desert") {
        pageContent.style.backgroundImage =
            "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        pageContent.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}