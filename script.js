if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
function calcular() {
  const p1 = parseFloat(document.getElementById("p1").value);
  const p2 = parseFloat(document.getElementById("p2").value);
  const p3 = parseFloat(document.getElementById("p3").value);
  const vc = parseFloat(document.getElementById("vc").value);
  const a = parseFloat(document.getElementById("aumento").value);

  const promedio = (p1 + p2 + p3) / 3;
  const vi = (promedio * vc) / 10000;
  const resultado = vi / (1 - a);

  document.getElementById("resultado").textContent = resultado.toFixed(2);
}
