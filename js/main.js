var ticks;

function startTimer() {
  ticks = document.getElementById("nTicks").value;
  letsGo();
}

function letsGo() {
  if(ticks<0) {
       document.getElementById("tick").innerHTML='HELLO WORLD!';      
       return;
  }

  document.getElementById("tick").innerHTML=ticks;
  ticks--;
  setTimeout(letsGo,1000);