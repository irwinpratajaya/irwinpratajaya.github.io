var dragon = prompt("You're walking through the forest, minding your own business, and you run into a dragon! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(dragon) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();

    var slaying = true;
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 5 + 1);
    var totalDamage = 0;

    while (slaying) {
      if (youHit) {
        alert("You hit the dragon and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
          alert("You did it! You slew the dragon!");
          slaying = false;
        } else {
          youHit = Math.floor(Math.random() * 2);
        }
      } else {
        alert("The dragon burninates you! You're toast.");
        slaying = false;
      }
    }


    if(strong === 'YES' || smart === 'YES') {
      alert("You only need one of the two! You beat the dragon--nice work!");
    } else {
      alert("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a dragon. You lose!");
    }
    break;

  case 'PAY':
    var money = prompt("All right, we'll pay the dragon. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      alert("Great! You pay the dragon and continue on your merry way.");
    } else {
      alert("Dang! This dragon only takes Troll Dollars. You get whomped!");
    }
    break;

  case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      alert("You got away--barely! You live to stroll through the forest another day.");
    } else {
      alert("You're not fast and you didn't get a head start? You never had a chance! The dragon eats you.");
    }
    break;
  default:
    alert("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}