const enemy = "Grant";
const user = "";



//This will prompt to start the game
  const play = prompt("Would you like to play?").toLowerCase();
  while (play == "no"){
    console.log("See you next time.");
  }
  if (play == "yes"){
    name1 = prompt("Enter your name.").toLowerCase();
  }
  if (enemy !== true){
    console.log("Ready! Let the battle begin!");
  }


//Function get damage
function getDamage(name1,enemy){
  return Math.floor((Math.random() * 2) + 1);
}

//Randomize health points
  const playing = true;
  let userHealth = 40;
  let enemyHealth = 10;
  let wins = 0;

  while (play) {
    if (wins === 3) {
      console.log("You won!!");
      break;
    }
    if (play === "yes"){
      userHealth -= getDamage();
      enemyHealth -= getDamage();
      console.log(name1 + "'s health is now: " + userHealth + "!");
      console.log(enemy + "'s health is now: " + enemyHealth + "!");
    }
    if (userHealth <= 0) {
      console.log("You lose, and " + enemy + " wins!");
      break;
    }
    if (enemyHealth <= 0) {
      wins++;
      enemyHealth =10;
      console.log("You won the fight!! " + enemy + "loses!");
    }
  }