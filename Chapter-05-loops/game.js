


let playAgain =0
while(true){
    alert("You wake up in the dark forest...");
    
    let wake = prompt("Do you go 'left or 'right' ?");
    if(wake === "left"){
        alert("You walk into a swamp...");
        let pick = prompt("You see something shiny in the mud. Do you pick it up? (yes or no)");
    if(pick === "yes"){
        alert("It's a magic stone! You are teleported to safety. You win!");
    }else if(pick === "no"){
        alert("You sink slowly into the mud . Game over.");
    }
    
}else if(wake === "right"){
    alert("You find a cave...");
 let cave = prompt("Do you enter the cave? (yes or no)");
 if(cave === "yes"){
        alert("A dragon wakes up and chases you way. you barely escape!");
    }else if(cave === "no"){
        alert("You set up camp outside the cave. A peaceful night under the stars. You win! ");
    }
}



let play = prompt("Do you want to play again? (yes or no)")

if(play ==="yes"){

    playAgain++
}else{
    alert("Game over...");
    
    break}

}