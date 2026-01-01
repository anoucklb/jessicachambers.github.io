const form = document.getElementById('login');
const username_input = document.getElementById('username');
const password_input = document.getElementById('password');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    // event.preventDefault()  Prevent Submit

    let errors = getLoginFormErrors(username_input.value, password_input.value)

    if(errors.length > 0){
    //     If there are any errors
        event.preventDefault()
        error_message.innerText = errors.join('. ')
    }
})

function getLoginFormErrors(username, password) {
    let errors = []

    if(username === '' || username == null) {
        errors.push('Username/email is required')
        username.input.parentElement.classlist.add('incorrect')
    }

    if(password === '' || password == null) {
        errors.push('Password is required')
        password.input.parentElement.classlist.add('incorrect')
    }

    return errors;
}

