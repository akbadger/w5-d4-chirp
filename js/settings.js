getUsers();

function getUsers() {
    var token = sessionStorage.getItem('token');

    fetch('https://stark-castle-75079.herokuapp.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderUsersList(response);
    })
}

function renderUsersList(users) {
    console.log(users);

    users.forEach(function(user) {
        var userListItem =`<li class="well text-center">
                                <img src="${user.url}" alt="profile photo" class="avatar" />
                                <span>${user.username}</span> 
                                <button type="submit" class="btn btn-default btn-follow">Follow</button>
                                <button type="submit" class="btn btn-default btn-follow">Unfollow</button>
                            </li>`;
        // var userListItem = `<li data-id="${user.name}" class="list-group-item">${user.username}</li>`;

        document.querySelector('#users').innerHTML += userListItem;
    });
}

// function sendMessage() {
//     var message = document.querySelector('#message').value;
//     var token = sessionStorage.getItem('token');

//     document.querySelector('#message').value = '';

//     fetch('https://stark-castle-75079.herokuapp.com/messages', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },

//         // Back-end controls the left side, properties, of this object
//         // Front-end controls the variables names and values on the right side
//         body: JSON.stringify({
//             body: message,
//             token: token
//         })
//     })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             // console.log(response);

//             var messageSent = document.querySelector('#messageSent');
//             messageSent.classList.remove('hidden');
//             messageSent.children[0].innerHTML = 'Message Sent: ' + response.body;

//             setTimeout(function() {
//                 messageSent.classList.add('hidden');
//             }, 3000);

//         })
// }
// Contact GitHub API Training Shop Blog About
