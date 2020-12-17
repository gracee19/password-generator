// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var length = prompt("How long you want your password to be?");
  if (length < 8 || length > 128) {
    alert("invalid password length");
    return "";
  }

  var upperCase = confirm("Do you want your password to have uppercase?");
  var lowerCase = confirm("Do you want your password to have lowercase?");
  var number = confirm("Do you want your password to have number?");
  var specialChar = confirm("Do you want your password to have special characters?");

  if (!upperCase && !lowerCase && !number && !specialChar) {
    alert("Must select a character.");
  }
  else {
    var charAvail = "";
    if (upperCase) {
      charAvail += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowerCase) {
      charAvail += "abcdefghijklmnopqrstuvwxyz";
    }
    if (number) {
      charAvail += "0123456789";
    }
    if (specialChar) {
      charAvail += "!@#$%^&*()_+=~{}<>?:-";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * charAvail.length);
      // console.log(random);
      password += charAvail[random];
      // console.log(password);
    }
    return password;
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



