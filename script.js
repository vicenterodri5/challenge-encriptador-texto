function processText() {
    // Obtener el texto de entrada
    var inputText = document.getElementById("inputText").value;
    
    // Obtener la opción seleccionada (encriptar o desencriptar)
    var operation = document.querySelector('input[name="operation"]:checked').value;
    
    // Procesar el texto según la operación seleccionada
    var processedText = "";
    if (operation === "encrypt") {
        processedText = encryptText(inputText);
    } else if (operation === "decrypt") {
        processedText = decryptText(inputText);
    }
    
    // Mostrar el resultado en el textarea de salida
    var outputText = document.getElementById("outputText");
    
    // Limpiar el contenido anterior del textarea de salida
    outputText.value = "";
    
    // Mostrar el nuevo resultado
    outputText.value = processedText;
}

function encryptText(text) {
    // Implementar la lógica de encriptación aquí
    // Ejemplo simple para este caso
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decryptText(text) {
    // Implementar la lógica de desencriptación aquí
    // Inverso del ejemplo simple para este caso
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function copyResult() {
    // Copiar el contenido del textarea de salida al portapapeles
    var outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}
