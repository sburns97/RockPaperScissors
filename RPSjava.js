



function myFunction(input) { 
  
  var userInput;
  //sets value of userInput
  if (input === 'rock')
  {
	 userInput='rock';
  }else if (input === 'paper')
  {
	  userInput='paper';
  }else if (input === 'scissors')
  {
	  userInput='scissors';
  }
  
var compInput=Math.floor(Math.random()*3)+1;


//mods value of compInput    
  if(compInput===1)
  {
    compInput='rock';
  }
else if(compInput===2)
  {
    compInput='paper';
  }
else
  {
    compInput='scissors';
  }

//determines winner
if (compInput===userInput)
  {
   document.getElementById("tie").innerHTML = "I chose "+compInput+" and you chose "+userInput+". So this here's a draw.";
  }
else if (  
(compInput==='rock'&& userInput==='paper') ||
  (compInput==='paper'&&userInput==='scissors') ||
  
(compInput==='scissors'&&userInput==='rock') )
  {
    document.getElementById("plywin").innerHTML ="I chose "+compInput+" and you chose "+userInput+". Looks like you bested me!";
    
  }
else
  {
    document.getElementById("compwin").innerHTML ="I chose "+compInput+" and you chose "+userInput+". Looks like I bested you!";
  
  }

};

