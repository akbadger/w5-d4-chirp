
document.querySelector('#loginButton').addEventListener('click', login);

function login() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    fetch('https://stark-castle-75079.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response);

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
