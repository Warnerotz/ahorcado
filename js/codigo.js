window.onload = function () {
    //array que genera la palabra ahorcado
    var arrayAhorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];
    //array del abecedario para crear el teclado.
    var abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //sino la introducimos la palabra se coge de un array predeterminado.
    var adivina = seleccionarPalabra();
    var adivinaCadena = adivina.split("");
    //el numero de intentos es la longitud de la palabra ahorcado
    var numIntentos = arrayAhorcado.length;
    var numAciertos = 0;
    //crea el teclado y los huecos de la palabra ahorcado
    crearTeclado();
    crearTablaAhorcado();

    //listener para cuando le des a jugar se muestre la pantalla de juego
    document.getElementById("jugar").addEventListener("click", mostrar, false);
    //listener que cuando le das al boton reiniciar reinicia el juego
    document.getElementById("reiniciar").addEventListener("click", reiniciar, false);
    //listener para salir del juego.
    document.getElementById("salir").addEventListener("click", salir, false);
    //variable que recoje todos los inputs que tengan la clase teclado
    var teclado = document.getElementsByClassName("botonTeclado");
    //funcion que crea los listeners de las teclas del teclado.
    listenersTeclado();
    //listener para que cuando pulsemos multijugador salga el input para introducir la palabra a adivinar.
    document.getElementById("multi").addEventListener("click", multijugador, false);
    //listener para crear el juego a partir de la palabra introducida en el input.
    document.getElementById("intPal").addEventListener("keypress", dosJugadores, false);

    //funcion que muestra el input para introducir la palabra a adivinar en el multijugador.
    function multijugador() {
        document.getElementById("palabraEscribir").style.display = "flex";
    }
    //funcion que introudce la palabra del input y llama a la funcion mostrar.
    function dosJugadores(event) {
        var evento = event;
        //cuando pulse el enter y halla palabra introducida se ejecuta. sino mensaje introduce la palabra.
        if (evento.keyCode == 13 && document.getElementById("intPal").value != "") {
            adivina = document.getElementById("intPal").value;
            adivinaCadena = adivina.split("");
            mostrar();


        } else if (evento.keyCode == 13 && document.getElementById("intPal").value == "") {

            alert("introduce la palabra");
        }

    }


    //funcion que muestra la pantalla de juego y oculta la pantalla de inicio y genera la tabla de la palabra adivinar.
    function mostrar() {
        document.getElementById("inicio").style.display = "none";
        //muestra el juego.
        document.getElementById("juego").style.display = "block";

        crearTablaPalabra();


    }

    //funcion que crea la tabala de la palabra adivinar. se crea dinamicamente.
    function crearTablaPalabra() {

        //creamos un div al que le añadimos id y las clases correspondientes.
        var div = document.createElement("div");
        div.setAttribute("id", "tablaPalabra");
        div.classList.add("col-md-6");
        div.classList.add("centrarTabla");
        //creamos la tabla y le añadimos las clases y atributos que toque        
        var tbl1 = document.createElement('table');
        tbl1.classList.add("tabla");
        tbl1.setAttribute("id", "pAdivina");
        //insertamos la fila en la tabla
        var tr1 = tbl1.insertRow();
        //bucle que crea los td que corresponda segun la longitud de la palabra a adivinar y le añade los atributos estilos que corresponde.
        for (var i = 0; i < adivina.length; i++) {
            var td1 = tr1.insertCell();
            td1.setAttribute("id", "celdaLetra" + i);
            td1.setAttribute("class", "claseAdivina");
            td1.appendChild(document.createTextNode(""));
            td1.style.borderBottom = "thick solid black";
            td1.style.width = "40px";;
        }
        //hacemos que el div creado cuelgue de donde queremos y que la tabla cuelgue del div generado. 
        document.getElementById("textoAdivinar").appendChild(div);
        div.appendChild(tbl1);




    }
    //funcion que reinicia el juego, borra las tabalas generadas del teclado, de ahorcado y de la palabra adivinar y las vuelve a crear.
    function reiniciar() {
        //elimino tabla de la palabra.
        var tAdivine = document.getElementById("tablaPalabra");
        tAdivine.parentNode.removeChild(tAdivine);
        //elimino tabla de ahorcado
        var tAhor = document.getElementById("tablaAhorcado");
        tAhor.parentNode.removeChild(tAhor);
        //elimina el teclado y pone cadena vacia en el mensaje del final.
        var tTeclado = document.getElementById("tablaBotones");
        var tmenPierde = document.getElementById("textoh4");
        tmenPierde.innerHTML = "";
        tTeclado.parentNode.removeChild(tTeclado);
        //oculta los textos de gana y pierde.
        document.getElementById("gana").style.display = "none";
        document.getElementById("pierde").style.display = "none";

        // crea de nuevo la palabra.        
        adivina = seleccionarPalabra();
        adivinaCadena = adivina.split("");
        //reseteamos variables.
        numIntentos = arrayAhorcado.length;
        numAciertos = 0;
        //volvemos a crear el teclado y los listeners.
        crearTeclado();
        var teclado = document.getElementsByClassName("botonTeclado");
        listenersTeclado();
        //volvemos a crear la tabla de la palabra a adivinar y la tabla del ahorcado.
        crearTablaPalabra();
        crearTablaAhorcado();
    }
    //funcion que se encarga de comprobar si la letra pulsada forma parte de la palabra o no.
    function comprueba() {

        //variable de control para los botones de las letras.
        var encontrada = false;

        //recorre el array de la palabra a adininar.
        for (var i = 0; i < adivinaCadena.length; i++) {
            //si la letra coincide con alguna de la palabra a adivinar la introduce en el el input correspondiente. y el numero de aciertos aumenta.
            if (adivinaCadena[i].toUpperCase() == this.value.toUpperCase()) {
                //si la letra pulsada es correcta se pone a true.
                encontrada = true;
                document.getElementById("celdaLetra" + i).innerHTML = this.value;
                numAciertos++;
            }

            //cuando acierte la palabra saldra un mensaje que ha acertado la palabra
            if (numAciertos == adivinaCadena.length) {
                document.getElementById("gana").style.display = "flex";
                document.getElementById("botonReiniciar").style.display = "flex";
                bloquearTeclado();

            }

        }
        //si la letra es correcta se pone verde y se bloquea sino roja y se bloquea.
        if (encontrada == true) {
            this.classList.add('btn-success');
            this.setAttribute("disabled", "disabled");
        } else {
            this.classList.add('btn-danger');
            this.setAttribute("disabled", "disabled");
            // al fallar la letra se introduce la letra correspondiente del ahorcado.
            document.getElementById("celdaAhor" + (arrayAhorcado.length - numIntentos)).style.display = "inline";
            //le pone el background en trasparent.
            document.getElementById("celdaAhor" + (arrayAhorcado.length - numIntentos)).style.backgroundColor = "transparent";
            //al fallar baja el numero de intentos.
            numIntentos--;
            //si el numero de intentos es 0 se pierde la partida.
            if (numIntentos == 0) {
                document.getElementById("textoh4").innerHTML = "Has perdido. La palabra era: " + adivina;
                document.getElementById("pierde").style.display = "flex";
                document.getElementById("botonReiniciar").style.display = "flex";
                //funcion que bloquea el teclado.
                bloquearTeclado();
            }
        }

    }
    //funcion que selecciona la palabra aleatoriamente de un array generado a mano.
    function seleccionarPalabra() {

        var listaPalabras = ["coche", "moto", "camion"];
        var random = Math.floor(Math.random() * listaPalabras.length);

        return listaPalabras[random];
    }

    function crearTablaAhorcado() {


        // creamos la tabla con la palabra AHORCADO
        //creamos el div correspondiente del que va a colgar la tabla.
        var div = document.createElement("div");
        //asignamos atributos y clases que corresponda.
        div.setAttribute("id", "tablaAhorcado");
        div.classList.add("col-md-6");
        div.classList.add("centrarTabla");
        //creamos la tabla con sus clases y atributos que corresponda.
        var tbl1 = document.createElement('table');
        tbl1.classList.add("tabla");
        tbl1.setAttribute("id", "pAhorcado");
        //creamos la fila correspondiente.
        var tr1 = tbl1.insertRow();
        //bucle que introduce el numero de celdas que corresponda a la longitud de la palabra AHORCADO.
        for (var i = 0; i < arrayAhorcado.length; i++) {
            var td1 = tr1.insertCell();
            //añadimos atributos que corresponda.
            td1.setAttribute("id", "celdaAhor" + i);
            td1.setAttribute("class", "claeAhorcado");
            //le añadimos el texto que corresponde a cada posicion y le ponemos display none para q no salaga desde el princpio y un border botton.
           td1.appendChild(document.createTextNode(arrayAhorcado[i]));
            td1.style.borderBottom = "thick solid red";
            td1.style.display = "none";
        }
       //hacemos que el div cuelgue de donde toca y q la tabla cuelgue del div que hemos creado.
        document.getElementById("textoAhorcado").appendChild(div);
        div.appendChild(tbl1);
    }
    //crea el teclado del juego, tabla de 3 filas y 9 columnas
    function crearTeclado() {
        //variable que nos sirve para indicar el indice del array
        var z = 0;
        //creamos la tabla y añadimos clases y atributos que toque
        var tabla = document.createElement('table');
        tabla.classList.add("col-lg-6");
        tabla.setAttribute("id", "tablaBotones");
        //bucle for que indica las filas.
        for (var i = 0; i < 3; i++) {
            //creamos la fila.
            var fila = document.createElement('tr');
            //bucle for para las columnas.
            for (var j = 0; j < 9; j++) {
                //creamos el td que corresponde.
                var td = document.createElement('td');
                //creo el imput añadiendo calses y atributos que corresponda.
                var input = document.createElement('input');
                input.setAttribute("type", "button");
                input.classList.add("btn");
                input.classList.add("btn-default");
                input.classList.add("botonTeclado");
                input.setAttribute("value", abecedario[z]);
                //hacemos que el input cuelgue del td.
                td.appendChild(input);
                //hacemos que el td cuelgue de la fila.
                fila.appendChild(td);
                //aumentamos la variable para el indice del array.
                z++;
            }
            //una vez termina de crear el interiro de la fila hacemos que esa fila cuelgue de la tabla.
            tabla.appendChild(fila);

        }
        //una vez generada la tabla hacemos que cuelgue del div correspondiente.
        document.getElementById("teclado").appendChild(tabla)

    }
    //funcion que bloquea el teclado usada una vez haya finalizado la partida.
    function bloquearTeclado() {
        for (var i = 0; i < teclado.length; i++) {
            teclado[i].setAttribute("disabled", "disabled");
        }

    }
    //funcion para salir del juego.
    function salir() {
        location.reload();

    }
    //funcion que crea los distintos listeners para los botones del teclado.
    function listenersTeclado() {
        for (var i = 0; i < teclado.length; i++) {

            teclado[i].addEventListener("click", comprueba, false);
        }

    }


}
