window.onload = function () {

    var adivina = seleccionarPalabra();
    var cadena = adivina.split("");
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
        

        var encontrada = false;
        for (var i = 0; i < cadena.length; i++) {
            if (cadena[i].toUpperCase() == this.value.toUpperCase()) {
                encontrada = true;
            }
        }

        if (encontrada == true) {
            this.classList.add('btn-success');
        } else {
            this.classList.add('btn-danger');
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
                document.getElementById("inicio").style.display = "none";
                document.getElementById("ins").style.display = "none";
                //muestra el juego.
                document.getElementById("juego").style.display = "inline";
                break;


        }


    }

    function crearPalabra() {

        var textoAdivinar = document.getElementById("textoAdivinar");
        for (var i = 0; i < adivina.length; i++) {
            textoAdivinar.innerHTML += "<input type='text' maxlength='1' class='claseAhorcado' value=" + i + ">";


        }

    }





}
