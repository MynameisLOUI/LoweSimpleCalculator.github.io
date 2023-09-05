function Display(num) {
  document.getElementById("screen").value += num;
}
function Delete() {
  document.getElementById("screen").value = "";
}
function equals() {
  var text = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(text);
}  
function Backspace(){
 var text = document.getElementById("screen").value;
 document.getElementById("screen").value = text.slice(0,-1);
}


