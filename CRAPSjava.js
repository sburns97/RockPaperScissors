
//Initalizes die
var dieOne= Math.floor(Math.random()*6)+1;
var dieTwo= Math.floor(Math.random()*6)+1;
var total=dieOne+dieTwo;

//Series of functions that delay the display of the game info
setTimeout(function(){
 document.getElementById("results").innerHTML ="Rolling...";
}, 500); 

setTimeout(function(){
 document.getElementById("results").innerHTML ="Here's the numbers: Die One is "+dieOne+" and Die Two is "+dieTwo;
},2000); 

setTimeout(function(){
 document.getElementById("results").innerHTML ="Your total is "+total;
},5500);

//Determines whether the user won or lost
setTimeout(function(){
if (total===7)
{
document.getElementById("winlose").innerHTML ="Why congratulations! You've won!";
}
else if (total===11)
{
document.getElementById("winlose").innerHTML="Why congratulations! You've won!";
}
  else if (total===8 || total===10 || total===9 || total===11) {
   document.getElementById("winlose").innerHTML="Close but no cigar. So sorry, you need a 7 or 11 to win."; 
  }
  else {
    document.getElementById("winlose").innerHTML="So sorry, you need a 7 or 11 to win.";
  }

},5500);
