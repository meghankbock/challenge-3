// initialize global variables
var generateBtn = document.querySelector("#generate");
var passwordObj = [
  {
    char: 0,
    lower: false,
    upper: false,
    numeric: false,
    special: false,
  },
];

// function for selecting password criteria
var selectCriteria = function () {
  // first prompt: # of characters
  passwordObj.char = window.prompt(
    "How many characters would you like your password to be? Select a number between 8 and 128."
  );

  // validation: min 8, min 128
  if (passwordObj.char >= 8 && passwordObj.char <= 128) {
    // second prompt: include lowercase?
    passwordObj.lower = window.confirm(
      "Would you like your password to contain lowercase letters? \nSelect OK for yes or CANCEL for no."
    );

    // third prompt: include uppercase?
    passwordObj.upper = window.confirm(
      "Would you like your password to contain uppercase letters? \nSelect OK for yes or CANCEL for no."
    );

    // fourth prompt: include numeric?
    passwordObj.numeric = window.confirm(
      "Would you like your password to contain numbers? \nSelect OK for yes or CANCEL for no."
    );

    // fifth prompt: include special characters?
    passwordObj.special = window.confirm(
      "Would you like your password to contain special characters? \nSelect OK for yes or CANCEL for no."
    );

    // final validation: make sure at least one criteria selected
    if (
      passwordObj.lower == false &&
      passwordObj.upper == false &&
      passwordObj.numeric == false &&
      passwordObj.special == false
    ) {
      // alert user that criteria is invalid & re-start prompts
      window.alert(
        "You did not select sufficient criteria to create your password. Please try again."
      );
      return selectCriteria();
    } else {
      // display selected criteria to user and ask to confirm
      window.alert(
        "Your password is ready to go. Please review the criteria you selected. If everything looks good, click OK and then click on the GENERATE PASSWORD button to create your password. Otherwise, refresh the page to start over. \n\nNumber of Characters: " +
          passwordObj.char +
          "\nLowercase Characters Included? " +
          passwordObj.lower +
          "\nUppercase Characters Included? " +
          passwordObj.upper +
          "\nNumeric Characters Included? " +
          passwordObj.numeric +
          "\nSpecial Characters Included? " +
          passwordObj.special
      );
    }
  }  else {
    window.alert("You did not enter a valid number. Please try again.");
    return selectCriteria();
  }
};

// write password to the #password input
function writePassword() {
  var password = generatePassword(passwordObj);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate random password using password selection criteria provided by user
function generatePassword(Obj) {
  var passwordArray = [];
  var password = "";
  var specialCharArray = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    "|",
    ":",
    ";",
    ",",
    "'",
    "''",
    "<",
    ",",
    ">",
    ".",
    "?",
    "/",
  ];

  // loop through each password character
  for (var i = 0; i < Obj.char; i++) {
    var charType = Math.floor(Math.random() * (4 - 1 + 1) + 1);

    // random charType is lowercase and user selected lowercase
    if (charType == 1 && Obj.lower == true) {
      charRandom = Math.floor(Math.random() * (122 - 97 + 1) + 97);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);

      // random charType is uppercase and user selected uppercase
    } else if (charType == 2 && Obj.upper == true) {
      charRandom = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);

      // random charType is number and user selected number
    } else if (charType == 3 && Obj.numeric == true) {
      charRandom = Math.floor(Math.random() * (57 - 48 + 1) + 48);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);

      // random charType is special character and user selected special character
    } else if (charType == 4 && Obj.special == true) {
      charRandom = Math.floor(
        Math.random() * (specialCharArray.length - 1 - 0 + 1) + 0
      );
      var passwordChar = specialCharArray[charRandom];
      passwordArray.push(passwordChar);

      // re-loop if criteria not met
    } else {
      i -= 1;
    }
  }

  // convert passwordArray to string
  password = passwordArray.join("");
  return password;
}

// welcome message
window.alert(
  "Welcome to Password Generator. Please answer the following prompts to get started."
);

// prompt user to select password criteria
selectCriteria();

// add event listener to generate button & run selectCriteria function
generateBtn.addEventListener("click", writePassword);
