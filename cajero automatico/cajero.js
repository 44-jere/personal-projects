var imagenes = [];
imagenes["200"] = "billetes de 200.png";
imagenes["100"] = "billetes de 100.png";
imagenes["50"] = "billetes de 50.png";
imagenes["20"] = "billetes de 20.png";
imagenes["10"] = "billetes de 10.png";
imagenes["5"] = "billetes de 5.png";
imagenes["1"] = "billetes de 1.png";

class billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

function entregarDinero() {
    var dibujando = [];
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }

            else {
                papeles = div;
            }

            bi.cantidad = bi.cantidad - papeles;
            for (var i = 0; i < papeles; i++) {
                dibujando.push(new billete(bi.valor, 1));
            }
            dinero -= (bi.valor * papeles);
        }
    }
    if (dinero == 0) {
        resultado.innerHTML += "Se ha retirado: <br />";
        for (var e of dibujando) {
            resultado.innerHTML += "<img src=" + e.imagen.src + " />";
        }
        resultado.innerHTML += "<hr />";
        cuenta();
    }
    else {
        resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
    }
}

var caja = [];
var entregado = [];
{
    caja.push(new billete(200, 200));
    caja.push(new billete(100, 100));
    caja.push(new billete(50, 50));
    caja.push(new billete(20, 100));
    caja.push(new billete(10, 200));
    caja.push(new billete(5, 200));
    caja.push(new billete(1, 300));
}

function cuenta() {
    total = 0
    for (var tot of caja) {
        total += tot.valor * tot.cantidad;
        console.log(total);
    }
}

var suma = 0;
var dinero;
var div = 0;
var papeles = 0;

var restante = document.getElementById("restante");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero)