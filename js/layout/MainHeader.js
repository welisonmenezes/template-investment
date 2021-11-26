function SetDarkOrLightMode(isDark = false) {
    if (isDark) {
        SetDarkMode();
    } else {
        SetLightMode();
    }
}

function SetDarkMode() {
    var element = document.querySelector('body');
    if (element) {
        localStorage.setItem('transfero-prime-template-mode', 'dark-mode');
        element.classList.add('dark-mode');
        element.classList.remove('light-mode');
    }
}

function SetLightMode() {
    var element = document.querySelector('body');
    if (element) {
        localStorage.setItem('transfero-prime-template-mode', 'light-mode');
        element.classList.remove('dark-mode');
        element.classList.add('light-mode');
    }
}

function SetDarkOrLightModeOnLoad() {
    var templateMode = localStorage.getItem('transfero-prime-template-mode');
    console.log(templateMode)
    if (templateMode && templateMode === 'light-mode') {
        SetLightMode();
    } else {
        SetDarkMode();
    }
}
