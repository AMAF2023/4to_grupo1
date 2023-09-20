//LINEA DE TIEMPO

const fechaUno = document.getElementById("fechaUno");
const fechaDos = document.getElementById("fechaDos");
const fechaTres = document.getElementById("fechaTres");
const fechaCuatro = document.getElementById("fechaCuatro");

const titulo1 = document.getElementById("titulo1");
const texto1 = document.getElementById("texto1");
const titulo2 = document.getElementById("titulo2");
const texto2 = document.getElementById("texto2");
const titulo3 = document.getElementById("titulo3");
const texto3 = document.getElementById("texto3");
const titulo4 = document.getElementById("titulo4");
const texto4 = document.getElementById("texto4");

const emergente_conteiner = document.getElementById("emergente_conteiner");

const cerrar = document.getElementById("cerrar");

fechaUno.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  titulo1.classList.add("mostrarTexto");
  texto1.classList.add("mostrarTexto");
});

fechaDos.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  //alert("todo ok?? rosario");
  titulo2.classList.add("mostrarTexto");
  texto2.classList.add("mostrarTexto");
});

fechaTres.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  //alert("todo ok?? caba");
  titulo3.classList.add("mostrarTexto");
  texto3.classList.add("mostrarTexto");
});

fechaCuatro.addEventListener("click", () => {
  emergente_conteiner.classList.add("mostrar");
  //alert("todo ok?? caba");
  titulo4.classList.add("mostrarTexto");
  texto4.classList.add("mostrarTexto");
});

cerrar.addEventListener("click", () => {
  emergente_conteiner.classList.remove("mostrar");
  titulo1.classList.remove("mostrarTexto");
  texto1.classList.remove("mostrarTexto");
  titulo2.classList.remove("mostrarTexto");
  texto2.classList.remove("mostrarTexto");
  titulo3.classList.remove("mostrarTexto");
  texto3.classList.remove("mostrarTexto");
  titulo4.classList.remove("mostrarTexto");
  texto4.classList.remove("mostrarTexto");
});
