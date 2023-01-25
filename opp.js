let userInput = document.getElementById ('username')
let passwordInput = document.getElementById ('password')
let loginButton = document.getElementById ('loginButton')
let block1 = document.getElementById ('block1')
let block2 = document.getElementById ('block2')


const User = function (){
    this.name = ''
    this.privilegeLevel = -1
}

User.prototype.userType = null

const Admin = function (){
    this.id = 'ADMIN'
    this.acess = 'unlimited'
}

let currentUser = new User ()
console.log('utente iniziale', currentUser)


loginButton.onclick = function (){
    if (userInput.value === 'user' && passwordInput.value === '123') {
    currentUser.privilegeLevel = 0
    currentUser.userType = null
    }
    else if (userInput.value === 'admin' && passwordInput.value === '123'){
        currentUser.privilegeLevel = 1
        currentUser.userType = new Admin ()
    } else {
        currentUser.privilegeLevel = -1
        currentUser.userType = null
    }
console.log('dopo il login', currentUser)
}

