window.onload = function () {
    var arrayAhorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];
    var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    var adivina = seleccionarPalabra();
    var adivinaCadena = adivina.split("");
    var numIntentos = arrayAhorcado.length;
    var numAciertos = 0;
   
   
    //muestra la pantalla de juego
    document.getElementById("jugar").addEventListener("click", mostrar, false);
    //crea los inputs de la palabra a adivinar
    document.getElementById("jugar").addEventListener("click", crearTablaPalabra, false);
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
                document.getElementById("celdaLetra" + i).innerHTML = this.value;
                numAciertos++;
            }

            //cuando acierte la palabra saldra un mensaje que ha acertado la palabra

            if (numAciertos == adivinaCadena.length) {

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

            document.getElementById("celdaAhor" + (arrayAhorcado.length - numIntentos)).style.display = "inline";
            document.getElementById("celdaAhor" + (arrayAhorcado.length - numIntentos)).style.backgroundColor = "transparent";
            numIntentos--;

            if (numIntentos == 0) {

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
            case "jugar":
                //lo que oculta.
                
                document.getElementById("inicio").style.display = "none";                
                //muestra el juego.
                document.getElementById("juego").style.display = "block";
                break;


        }


    }
    //funcion para crear el espacio de la palabra a adivinar 
    function crearTablaPalabra(){
        var tbl1 = document.createElement('table');
        tbl1.classList.add("tabla");
        tbl1.classList.add("col-md-6");
        var tr1 = tbl1.insertRow();
        for(var i = 0; i < adivina.length; i++)  {
            var td1 = tr1.insertCell();
            td1.setAttribute("id", "celdaLetra"+i);
            td1.setAttribute("class", "claseAdivina");
            td1.appendChild(document.createTextNode(""));
            td1.style.borderBottom = "thick solid black";
            td1.style.width="40px";;
        }   
        document.getElementById("textoAdivinar").appendChild(tbl1);
        
        crearTablaAhorcado(); 
    }
  /*  
    function crearPalabra() {

        var textoAdivinar = document.getElementById("textoAdivinar");

        for (var i = 0; i < adivina.length; i++) {
            var div= document.createElement("div");
            div.classList.add("col-md-1");
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("style", "background-color:transparent");
            input.setAttribute("maxlength", "1");
            input.setAttribute("readonly","readonly");
            input.setAttribute("class", "claseAdivina");
            input.setAttribute("id", "celdaletra" + i);
            input.setAttribute("value", "_");
            div.appendChild(input);
            textoAdivinar.appendChild(div);
        }

        //crea los espacios de la palabra ahorcado
        //crearTablaAhorcado();
        crearAhorcado();

    }
*/    
    
    function crearTablaAhorcado(){
        
        
        // creamos la tabla con la palabra AHORCADO
        var tbl1 = document.createElement('table');
        tbl1.classList.add("tabla");
        tbl1.classList.add("col-md-6");
        var tr1 = tbl1.insertRow();
        for(var i = 0; i < arrayAhorcado.length; i++)  {
            var td1 = tr1.insertCell();
            td1.setAttribute("id", "celdaAhor"+i);
            td1.setAttribute("class", "claeAhorcado");
            td1.appendChild(document.createTextNode(arrayAhorcado[i]));
            td1.style.borderBottom = "thick solid #F5F5DC";
            td1.style.display = "none";
        }   
        document.getElementById("textoAhorcado").appendChild(tbl1);
    }

    /*
    function crearAhorcado() {


        for (var i = 0; i < arrayAhorcado.length; i++) {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("style", "background-color:transparent");
            input.setAttribute("maxlength", "1");
            input.setAttribute("readonly","readonly");
            input.setAttribute("class", "claeAhorcado");
            input.classList.add("col-md-1");
            input.setAttribute("id", "celdaAhor" + i);
            input.setAttribute("value", arrayAhorcado[i]);
            input.setAttribute("style", "display:none");
            document.getElementById("textoAhorcado").appendChild(input);

        }


    }
    */
    

    function crearTeclado(){
        
        var tabla = document.createElement('table');
        for(var i =0; i<3; i++){
            var fila = tabla.insertRow();
            
            
        }
        
    }



}
