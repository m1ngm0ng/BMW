
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Move the slider to the active tab
    var slider = document.querySelector(".slider");
    slider.style.left = evt.currentTarget.offsetLeft + 'px';
    slider.style.width = evt.currentTarget.offsetWidth + 'px';
}

// Open Tab1 on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablinks").click();
});