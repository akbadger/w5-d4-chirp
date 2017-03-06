

// var moment = require('moment');
//     moment().format();

var user = JSON.parse(sessionStorage.getItem('user'));



document.querySelector('#chirpButton').addEventListener('click', postChirp);

getChirps();
showUser();

// function timeDisplay() {
//     moment().format('MMMM Do YYYY, hh:mm:ss: a');
// }

function getChirps() {
    fetch('https://stark-castle-75079.herokuapp.com/chirps?token=' + user.token)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderChirpsList(response);
    })
}

function showUser() {
    document.querySelector('.profile img').src = user.url ? user.url : 'http://unsplash.it/150/150?random';
    document.querySelector('.profile h6').innerHTML = user.username;
}


function renderChirpsList(chirps) {
    console.log(chirps);

    // chirps = chirps.reverse();

    chirps.forEach(createChirp);
}

function createChirp(chirp) {
    var chirpListItem = `<li>
                            <img src="${chirp.user.url ? chirp.user.url : 'http://unsplash.it/150/150?random'}" alt="profile photo" class="avatar" />
                            <span class="message">${chirp.body}</span> <span class="text-muted text-small">Wednesday, March 01 2017 12:04:43PM</span>
                            <h6>${chirp.user.username}</h6>
                        </li>`;
    // <span class="message">${chirp.body}</span> <span class="text-muted text-small">${timeDisplay()}</span> 

    document.querySelector('#chirp').innerHTML = chirpListItem + document.querySelector('#chirp').innerHTML;
}

function postChirp() {
    var chirp = document.querySelector('#chirpInput').value;

    fetch('https://stark-castle-75079.herokuapp.com/chirps', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            token: user.token,
            body: chirp
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            createChirp(response);
            
        })

        // This code doesn't work.  Trying to clear out the text input once the chirp has been posted. Stumped here...
        .then(function(response) {
            document.querySelector('#chirpInput').innerHTML = '';
        })
}


