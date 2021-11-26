function AddScrollListernerToSideContent() {
    window.addEventListener('scroll', OnSetSideContentScroll);
}

function RemoveScrollListernerToSideContent() {
    window.removeEventListener('scroll', OnSetSideContentScroll);
}

function OnSetSideContentScroll () {
    var element = document.querySelector('.SideContent');
    if (!element) return;
    else {
        PositioningTheSideContentNav(element);
    }
}

function PositioningTheSideContentNav(element) {
    var nav = document.querySelector('.SideContent nav');
    var bodyOpenChart = document.querySelector('body.open-chart');
    var header = document.querySelector('.MainHeader');
    if (nav && bodyOpenChart && header) {
        var topPos = element.getBoundingClientRect().top;
        var diff = header.offsetHeight + 30;
        if (topPos > diff) {
            nav.style.top = (topPos) + 'px';
        } else {
            nav.style.top = diff + 'px'
        }
    }
    if (nav && !bodyOpenChart && header) {
        nav.style.top = 'auto'
    }
}

function GoToNavigation(event, selector) {
    event.preventDefault();
    var element = document.querySelector(selector);
    if (element) {
        var header = document.querySelector('.MainHeader');
        if (header) {
            var diff = header.offsetHeight + 30;
            var topPos = element.offsetTop;

            // from Utils.js
            ScrollToY((topPos - diff), 600, 'easeInOutQuint');
        }
        
    }
}