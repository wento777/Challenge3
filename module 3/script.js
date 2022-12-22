// Reach into the document and query for an HTML element with id 'generate'
// Save it to the JavaScript variable called generateBtn
var generateBtn = document.querySelector("#generate");

// Same thing as above, but now search for an HTML element with id 'password'
var passwordText = document.querySelector("#password");

// I want to create a master array that will hold all the possible characters for our password
var masterArray = [];
const lower = "abcdefghijklmnopqrstuvwxyz".split('');
console.log(lower);
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
console.log(upper);
const specials = "!@#$%^&*".split('');
console.log(specials);
const numbs = "1234567890".split('');
console.log(numbs);


// Write password to the #password textarea
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

//password requirement between 8-128 chars.
function generatePassword(event) {
  var passwordLength = window.prompt("How long do you want your password to be? (8 - 128)");
  // check first of all if the passwordLength is a number, and not some random other string i.e. 'andrei'
  // if it is some random other string, parsedNumber's value will be NaN and the else condition will run
  var parsedNumber = Number(passwordLength);

  if (!parsedNumber) {
    alert('Please enter a number 8 through 128. Try again.')
    return generatePassword();
  } else {
    var wantsLowercase = window.confirm('Do you want lowercase letters?');
    var wantsUppercase = window.confirm('Do you want uppercase letters?');
    var wantsSpecialCharacters = window.confirm('Do you want special characters?');
    var wantsNumbers = window.confirm('Do you want numbers?');
    

    // now that we know the user entered a number, check the size of the number
    if (parsedNumber >= 8 && passwordLength <= 128) {

      // check what sets of characters the user wants to include in the password
      if (wantsLowercase) {
        masterArray = masterArray.concat(...lower);
        console.log(masterArray);
      }
      // continue with other sets of characters
      if (wantsUppercase) {
          masterArray = masterArray.concat(...upper);
          console.log(masterArray);

      }

      if (wantsLowercase) {
        masterArray = masterArray.concat(...specials);
        console.log(masterArray);
      }

      if (wantsLowercase) {
        masterArray = masterArray.concat(...numbs);
        console.log(masterArray);
      }
    
    
      

      // create another function that randomly selects an index from the masterArray and adds it to a string variable
      // do that for as many times as the value of passwordLength
      for( var i = 0; i <= passwordLength; i++) {
         
    
        }
      // return it here
     
      return generatePassword;
      
      }

    }
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
document.getElementById("myBtn").addEventListener("click", displaydate);

