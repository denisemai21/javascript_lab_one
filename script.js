const enemy = "Grant";
const user = "";



//This function will prompt to start the game
function startGame() {
  const play = prompt("Would you like to play?").toLowerCase();
  while (play === "no"){
    console.log("See you next time.");
  }
  if (play == "yes"){
    name1 = prompt("Enter your name.");
  startCombat();
  }
}

//Function get damage
function getDamage(){
  return Math.floor((Math.random() * 5) + 1);
}

//Randomize health points
const playing = true;
let userHealth = 40;
let enemyHealth = 10;
let wins = 0;

function startCombat() {
  
  while (playing) {
    if (wins === 3) {
      console.log("You won!!");
      break;
    }
    let choice = prompt("Do you want to attack or quit?").toLowerCase();
    if (choice === "attack"){
      userHealth -= getDamage();
      enemyHealth -= getDamage();
      console.log(name1 + "'s health is now: " + userHealth + "!");
      console.log(enemy + "'s health is now: " + enemyHealth + "!");
    }
    else if (choice === "quit") {
      console.log("That's too bad you lose! Better luck next time!");
      break;
    }
    if (userHealth <= 0) {
      console.log("You lose, and " + enemy + " wins!");
      break;
    }
    if (enemyHealth <= 0) {
      wins++;
      enemyHealth =5;
      console.log(`You won the fight!! ${enemy} loses! You have ${3 - wins} more round(s) left.`);
    }
  }
}

  startGame();