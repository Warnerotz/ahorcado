window.onload = function () {
        // evento para empezar a jugar
        document.getElementById("botonInicio").addEventListener('click', empezarJuego, false);

        // evento para comprobar la letra desde el boton
        document.getElementById("botonComprobar").addEventListener('click', comprobarPalabra, false);

        // evento para reiniciar el juego
        document.getElementById("botonReiniciar").addEventListener('click', reiniciarJuego, false);

        // variable que recogera la palabra
        var palabra = "";

        //creamos una variable que contenga la palabra ahorcado
        var stringAhorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];

        // variable que recogera el numero de intentos
        var numIntentos = stringAhorcado.length;

        // variable que recogera el numero de aciertos
        var numAciertos = 0;

        // variable que recoge las letras que se han probado ya
        var letrasUsadas = [""];

        // escondemos el div con el input, el boton de comprobar y el boton de reiniciar
        document.getElementById('inputLetra').style.display = 'none';
        document.getElementById('botonReiniciar').style.display = 'none';

        // array con palabras para que escoja una al azar 
        //--------------------TO DO----------LEER LAS PALABRAS DE UN TXT CON UN LEMARIO Y METERLO EN EL ARRAY ------------------------------
        var listaPalabras = ["Luz", "Acariciar", "Armonia", "Alma", "Suave", "Musica", "Sonrisa", "Imponente", "Piedad", "Claridad", "Simiente", "Pureza", "Naturaleza", "Suspiro",
"Paz", "Esperanza", "Afinado", "Amor", "Atardecer", "Indomable", "Ver", "Sueño", "Mama", "Voladores", "Deseo", "Infinito", "Arena", "Exito", "Peripecia", "Chocolate", "Casquivana",
"Epopeya", "Bailongo", "Libertina", "Arcano", "Poesia", "Clavicordio", "Universo", "Vulva", "Saeta", "Espiral", "Cine", "Unir", "Concordia", "Fe", "Espanto", "Bebe", "Piano", "Sandia",
"Libelula", "Alma", "Azulado", "Rascacielos", "Corazon", "Sublime", "Susurro", "Mirada", "Caracol", "Metafora", "Sentir", "Inocencia", "Nube", "Burbuja", "Cienfuegos", "Voragine",
"Melancolia", "Onomatopeya", "Apasionado", "Ambar", "Acantilado", "Fosforescencia", "Ilusion", "Pelele", "Aereo", "Imaginacion", "Muchedumbre", "Nomeolvides", "Sorpresa", "Colaborar",
"Amistad", "Aura", "Pulpo", "Lluvia", "Felicidad", "Intuicion", "Ficcion", "Utopia", "Equidad", "Sublime", "Fauna"];
