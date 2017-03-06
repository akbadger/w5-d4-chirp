document.querySelector('#signupButton').addEventListener('click', signup);

if (location.href.includes('logout')) {
    document.querySelector('#loggedout').innerHTML = '<div class="alert alert-warning text-center">Logged out successfully.</div>';
}

function signup() {
    var fullName = document.querySelector('#fullName').value;
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var passwordConfirmation = document.querySelector('#passwordConfirmation').value;
    var url = document.querySelector('#url').value;

    fetch('https://stark-castle-75079.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            name: fullName,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
            url: url
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);

            if (response.token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('user', JSON.stringify(response));
                location.href = 'dashboard.html';
            }
            else {
                alert('There was an error. Check out your console.');
                console.log(response);
            }
        })
}