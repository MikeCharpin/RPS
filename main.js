// Connect JS to HTML //

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");

// Generate a random selection for the machine //
// Create an array w/ different choices and have a random number generator select an option // 
const machine = [rock, paper, scissors]

rock.addEventListener('click', function () {    
   const randomNumber = getRandomNumber()
    console.log(randomNumber)
    });



function getRandomNumber() {
    return Math.floor(Math.random() * machine.length);
}



// Input the user choice //


// Compare user choice to machine choice //

// Generate win/ lose/ tie/ results //

// Create play again? button // 

// Track win/lose tally //

// Track who chose what option # of times //