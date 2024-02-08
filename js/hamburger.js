function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
function openSubmenu() {
    document.getElementsByClassName("submenu").style.height = "100%";
}

function closeSubmenu() {
    document.getElementsByClassName("submenu").style.height = "0%";
}
document.querySelectorAll('.navbar-content a').forEach((item) => {
    item.addEventListener('click', event => {
        let submenu = event.target.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            if (submenu.style.display === 'none' || submenu.style.display === '') {
                submenu.style.display = 'block';
            } else {
                submenu.style.display = 'none';
            }
        }
    });
});
