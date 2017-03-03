getChirps();

function getChirps() {
    var token = sessionStorage.getItem('token');
    var userId = location.href.split('?')[1].split('=').pop();

    fetch('NGROK URL HERE' + userId + '/chirps')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderChirpsList(response);
    })
}

function renderChirpsList(chirps) {
    console.log(chirps);

    chirps = chirps.reverse();

    chirps.forEach(createChirp);
}

function createChirp(chirp) {
    var chirpListItem = `<li data-id="${chirp.id}" class="list-group-item">${chirp.body}</li>`;
    var currentChirpsHTML = document.querySelector('#chirps').innerHTML;

    document.querySelector('#chirps').innerHTML = chirpListItem + currentChirpsHTML;
}