function addition() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("result").innerHTML = num1 + num2;
}

function Substraction() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("result").innerHTML = num1 - num2;
}

function division() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("result").innerHTML = num1 / num2;
}

function multiplication() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  document.getElementById("result").innerHTML = num1 * num2;
}

function reset() {
  document.getElementById("inputForm").reset();
  document.getElementById("result").innerHTML = "";
}
