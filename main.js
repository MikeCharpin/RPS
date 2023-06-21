const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const wins = document.querySelector(".wins")
const loses = document.querySelector(".loses")
const modal = document.querySelector("#modal")
const modalText = document.querySelector("#modal-text")
const resetBtn = document.querySelector(".reset-btn")
const exitBtn = document.querySelector(".exit-btn")
const summary = document.querySelector(".summary")

let winScore = 0
let loseScore = 0

const pageLoad = () => {
    wins.textContent = winScore
    loses.textContent = loseScore
}
pageLoad()

const reset = () => {
    summary.textContent = ""
    result.textContent = ""
    winScore = 0
    loseScore = 0
    pageLoad()
    modal.close()
}

resetBtn.addEventListener('click', () => {
    reset()   
})

exitBtn.addEventListener('click', () => {
    modal.close()
} )




// Generate a random selection for the machine //
const machine = ["Direct Action", "Publications", "Demonstrations"]

const machineResponse = () => {
    return machine[Math.floor(Math.random() * machine.length)];
}

// Input the user choice //

    rock.addEventListener('click', () => {    
        let manWeapon = "Direct Action"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
         })
     
     paper.addEventListener('click', () => {
        let manWeapon = "Publications"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
     })
     
     scissors.addEventListener('click', () => {
        let manWeapon = "Demonstrations"
        let machineWeapon = machineResponse() 
        battle(manWeapon, machineWeapon)
     })



// Compare user choice to machine choice //
const battle = (manWeapon, machineWeapon) => {
    if (manWeapon == machineWeapon) {
        tie(manWeapon, machineWeapon)
    } else if (
        manWeapon == "Direct Action" && machineWeapon == "Publications" 
        || manWeapon == "Publications" && machineWeapon == "Demonstrations"
        || manWeapon == "Demonstrations" && machineWeapon == "Direct Action" 
        ){
            defeat(manWeapon, machineWeapon)
    } else if (
        manWeapon == "Direct Action" && machineWeapon == "Demonstrations"
        || manWeapon == "Publications" && machineWeapon == "Direct Action"
        || manWeapon == "Demonstrations" && machineWeapon == "Publications"
        ){
            victory(manWeapon, machineWeapon)
    } 


}

// Generate win/ lose/ tie/ results //




const victory = (manWeapon, machineWeapon) => {
    summary.textContent = `The ${manWeapon} you organized win the day against the oppressors ${machineWeapon}!`
    result.textContent = "You're doing great!"
    winScore++
    pageLoad()
    checkScore()
}

const defeat = (manWeapon, machineWeapon) => { 
    summary.textContent = `The Machine's ${machineWeapon} wipe out your ${manWeapon}.`
    result.textContent = "You'll get'em next time!"
    loseScore++
    pageLoad()
    checkScore()
}

const tie = (manWeapon, machineWeapon) => {
    summary.textContent = `Your ${manWeapon} clash with The Machine's ${machineWeapon}.`
    result.textContent = "Keep at it!"
    pageLoad()
}


// Create play again? button // 
const checkScore = () => {
    if (winScore >= 5){
        modal.showModal()
        modalText.textContent = "Your community is saved! You and your family are able to live in harmony with nature, to experience the joys of life."
        resetBtn.textContent = "Save another timeline?"
        exitBtn.textContent = "Enjoy the life you deserve."
        
    } else if (loseScore >= 5) {
        modal.showModal()
        modalText.textContent = "The ruling class have automated away the need for your freedom. You've been emprisoned for being poor and used as slave labor."
        resetBtn.textContent = "Go back to 1984?"
        exitBtn.textContent = "Surrender to your oppressors."
        
    }
}




// Track win/lose tally //

// Track who chose what option # of times //