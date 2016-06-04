var ul = document.getElementById('nums');
var count = document.querySelector('#count');
var list = [],
  input = [],
  result = document.querySelector('#results'),
  enter = document.querySelector('#enter');
 
count.addEventListener('input', function () {
  for (var i = 1; i <= count.value; i++) {
    list[i - 1] = "<li><input id='num" + i + "' type='number' placeholder='Num " + i + "' autofocus autosave /></li>";
  }
 
  list.splice(count.value);
  ul.innerHTML = list.join('\n');
});
 
function horner() {
  var resultsx = [],
    x = parseInt(document.querySelector('#x').value);
 
  for (var xo = 1; xo <= count.value; xo++) {
    input[xo - 1] = parseInt(document.querySelector('#num' + xo).value);
  }
 
  var sum = input[0];
 
  for (var v = 1; v < count.value; ++v) {
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