function ToggleCollapseChart(event) {
    var element = document.querySelector('.CollapseChart');
    if (element) {
        if (event.target.classList.contains('less')) {
            element.classList.remove('show');
            event.target.classList.remove('less');
            event.target.classList.add('more');
            document.querySelector('body').classList.remove('open-chart');
            window.dispatchEvent(new Event('scroll'));
        } else {
            // from Utils.js
            ScrollToY(0, 600, 'easeInOutQuint');
            
            element.classList.add('show');
            event.target.classList.add('less');
            event.target.classList.remove('more');
            document.querySelector('body').classList.add('open-chart');
        }
    }
}
