const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".result");
const wins = document.querySelector(".wins")
const loses = document.querySelector(".loses")
const modal = document.querySelector("#modal")
const modalText = document.querySelector("#modal-text")
const resetBtn = document.querySelector(".reset-btn")
const exitBtn = document.querySelector(".exit-btn")
const summary = document.querySelector(".summary")
const startImg = document.querySelector("#start-img")
const endImg = document.querySelector("#end-img")
const startBtn = document.querySelector("#start-btn")
const audio = document.querySelector("#game-audio")
const startModal = document.querySelector("#start-game")
const app = document.querySelector("main")
const appBackdrop = document.querySelector("#app-backdrop")

// Music // 
const openingMusic = ""
const happyMusic = "./audio/editted--2019-08-25_-_8bit-Smooth_Presentation_-_David_Fesliyan.ogg"
const scaryMusic = "./audio/editted--slow-2021-08-17_-_8_Bit_Nostalgia_-_www.FesliyanStudios.com.ogg"
const enjoymentEndingMusic = "./audio/30sec-2020-06-18_-_8_Bit_Retro_Funk_-_www.FesliyanStudios.com_David_Renda.ogg"
const surrenderEndingMusic = "./audio/editted--Faster-Version-2021-04-09_-_Distorted_Doom_-_David_Fesliyan.ogg"

// Images // 
const openingImage = ""

const happyImage = "./images/Totoro-uglypenguin.gif"
const happyImageAlt = "Totoro and spirit friends in a tree with music in the air."

const scaryImage = "./images/notoriety-jeffinvelcros.gif"
const scaryImageAlt = "Two girls hiding from robots pixel art."

const enjoymentEndingImage = `<img src="./images/totoro-jhl.gif" alt="Totoro and friends running through the woods by refelctive water.">`

const surrenderEndingImage = `<img src="./images/thesweepsquadhascome-kingpix.gif" alt="Cyborg robots marching.">`


startBtn.addEventListener("click", () => {
    audio.volume = 0.4
    audio.play()
    startModal.close()
})

const gameStart = () => {
    startModal.showModal()
}

gameStart()

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
    summary.textContent = `The ${manWeapon} you organized wins the day against the oppressors ${machineWeapon}!`
    result.textContent = "You're doing great!"
    winScore++
    pageLoad()
    checkScore()
}

const defeat = (manWeapon, machineWeapon) => { 
    summary.textContent = `The Machine's ${machineWeapon} wipe away your ${manWeapon}.`
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
        endImg.src = happyImage
        endImg.alt = happyImageAlt
        modalText.textContent = "Your community is saved! You and your family are able to live in harmony with nature, to experience the joys of life."
        resetBtn.textContent = "Save another timeline?"
        exitBtn.textContent = "Enjoy the life you deserve."
        exitBtn.addEventListener('click', () => {
            audio.src = enjoymentEndingMusic
            audio.play()
            appBackdrop.innerHTML = enjoymentEndingImage
        })
        audio.src = happyMusic
            audio.play()
        modal.showModal()
        
    } else if (loseScore >= 5) {
        endImg.src = scaryImage
        endImg.alt = scaryImageAlt
        modalText.textContent = `The ruling class have automated away the need for your freedom. You're being imprisoned for being poor. 
        To be used as slave labor.`
        resetBtn.textContent = "Go back to 1984?"
        exitBtn.textContent = "Surrender to your oppressors."
        exitBtn.addEventListener('click', () => {
            audio.src = surrenderEndingMusic
            audio.play()
            appBackdrop.innerHTML = surrenderEndingImage
        })
        audio.src = scaryMusic
            audio.play()
        modal.showModal()
    }
}




// Track win/lose tally //

// Track who chose what option # of times //