var ul = document.getElementById('nums');
var count = document.querySelector('#count');
var list = [], input = [],
result = document.querySelector('#results'),
enter = document.querySelector('#enter');
 
//función para ingresar n cantidad de numeros
count.addEventListener('input', function ()
{
  for (var i = 1; i <= count.value; i++) {
    list[i - 1] = "<li><input id='num" + i + "' type='number' placeholder='X^" + (i-1) + "' autofocus autosave /></li>";
  }
  list.splice(count.value);
  ul.innerHTML = list.join('\n');
});
 //metodo de horner
function horner() {
  var resultsx = [], x = parseInt(document.querySelector('#x').value);
  for (var z = 1; z <= count.value; z++) {
    input[z - 1] = parseInt(document.querySelector('#num' + z).value);
  }
  var sum = input[0];
  for (var v = 1; v < count.value; v++) {
    sum = input[v] + sum * x;
    resultsx[v] = sum;
  }
  resultsx[0] = input[0];
  result.innerHTML = 'SUMA: ' + sum + '</br>RESULTADO: ' + resultsx;
}
 
enter.addEventListener('click', function () {
  horner();
  console.log('Enter horner()');
});