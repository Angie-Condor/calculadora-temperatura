var farenheit = document.getElementById('farenheit');
var celsius = document.getElementById('celsius');

function convACelsius() {
  if(farenheit.value != ""){
    celsius.value = ((farenheit.value - 32)*5/9).toFixed(2);
  }
}

function convAFarenheit() {
  if(celsius.value != "") {
    farenheit.value = ((celsius.value * 9/5)+32).toFixed(2);
  }
}
