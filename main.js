// Connect JS to HTML //

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");

// Generate a random selection for the machine //
// Create an array w/ different choices and have a random number generator select an option // 
const machine = ["rock", "paper", "scissors"]

const machineResponse = () => {
    return machine[Math.floor(Math.random() * machine.length)];
}


// Input the user choice //

    rock.addEventListener('click', () => {    
        let manWeapon = "rock"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
         })
     
     paper.addEventListener('click', () => {
        let manWeapon = "paper"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
     })
     
     scissors.addEventListener('click', () => {
        let manWeapon = "scissors"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
     })



// Compare user choice to machine choice //
const battle = (manWeapon, machineWeapon) => {
    if (manWeapon == machineWeapon) {
        tie()
    } else if (
        manWeapon == "rock" && machineWeapon == "paper" 
        || manWeapon == "paper" && machineWeapon == "scissors"
        || manWeapon == "scissors" && machineWeapon == "rock" 
        ){
            defeat()
    } else if (
        manWeapon == "rock" && machineWeapon == "scissors"
        || manWeapon == "paper" && machineWeapon == "rock"
        || manWeapon == "scissors" && machineWeapon == "paper"
        ){
            victory()
    } 


}

// Generate win/ lose/ tie/ results //
const victory = () => {
    result.textContent = "You're doing great!"
}

const defeat = () => { 
    result.textContent = "You'll get'em next time!"
}

const tie = () => {
    result.textContent = "Keep at it!"
}


// Create play again? button // 

// Track win/lose tally //

// Track who chose what option # of times //