function OnTogglePasswordVisibility(event) {
    var parent = event.target.parentElement;
    var input = parent.querySelector('input');
    if (parent && input) {
        parent.classList.toggle('visible');
        ToggleInputPasswordType(input);
    }
}

function ToggleInputPasswordType(input) {
    if (input.type === 'password') {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}