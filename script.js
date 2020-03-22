// These are the variables pulled from the HTMl. They are the checked boxes and the buttom.
var upperCheckbox = document.querySelector('input[value="upper"]');
var specialCheckbox = document.querySelector('input[value="special"]');
var lowerCheckbox = document.querySelector('input[value="lower"]');
var numberCheckbox = document.querySelector('input[value="number"]');
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// This function is activated when the "Generate Password" is clicked.

// Everytime the function is activated it starts with a blank list.
function getlist(){
  // Everytime the function is activated it starts with a blank list.
  var list = "";

  // The function performs various conditions checks to see if what 
  // requirement is selected. If Checked, it will add to the variable list.
  // Each condition will build upon the list variable until the correct list is created.

    if(upperCheckbox.checked) {
      list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
      if(numberCheckbox.checked) {
      list += '0123456789';
    }
        if(lowerCheckbox.checked) {
      list += 'abcdefghijklmnopqrstuvwxyz';
    }
        if(specialCheckbox.checked) {
      list += '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';  
    }
    // Once all the conditions are completed the variable list is returned.
    return(list)
  }

// This function creates a random location within a string so it can be used to randomize the password.
function randomChar(str){
  var character = Math.floor((Math.random() * str.length));
  return str.charAt(character);
}

// This function generates the password when the button is clicked.
function generatePassword(){
  // a blank variable is created.
  var password = "";
  // This var activates the getlist function and loads the list of characters for the password.
  var all = getlist();
  
  // This loops loads the prompt to ask for the size of the password. It performs the prompt first
  // then in the while loop it checks if it the right size. 
  // It will not loop until the correct length is submitted.

  do {
    var size = prompt("What is the size of the password? No smaller than 8 // No larger than 128")
  }
  while (size < 8 || size > 128)

  // This performs a series of condtion to make sure at least 1 of the selected characters is added into the password.      
  if(upperCheckbox.checked) {
    password += randomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  }
    if(numberCheckbox.checked) {
    password += randomChar('0123456789');
  }
      if(lowerCheckbox.checked) {
    password += randomChar('abcdefghijklmnopqrstuvwxyz');
  }
      if(specialCheckbox.checked) {
    password += randomChar('!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~');  
  }
  // This gives the current password length after adding the required characters above.
  // This is needed to make sure the right length password is given.
  var checkedChar = password.length;

  // This loop generates the password by substacting the size submitted by the user and the requried characters.
  // it loops until the password is the correct length requested by the user. It loads into the password variable.
  for (var i = 0; i < (size - checkedChar); i++) {    
      password += randomChar(all);
    }
  // This returns the password to the generate password function.
  return(password);
}

// Add event passwordener to generate button
generateBtn.addEventListener("click", writePassword);



