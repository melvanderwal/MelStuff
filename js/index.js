var contentMap = new Map();
contentMap.set("weather", "https://melvanderwal.github.io/Weather/?padtop=50");
contentMap.set("radar", "https://melvanderwal.github.io/Radar/?title=false");
contentMap.set("fuel", "https://melvanderwal.github.io/QueenslandFuelPrices/?title=false");

var iconMap = new Map();
iconMap.set("weather", "fas fa-cloud-sun-rain");
iconMap.set("radar", "fas fa-satellite-dish");
iconMap.set("fuel", "fas fa-gas-pump");

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("view"))
    changeSource(urlParams.get("view").toLowerCase(), false);

function changeSource(newType, doToggle) {
    let newSrc = contentMap.get(newType);
    let newIcon = iconMap.get(newType);
    let frame = document.getElementById("pageFrame");
    let buttonIcon = document.getElementById("buttonIcon");
    //if (newSrc !== frame.getAttribute("src")) {
    if (newSrc !== frame.contentWindow.location) {
        //frame.setAttribute("src", newSrc);
        frame.contentWindow.location.replace(newSrc);
        frame.reload;
        buttonIcon.className = newIcon;
    }
    if (doToggle)
        toggleClass();
}

function toggleClass() {
    let list = document.getElementById("buttonList");
    list.classList.toggle("active");
    let caret = document.getElementById("caret");
    caret.className = caret.className == "fas fa-caret-up" ? "fas fa-caret-down" : "fas fa-caret-up";
}