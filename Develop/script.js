// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays of the variables used for the password character
var digits = [0,1,2,3,4,5,6,7,8,9];
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters =['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];

//Prompt asking for password length
var userInputPasswordLength = prompt("How long do you want your password to be? Choose a number between 8 and 128");
userInputPasswordLength = Number(userInputPasswordLength);

//Confirms the criteria that the password must meet
var userConfirmLowercase = confirm("Do you want your password to use lowercase letters?");
var userConfirmUppercase = confirm("Do you want your password to use uppercase letters?");
var userConfirmNumbers = confirm("Do you want your password to use numerical values?");
var userConfirmSpecialCharacters = confirm("Do you want your password to use special characters?");

//Password Validation Object
var passwordValidation = {
  passwordLength: userInputPasswordLength,
  useLowercase: userConfirmLowercase,
  useUppercase: userConfirmUppercase,
  useNumbers: userConfirmNumbers,
  useSpecialCharacter: userConfirmSpecialCharacters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


