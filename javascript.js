/*
    this is my application bla bla bla
*/

function multiplyFun() {
  var div1 = document.getElementById('div1').value;
  var div2 = document.getElementById('div2').value;
  var res = div1 * div2;
  document.getElementById('divr').innerHTML = res;
}

function div() {
  var div1 = document.getElementById('div1').value;
  var div2 = document.getElementById('div2').value;
  var res = div1 / div2;
  document.getElementById('divr').innerHTML = res;
}

function add() {
  var div1 = document.getElementById('div1').value;
  var div2 = document.getElementById('div2').value;
  var res = +div1 + +div2;
  document.getElementById('divr').innerHTML = res;
}
function min() {
  var div1 = document.getElementById('div1').value;
  var div2 = document.getElementById('div2').value;
  var res = div1 - div2;
  document.getElementById('divr').innerHTML = res;
}
/*
function myname(name) {
  console.log('my name is: ' + name);
}

myname('hamed');
myname('yousef');

function yousef(age) {
  console.log('my age is :' + age);
}

yousef(30);

function mul(num1, num2) {
  // تعريف متغير
  var num3;
  // ضرب المتغيرين
  num3 = num2 * num1;
  // طباعة الناتج
  console.log('الناتج هو :' + num3);
}

mul(9, 2);

function div2(num1, num2) {
  var num3 = num1 / num2;
  console.log('num1, num2:' + num3);
}

div2(43526, 5);

function hamed(num1, num2) {
  var num3 = num1 + num2;
  console.log('num1, num2:' + num3);
}

hamed(23, 0.5);
*/
