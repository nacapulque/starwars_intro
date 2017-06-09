console.log('Use the Source, Luke.');

var tiempo = {
    estrellas: { in: 5000
    },
    musica: { in: 1000
    }
};

function musica() {
    var cancion = document.querySelector('.sw_music');
    cancion.play();
    cancion.classList.add('playing')
}

function estrellas() {
    var estrellas = document.querySelector('.stars');
    setTimeout(function() {
        estrellas.classList.add('show-stars');
    }, tiempo.estrellas.in);
}

function empezar() {
    setTimeout(function() {
        musica();
    }, tiempo.musica.in);
    setTimeout(function() {
        estrellas();
    }, tiempo.estrellas.in);
}

empezar();