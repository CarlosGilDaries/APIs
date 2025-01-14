let main = document.querySelector('main');

function timeout(ms) {
    return new Promise (resolve => {
        setTimeout(resolve, ms);
    });
}

async function cuentaAtras() {
    for (let i = 5; i >= 0; i--) {
        main.textContent = i;
        await timeout(1000);
    }
}

cuentaAtras();

timeout(5000).then(() => {
    Notification.requestPermission().then((resp) => {
        if (resp == 'granted') {
            const n = new Notification('Nuevo vídeo', {
                body: 'clicka para ver el nuevo vídeo',
            })
            n.addEventListener('click', () => {
                window.open('http://127.0.0.1:5500/practica1.2.html');
            });
        }
    })
});