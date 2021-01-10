const juegocanvas = document.getElementById("juegocanvas");

const ctx = juegocanvas.getContext("2d");

const DIRECCIONES = {
    ARRIBA: 1,
    ABAJO: 2,
    IZQUIERDA: 3,
    DERECHA:4
}

let direccion = DIRECCIONES.DERECHA
let cabezaposX = 10, cabezaposY = 10

let snake = [
    {posX: 10, poxY: 10},
    {posX: 20, poxY: 10},
    {posX: 30, poxY: 10},
    {posX: 40, poxY: 10},
]

function dibujarSnake(){
    for (let unidadDeSnake of snake){
        ctx.beginPath()
        ctx.rect(unidadDeSnake.posX, unidadDeSnake.posY, 10, 10)
        ctx.stroke()
    }
}

function ajustarPosicion(){
    if (direccion === DIRECCIONES.DERECHA) cabezaposX += 10;
    else if(direccion === DIRECCIONES.IZQUIERDA) cabezaposX -= 10;
    else if (direccion === DIRECCIONES.ARRIBA) cabezaposY += 10;
    else if(direccion === DIRECCIONES.ABAJO) cabezaposY -= 10;
    else throw new ERROR("direccion tiene un valor invalido");
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, juegocanvas.width, juegocanvas.height);
}

document.addEventListener('keyup', (e) =>{
    if(e.code === "ArrowUp")            direccion = DIRECCIONES.ARRIBA;
    else if (e.code === "ArrowDown")    direccion = DIRECCIONES.ABAJO;
    else if (e.code === "ArrowLeft")    direccion = DIRECCIONES.IZQUIERDA;
    else if (e.code === "ArrowRight")   direccion = DIRECCIONES.DERECHA;
    else return;

    limpiarCanvas();
    ajustarPosicion();
    dibujarSnake();
});