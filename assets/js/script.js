// Assignment code here

// Get references to the #generate element
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

// select password criteria
var selectCriteria = function () {

  /*var char = 0;
  var lower = false;
  var upper = false;
  var numeric = false;
  var special = false;*/

  // first prompt: # of characters (min 8, min 128)
  passwordObj.char = window.prompt(
    "How many characters would you like your password to be? Select a number between 8 and 128."
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
    window.alert("Your password is ready to go. Click 'Generate Password' to proceed.");
  } else {
    char = window.alert("You did not enter a valid number. Please try again.");
    return selectCriteria();
  }
}

// Write password to the #password input
var writePassword = function(Obj) {
  console.log("generate password button clicked");
  var password = generatePassword(Obj);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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

  for (var i = 0; i < Obj.char; i++) {
    var charType = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    console.log("char type: " + charType);

    if (charType == 1 && Obj.lower == true) {
      charRandom = Math.floor(Math.random() * (122 - 97 + 1) + 97);
      console.log("random char: " + charRandom);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      console.log("lower: " + passwordChar);
    } else if (charType == 2 && Obj.upper == true) {
      charRandom = Math.floor(Math.random() * (90 - 65 + 1) + 65);
      console.log("random char: " + charRandom);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      console.log("lower: " + passwordChar);
    } else if (charType == 3 && Obj.numeric == true) {
      charRandom = Math.floor(Math.random() * (57 - 48 + 1) + 48);
      console.log("random char: " + charRandom);
      var passwordChar = String.fromCharCode(charRandom);
      passwordArray.push(passwordChar);
      console.log("lower: " + passwordChar);
    } else if (charType == 4 && Obj.special == true) {
      charRandom = Math.floor(
        Math.random() * (specialCharArray.length - 1 - 0 + 1) + 0
      );
      console.log("random char: " + charRandom);
      var passwordChar = specialCharArray[charRandom];
      passwordArray.push(passwordChar);
      console.log("lower: " + passwordChar);
    } else {
      i -= 1;
    }
  }
    password = passwordArray.join('');
    console.log("random password: " + password);
    return (password);
}

// generate password based on criteria
window.alert("Welcome to Password Generator. Click on the GENERATE PASSWORD to get started.");

// display password on page

// Add event listener to generate button
generateBtn.addEventListener("click", selectCriteria());
//generateBtn.addEventListener("click", writePassword(passwordObj));
