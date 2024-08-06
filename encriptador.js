const d = document;
const texArea = d.querySelector(".form__input");
const loaderlxr = d.querySelector(".loader");
const loaderBat = d.querySelector(".loader__bat");
const resultadoTitulo = d.querySelector(".result__title");
const resultadoText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
  ];
  //Funcion para encriptar//
  function encriptarmensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letra = mensaje[i];
      let encriptada = letra;
      for (let j = 0; j < llaves.length; j++) {
        if (letra === llaves[j][0]) {
          encriptada = llaves[j][1];
          break;
        }
      }
      mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}
//funcion para desencriptar//
  function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
  
    for (let i = 0; i < llaves.length; i++) {
      let regex = new RegExp(llaves[i][1], "g");
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//ocultar elementos dinamicamente//
  texArea.addEventListener("input", (e)=>{
    loaderlxr.style.display = "none";
    loaderBat.classList.remove("hidden")
    resultadoTitulo.textContent = "Encriptando Mensaje.";
    resultadoText.textContent = "";
});
//Funcion del boton encriptar
  botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase(); 
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "¡Tu mensaje fue encriptado con exito!";
});
//Funcion del boton desencriptar
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase(); 
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = "¡Mensaje desencriptado!";
    loaderlxr.style.display = "flex";
    loaderBat.classList.add("hidden");
    
});
//funcion boton copiar
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        loaderlxr.style.display = "flex";
        loaderBat.classList.add("hidden");
        resultadoTitulo.textContent = "¡Texto copiado!"
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = "";
    })
});


