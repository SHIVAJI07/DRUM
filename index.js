var noOfButton = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButton;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    var btn=this.innerHTML;
makeSound(btn);
   
});
}


document.addEventListener("keydown",function(event){
makeSound(event.key);
});


function makeSound(event){
    switch (event){
        case "w":
            var ton1 =new Audio("sounds/crash.mp3");
            ton1.play();
           
            break;
            case "a":
            var ton1 =new Audio("sounds/kick-bass.mp3");
            ton1.play();
            
            break;
            case "s":
            var ton1 =new Audio("sounds/snare.mp3");
            ton1.play();
            
            break;
            case "d":
            var ton1 =new Audio("sounds/tom-1.mp3");
            ton1.play();
            
            break;
            case "j":
            var ton1 =new Audio("sounds/tom-2.mp3");
            ton1.play();
            
            break;
            case "k":
            var ton1 =new Audio("sounds/tom-3.mp3");
            ton1.play();
            
            break;
            case "l":
            var ton1 =new Audio("sounds/tom-4.mp3");
            ton1.play();
            
            break;
    
        default:alert("press given keys");
            break;
    }
}