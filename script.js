function Display(num) {
  if(document.getElementById('screen').value == "SYNTAX ERROR!"  || document.getElementById('screen').value == "undefined"){
    document.getElementById('screen').value = "";
  }
  document.getElementById("screen").value += num;
}
function Delete() {
  document.getElementById("screen").value = "";
}
function equals() {
   
  try{
  var text = document.getElementById("screen").value;
 
   
  document.getElementById("screen").value = eval(text);

  }catch(SyntaxError){
   document.getElementById('screen').value = "SYNTAX ERROR!";
  }
}  
function Backspace(){
 var text = document.getElementById("screen").value;
 document.getElementById("screen").value = text.slice(0,-1);
}


