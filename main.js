(function(){
  
//Variable Aria 
//initial color
var numSqure=6;

var colors= [];
var pickedColor;
//Select all squre
var square = document.querySelectorAll(".square");
//console.log(square);
// VARIABLE For display color change
var displayColor=document.querySelector(".displeyColor");
//console.log(displayColor);
//Variable for showing message
var message=document.querySelector("#message");
//reset all Color 
var reset=document.querySelector("#reset");
//Select background 
var h1=document.querySelector("h1");
//easy 
var easyBtn=document.querySelector("#easy");
//hard
var hardBtn=document.querySelector("#hard");
var modeBtn=document.querySelectorAll(".mode");
  

init();

function init(){
  resetGame();
//placing color inside box
for(var i = 0 ; i<square.length ; i++){
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click",function(){
           //Find a boxed color
     var choosenColor=(this.style.backgroundColor);
     //compare with stroge color
    
     if(choosenColor===pickedColor){
       reset.textContent="Play Again?"
         //Change background Color
        h1.style.backgroundColor=pickedColor;
         //alert("you are right");
        message.textContent="Correct";
      //All color will be picked color
        matchColor(pickedColor);

         }else{
         //vanise color due to wrong selection
         this.style.backgroundColor= "#232323";
         //alert("you are not right");
         message.textContent="Not Correct Choice";
     }
  })
}

for(var i=0;i<modeBtn.length; i++){
  
  modeBtnListener();

  }

  function modeBtnListener(){
    modeBtn[i].addEventListener('click',function(){
      h1.style.backgroundColor="steelBlue" ;
      message.textContent=" ";
      easyBtn.classList.remove("selected");
      hardBtn.classList.remove("selected");
      this.classList.add("selected");
       
       numSqure = (this.textContent=== "Easy") ? 3 : 6;
       resetGame(); 
       this.classList.add("selected");
       hardBtn.classList.remove("selected");
    
      colors= generateRandomColor(numSqure);
    // //picked a color
      pickedColor=pickedRandomColor(colors);
    //  //show this color in display
    //  displayColor.textContent=pickedColor;
      for( var i=0;i < square.length;i++){
           if(colors[i]){
        square[i].style.display="block";
        square[i].style.backgroundColor = colors[i];
      }else{
    
        square[i].style.display ="none";
      }
      
    }
    
    });
    
    }

  }

  

  reset.addEventListener('click',function(){

  //change message to nothing
  message.textContent="";
  //changed reset button
  this.textContent="New Colors";
   resetGame();
  
});

function resetGame(){
   //alert('you clicked reset button');
  //Generate new color Flowing Reset button
  colors=generateRandomColor(numSqure) ;
  //picked a color
  pickedColor=pickedRandomColor(colors);
  //show this color in display
  displayColor.textContent=pickedColor;

  for(i=0;i<colors.length;i++){
    square[i].style.backgroundColor = colors[i];
  } 
  
}



//Background Color changeing function for all box/ passing picked color.
function matchColor(color){

    for (i=0; i<square.length;i++){

        //console.log(square[i]);
        square[i].style.backgroundColor=color;

    }

}

//for random color selection
function pickedRandomColor(colors){
   var randomnumber= Math.floor(Math.random()*colors.length);//0-5 
   return colors[randomnumber];
}

//generate random color
function generateRandomColor(number){

    //Create colors array 

    var colors=[];
    for (i=0; i<number; i++){
      //Loop will Generate color "rgb(255, 0, 0)"
      //"red(0-255)"
      //"green(0-255)"
      //"blue(0-255)"
      rendomColor();
     
      colors.push(rendomColor());
    }
   
    return colors;
}

function rendomColor(){

     //Loop will Generate color "rgb(255, 0, 0)"
    //"red(0-255)"
      //"green(0-255)"
      //"blue(0-255)"

    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb"+"("+ r +", "+ g + ", "+ b +")" ;

}

})();
