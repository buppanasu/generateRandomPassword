const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",'Z',"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","~","!","@","#",'$',"%","^","&","*","(",")","-"]


let displayOne = document.getElementById("displayPasswordOne-el")
let displayTwo = document.getElementById("displayPasswordTwo-el")


function generatePassword(){
    displayOne.textContent = ""
    displayTwo.textContent = ""
    for (let i = 0; i < 15; i++){
        let randomIndex = getRandomIndex()
        let randomIndex2 = getRandomIndex()
        displayOne.textContent += characters[randomIndex]
        displayTwo.textContent += characters[randomIndex2]
    }  
}

function getRandomIndex(){
    randomIndex = Math.floor(Math.random() * characters.length)
    return randomIndex
}

function copyText(){
    navigator.clipboard.writeText(displayOne.textContent)
    alert("Copied the text" + displayOne.textContent)
}  

function copyText2(){
    navigator.clipboard.writeText(displayTwo.textContent)
    alert("Copied the text" + displayTwo.textContent)
}

function showSurprise(){
    document.getElementById("trappisNeo").style.visibility = "visible"
}