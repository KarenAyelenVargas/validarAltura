let altura = document.getElementById("dato");
let btnEnviar = document.getElementById("btnEnviar1");

btnEnviar.addEventListener("click", () => {
  let altura: number = Number(dato.value);
  if (altura >= 1.3) {
    console.log("Tu altura te permite subir al juego");
    console.log("ya que mides:", altura);
  } else {
    console.log("Tu altura no te permite subir al juego");
    console.log("ya que mides:", altura);
  }
});
