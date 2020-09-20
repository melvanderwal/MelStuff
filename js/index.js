var contentMap = new Map();
contentMap.set("weather", "https://script.google.com/macros/s/AKfycbzkef0L1D0efPByQfJnwoznyQ2s2FZbNtM501alTQ8un6fc2oeq/exec?padtop=50");
contentMap.set("radar", "https://script.google.com/macros/s/AKfycbxfBgCMWyIvPBjR5GsLp05uVtmEJjp23xSPtB5RMJDoybdFDvk/exec?padtop=45");
contentMap.set("fuel", "https://script.google.com/macros/s/AKfycbw9_v0jAMeLUb3o7OvHv6LytmPDXjoUnb-B6uWM_qgyqNgClDxK/exec?padtop=45");

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
    if (newSrc !== frame.getAttribute("src")) {
        frame.setAttribute("src", newSrc);
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