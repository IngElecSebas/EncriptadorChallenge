
let accion = "";

function funcEncriptar() {
    // Obtener el texto del textarea con id 'texto_ingresado'
    let texto = document.getElementById("texto_ingresado").value;

    // Reemplazar cada vocal según las reglas proporcionadas
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");    
            
    // Retornar el texto encriptado
    return textoEncriptado;
}

function funcDesencriptar() {
    // Obtener el texto del textarea con id 'texto_ingresado'
    let texto = document.getElementById("texto_ingresado").value;

    // Reemplazar las codificaciones por las vocales originales
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Retornar el texto desencriptado
    return textoDesencriptado;
}


function funcBoton(accion){

    // Paso 1: Obtener el texto encriptado o desencriptado según la acción
    let resultadoTextoProcesado;
    if (accion === "encriptar") {
        resultadoTextoProcesado = funcEncriptar();  // Encripta el texto
    } else if (accion === "desencriptar") {
        resultadoTextoProcesado = funcDesencriptar();  // Desencripta el texto
    }

    // Paso 2: Seleccionar los elementos de la imagen y del párrafo
    let imagen = document.querySelector(".resultado_texto_img");
    let parrafo = document.querySelector(".resultado_texto_cuerpo");
    let resultadoTexto = document.querySelector(".texto_procesado");
    let botonCopiar = document.querySelector(".ingreso_texto_boton_copiar"); 

    // Paso 3: Hacer una transición entre la imagen y el párrafo
    // Ocultar la imagen con una transición
    imagen.style.transition = "opacity 0.5s ease";  // Animación de 0.5s para que se desvanezca
    imagen.style.opacity = 0;  // Cambiar la opacidad para ocultar la imagen
    parrafo.style.transition = "opacity 0.5s ease";
    parrafo.style.opacity = 0;

    // Después de la transición, cambiar el contenido del párrafo
    setTimeout(() => {
        imagen.style.display = "none";  // Ocultar la imagen después de que se desvanezca
        parrafo.style.display = "none";
        resultadoTexto.style.display = "block";  // Mostrar el párrafo
        resultadoTexto.style.opacity = 0;  // Iniciar la opacidad en 0 para la animación de aparición
        resultadoTexto.textContent = resultadoTextoProcesado;
        resultadoTexto.textContent = resultadoTextoProcesado;  // Cambiar el contenido del párrafo

        // Hacer que el párrafo aparezca con una transición
        resultadoTexto.style.transition = "opacity 0.5s ease";  // Animación de 0.5s para que aparezca
        resultadoTexto.style.opacity = 1;  // Cambiar la opacidad para hacer que aparezca
        
        // Paso 4: Mostrar el botón de copiar con transición
        botonCopiar.style.display = "block";  // Mostrar el botón
        botonCopiar.style.opacity = 0;  // Iniciar la opacidad en 0 para la animación de aparición
        botonCopiar.style.transition = "opacity 0.5s ease";  // Añadir transición de opacidad
        botonCopiar.style.opacity = 1;  // Cambiar la opacidad para hacer que aparezca

    }, 500);  // El timeout coincide con la duración de la animación de desvanecimiento
}

function copiarTexto() {
    // Seleccionar el párrafo con la clase "texto_procesado"
    let texto = document.querySelector(".texto_procesado").textContent;

    // Usar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(texto)
        .then(() => {
            // Mostrar un mensaje de éxito (opcional)
            console.log("Texto copiado al portapapeles exitosamente!");
            alert("Texto copiado al portapapeles!");
        })
        .catch(err => {
            // Manejar el error si ocurre algo mal
            console.error("Hubo un error al copiar el texto: ", err);
            alert("Hubo un error al copiar el texto.");
        });
}

function funcReinicio(){
    let parrafoIngreso = document.querySelector("#texto_ingresado"); // Selección de clase con "."
    parrafoIngreso.value = "Ingrese el texto aquí"; // Usar "value" para cambiar el texto del textarea


    let imagen = document.querySelector(".resultado_texto_img");
    let parrafo = document.querySelector(".resultado_texto_cuerpo");
    let resultadoTexto = document.querySelector(".texto_procesado");
    let boton = document.querySelector(".ingreso_texto_boton_copiar");

    let viewportWidth = window.innerWidth;

    if (viewportWidth <= 1280){
        imagen.style.display = "none";
        boton.style.display = "none";
    }else{
        // Mostrar la imagen y el párrafo inicial con una transición
        imagen.style.display = "block";  // Volver a mostrar la imagen
        imagen.style.opacity = 1;  // Asegurarse de que la opacidad esté al máximo
        imagen.style.transition = "opacity 0.5s ease";  // Animación de aparición de 0.5s
    }

    parrafo.style.display = "block";  // Volver a mostrar el párrafo inicial
    parrafo.style.opacity = 1;  // Asegurarse de que la opacidad esté al máximo
    parrafo.style.transition = "opacity 0.5s ease";  // Animación de aparición de 0.5s

    // Ocultar el párrafo de texto encriptado
    resultadoTexto.style.display = "none";  // Ocultar el párrafo de texto encriptado
    resultadoTexto.style.opacity = 0;  // Asegurarse de que la opacidad esté en 0
    boton.style.display = "none";
    accion = "";
}








