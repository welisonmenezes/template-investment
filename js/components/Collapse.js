function OnOpenCollapsed(elementSelector) {
    var element = document.querySelector(elementSelector);
    if (element) {
        element.classList.toggle('show');
    }
}