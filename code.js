    function calcularSoma() {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resultado = num1 + num2;
      document.getElementById("resultado").textContent = resultado;
    }

    function calcularSubtracao() {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resultado = num1 - num2;
      document.getElementById("resultado").textContent = resultado;
    }

    function calcularMultiplicacao() {
      let num1 = parseInt(document.getElementById("num1").value);
      let num2 = parseInt(document.getElementById("num2").value);
      let resultado = num1 * num2;
      document.getElementById("resultado").textContent = resultado;
    }