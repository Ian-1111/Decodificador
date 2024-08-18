function criptografarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoCriptografado;
}

function descriptografarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDescriptografado;
}

function btnEncriptar() {
    const areaTexto = document.querySelector(".area-do-texto");
    const mensagem = document.querySelector(".mensagem");
    const texto = areaTexto.value;
    const textoCriptografado = criptografarTexto(texto);
    mensagem.value = textoCriptografado;
}

function btnDesencriptar() {
    const areaTexto = document.querySelector(".area-do-texto");
    const mensagem = document.querySelector(".mensagem");
    const texto = areaTexto.value;
    const textoDescriptografado = descriptografarTexto(texto);
    mensagem.value = textoDescriptografado;
}

function copiarTexto() {
    const mensagem = document.querySelector(".mensagem");
    mensagem.select();
    document.execCommand("copy");
}


document.querySelector(".bt-cript").onclick = btnEncriptar;
document.querySelector(".bt-descript").onclick = btnDesencriptar;
document.querySelector(".bt-copiar").onclick = copiarTexto;
