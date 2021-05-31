// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// select password criteria
var selectCriteria = function () {
  var passwordObj = [
    {
    char: 0,
    lower: false,
    upper: false,
    numeric: false,
    special: false
    }
  ];
  /*var char = 0;
  var lower = false;
  var upper = false;
  var numeric = false;
  var special = false;*/

  // first prompt: # of characters (min 8, min 128)
  passwordObj.char = window.prompt(
    "How many characters would you like your password to be? Select a number between 8 and 28."
  );
  console.log("char: " + passwordObj.char);

  // validation: min 8, min 128
  if (passwordObj.char >= 8 && passwordObj.char <= 128) {
    // second prompt: include lowercase? (OK,CANCEL)
    passwordObj.lower = window.confirm(
      "Would you like your password to contain lowercase letters? Select OK for yes or CANCEL for no."
    );
    console.log("lower: " + passwordObj.lower);

    // third prompt: include uppercase? (yes,no)
    passwordObj.upper = window.confirm(
      "Would you like your password to contain uppercase letters? Select OK for yes or CANCEL for no."
    );
    console.log("upper: " + passwordObj.upper);

    // fourth prompt: include numeric? (yes,no)
    passwordObj.numeric = window.confirm(
      "Would you like your password to contain numbers? Select OK for yes or CANCEL for no."
    );
    console.log("numeric: " + passwordObj.numeric);

    // fifth prompt: include special characters? (yes,no)
    passwordObj.special = window.confirm(
      "Would you like your password to contain special characters? Select OK for yes or CANCEL for no."
    );
    console.log("special: " + passwordObj.special);

    // final validation: make sure at least one criteria selected
    if (
      passwordObj.lower == false &&
      passwordObj.upper == false &&
      passwordObj.numeric == false &&
      passwordObj.special == false
    ) {
      window.alert(
        "You did not select sufficient criteria for your password. Please try again."
      );
      return selectCriteria();
    }
    generatePassword(passwordObj);
  } else {
    char = window.alert("You did not enter a valid number. Please try again.");
    return selectCriteria();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(char, lower, upper, numeric, special) {}

// generate password based on criteria
//selectCriteria();

// display password on page

// Add event listener to generate button
generateBtn.addEventListener("click", selectCriteria());
