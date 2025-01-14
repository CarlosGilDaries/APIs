let video = document.querySelector('video');
let main = document.querySelector('main');

video.addEventListener('click', () => {
    if (video.paused)
        video.play();
    else  
        video.pause();
});

function minutosSegundos(secs) {
    let minutos = Math.floor(secs / 60);
    let segundos = Math.floor(secs % 60);
    return minutos + ":" + segundos;
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    main.textContent = 'Duración: ' + minutosSegundos(video.duration);
})