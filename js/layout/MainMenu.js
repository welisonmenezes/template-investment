function OpenMainMenu() {
    var menu = document.querySelector('.MainMenu');
    var menuBG = document.querySelector('.MainMenuBG');
    var body = document.querySelector('body');
    if (menu && menuBG && body) {
        menu.classList.add("open-menu");
        menuBG.classList.add("open-menu");
        document.documentElement.classList.add("open-menu");
    }
}

function CloseMainMenu() {
    var menu = document.querySelector('.MainMenu');
    var menuBG = document.querySelector('.MainMenuBG');
    var body = document.querySelector('body');
    if (menu && menuBG && body) {
        menu.classList.remove("open-menu");
        menuBG.classList.remove("open-menu");
        document.documentElement.classList.remove("open-menu");
    }
}