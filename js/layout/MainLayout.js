var BaseLayoutIsScrolled = false;

function AddScrollListernerToMainLayout() {
    window.addEventListener('scroll', OnSetBodyScrolledStatus);
}

function RemoveScrollListernerToMainLayout() {
    window.removeEventListener('scroll', OnSetBodyScrolledStatus);
}

function OnSetBodyScrolledStatus(){
    if (window.pageYOffset > 10 && ! BaseLayoutIsScrolled) {
        BaseLayoutIsScrolled = true;
        SetBodyScrolledStatus(true);
    }
    if(window.pageYOffset <= 10 && BaseLayoutIsScrolled) {
        BaseLayoutIsScrolled = false;
        SetBodyScrolledStatus(false);
    }
}

function SetBodyScrolledStatus(isToAdd = true) {
    var element = document.querySelector('body');
    if (element) {
        if (isToAdd) {
            element.classList.add('scrolled-window');
        } else {
            element.classList.remove('scrolled-window');
        }
    }
}