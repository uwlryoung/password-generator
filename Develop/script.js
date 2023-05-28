// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of all the characters that will be used for password generation
var uppercaseAlphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var digits = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters =['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];


// Write password to the #password input
function writePassword() {

  //Function that generates a password
  function generatePassword(){
    /*Empty arrays. characterSets starts empty and adds the arrays from above (uppercaseAlphabet, etc) if confirmed
    passwordShell will fill up with characters as they are randomly selected*/
    var characterSets =[];
    var passwordShell =[];

    //Asks for the length a password the user wants and converts it into a number. The While loop enforces that it must be between 8 and 128 characters (inclusively).
    var userInputPasswordLength = 0;    
    while ((userInputPasswordLength < 8) || (userInputPasswordLength > 128)) {
      userInputPasswordLength = prompt("How long do you want your password to be? Choose a number between 8 and 128");
      userInputPasswordLength = Number(userInputPasswordLength);
    }
    
    //Confirmations of what user would like to have in password as characters.
    var userConfirmUppercase = confirm("Do you want your password to use UPPERCASE letters?");
    var userConfirmLowercase = confirm("Do you want your password to use lowercase letters?");
    var userConfirmNumbers = confirm("Do you want your password to use numerical values?");
    var userConfirmSpecialCharacters = confirm("Do you want your password to use special characters?");

    //If confirmation is true, it will be added to the "characterSets" array
    if (userConfirmUppercase === true) {
      characterSets.push(uppercaseAlphabet);
    }
  
    if (userConfirmLowercase === true) {
        characterSets.push(lowercaseAlphabet);
    }
    
    if (userConfirmNumbers === true) {
        characterSets.push(digits);
    }
    
    if (userConfirmSpecialCharacters === true) {
        characterSets.push(specialCharacters);
    }
  
    /*This for loop first selects a random array from within the characterSets array.
    Then, selects a random index from that randomly selected array and adds the character to the passwordShell*/ 
    for (var i = 0; i < userInputPasswordLength; i++) {
        var charTypeKey = Math.floor(Math.random() * characterSets.length);
        var index = Math.floor(Math.random() * characterSets[charTypeKey].length);
        passwordShell.push(characterSets[charTypeKey][index]);
    }
    //Once the loop is complete, the value is returned and the characters are joined together as a string
    return passwordShell.join('');
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


