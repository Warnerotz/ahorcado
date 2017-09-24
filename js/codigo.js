window.onload = function () {    
    var arrayAhorcado= ["A","H","O","R","C","A","D","O"];
    var adivina = seleccionarPalabra();
    var adivinaCadena = adivina.split("");
    var numIntentos = arrayAhorcado.length;
    var numAciertos = 0;    
    //muestra las instrucciones
    document.getElementById("instrucciones").addEventListener("mouseover", mostrar, false);
    //muestra la pantalla de juego
    document.getElementById("jugar").addEventListener("click", mostrar, false);
    //crea los inputs de la palabra a adivinar
    document.getElementById("jugar").addEventListener("click", crearPalabra, false);
    //comprobar botones
    var teclado = document.getElementsByClassName("botonTeclado");
    for (var i = 0; i < teclado.length; i++) {

        teclado[i].addEventListener("click", comprueba, false);
    }

    function comprueba() {

        //variable de control para los botones de las letras
        var encontrada = false;

        //recorre el array de la palabra a adininar.
        for (var i = 0; i < adivinaCadena.length; i++) {
            //si la letra coincide con alguna de la palabra a adivinar la introduce en el el input correspondiente.
            if (adivinaCadena[i].toUpperCase() == this.value.toUpperCase()) {
                encontrada = true;
                document.getElementById("celdaletra" + i).value = this.value;
                numAciertos++;
            }
            
            //cuando acierte la palabra saldra un mensaje que ha acertado la palabra
            
            if(numAciertos == adivinaCadena.length){
                
                alert("palabra acertada");
            }
            
        }
        //si la letra es correcta se pone verde y se bloquea sino roja y se bloquea
        if (encontrada == true) {
            this.classList.add('btn-success');
            this.setAttribute("disabled", "disabled");
        } else {
            this.classList.add('btn-danger');
            this.setAttribute("disabled", "disabled");
            
            document.getElementById("celdaAhor"+(arrayAhorcado.length-numIntentos)).style.display= "inline";
            document.getElementById("celdaAhor"+(arrayAhorcado.length-numIntentos)).style.backgroundColor= "transparent";
            numIntentos--;
            
            if(numIntentos==0){
                
                alert("Has perdido tio");
            }
        }









    }

    function seleccionarPalabra() {
        var listaPalabras = ["coche", "moto", "camion"];
        var random = Math.floor(Math.random() * listaPalabras.length);
        return listaPalabras[random];
    }

    function mostrar() {
        //segun el id que le entra hace unas cosas u otras.
        switch (this.id) {
            //en caso de que le des a instrucciones muestra el cuadro de instrucciones.
            case "instrucciones":
                document.getElementById("ins").style.display = "block";
                break;
                //en caso de que le des a jugar ocultara toda la pantalla y mostrara la pantalla de juego             
            case "jugar":
                //lo que oculta.
                document.getElementById("botonera").style.display = "none";
                document.getElementById("ins").style.display = "none";
                //muestra el juego.
                document.getElementById("juego").style.display = "block";
                break;


        }


    }
    //funcion para crear el espacio de la palabra a adivinar 
    function crearPalabra() {

        var textoAdivinar = document.getElementById("textoAdivinar");

        for (var i = 0; i < adivina.length; i++) {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("style", "background-color:transparent");
            input.setAttribute("maxlength", "1");
            input.setAttribute("class", "claseAdivina");
            input.setAttribute("id", "celdaletra" + i);
            input.setAttribute("value", "_");
            textoAdivinar.appendChild(input);
        }
        
        //crea los espacios de la palabra ahorcado
        crearAhorcado();

    }

    function crearAhorcado() {
        
        
        for (var i = 0; i < arrayAhorcado.length; i++) {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("style", "background-color:transparent");
            input.setAttribute("maxlength", "1");
            input.setAttribute("class", "claeAhorcado");
            input.setAttribute("id", "celdaAhor" + i);
            input.setAttribute("value", arrayAhorcado[i]);
            input.setAttribute("style","display:none");
            document.getElementById("textoAhorcado").appendChild(input);

        }   


    }





}
