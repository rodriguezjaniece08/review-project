// Start your code ***HERE*** =========

function addNewPassword() {

    // create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
    const characterType = [['~', '`', '!', '@', '#','$','%','^','&','*',(','),'-','_','+','=','?'], 
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    [0,1,2,3,4,5,6,7,8,9]];
    
    // create a global variable called "pwLength" with a number between 10 and 18
    const pwLength = Math.floor(Math.random() * 9) + 10;
    let randomPassword = [];

    // Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
   for (i = 0; i < pwLength; i++) {
       let randomIndex = 
         characterType[Math.floor(Math.random() * characterType.length)];
       let randomSelector = Math.floor(Math.random() * randomIndex.length);
       randomPassword.push(randomIndex[randomSelector]);
   }
   //console.log(randomPassword.join(''));
   return randomPassword.join('');
    
}




// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======



