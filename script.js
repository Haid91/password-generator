// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a password based on the user criteria
function generatePassword() {
  var length = parseInt(prompt("Enter the length of the password. Must be between 8 and 128 characters."));
  
  // Validate the password length
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid length. Please choose a length between 8 and 128.");
    return "";
  }

  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChars = "0123456789";
  var specialChars = "!@#$%^&*()-=_+[]{}|;:',.<>?/";

  var allChars = "";
  if (useLowercase) allChars += lowerChars;
  if (useUppercase) allChars += upperChars;
  if (useNumbers) allChars += numChars;
  if (useSpecial) allChars += specialChars;

  var password = "";
  for (var i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === "") return; // Exit if password generation was unsuccessful
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
