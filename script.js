var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];  
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
 
function getPasswordOptions() {
    var length = parseInt(
      prompt('Choose length of password between 8-128 characters.')
    );
  
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
  
    if (length < 8 || length > 128) {
      alert('Password length must be between 8 and 128 characters');
      return;
    }
  
    var hasLowerCasedCharacters = confirm(
        'Select OK to include lowercase characters in your password.'
    );
 
    var hasUpperCasedCharacters = confirm(
        'Select OK to include uppercase characters in your password.'
    );
    
    var hasNumericCharacters = confirm(
        'Select OK to include numbers in your password.'
    );
 
    var hasSpecialCharacters = confirm(
      'Select OK to include special characters in your password.'
    );
  
    if (
      hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCasedCharacters === false &&
      hasUpperCasedCharacters === false
    ) {
      alert('Must select at least one character type');
      return;
    }
  
    var passwordOptions = {
      length: length,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
    };
  
    return passwordOptions;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
  
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);