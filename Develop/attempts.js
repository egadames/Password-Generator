
var upperCheckbox = document.querySelector('input[value="upper"]');
var specialCheckbox = document.querySelector('input[value="special"]');
var lowerCheckbox = document.querySelector('input[value="lower"]');
var numberCheckbox = document.querySelector('input[value="number"]');
var generateBtn = document.querySelector("#generate");
// var generateUpper = document.querySelector("#upper");
// var generateSpecial = document.querySelector("#special");
// var generateLower = document.querySelector("#lower");
// var generateNumber = document.querySelector("#number");

var list = "";
// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getlist(){
  var list = "";
  upperCheckbox.addEventListener('change', () => {
    if(upperCheckbox.checked) {
      list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      console.log(list);
    
    } else {
      list += '';
      console.log(list);
    }
  });

  specialCheckbox.addEventListener('change', () => {
    if(specialCheckbox.checked) {
      list += '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
      console.log(list);
    
    } else {
      list += '';
      console.log(list);
    }
  });

  numberCheckbox.addEventListener('change', () => {
    if(numberCheckbox.checked) {
      list += '0123456789';
      console.log(list);
    
    } else {
      list += '';
      console.log(list);
    }
  });

  lowerCheckbox.addEventListener('change', () => {
    if(lowerCheckbox.checked) {
      list += 'abcdefghijklmnopqrstuvwxyz';
      console.log(list);
    
    } else {
      list += '';
      console.log(list);
    }
  });
  return(list);
}

function generatePassword(){
  var all = getlist();
  var size = 12;
  // for (var i = 0; i < all.length; i++) {
  //     if (all[i] === true) {
  //         list = list + all[i];
  //     }
  // }
      
  for (var i = 0; i < size; i++) {
      var character = Math.floor((Math.random() * all.length) + 1);
      password += all.charAt(character);
    }

  return(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// specialCheckbox.addEventListener('change', () => {
//   if(specialCheckbox.checked) {
//     var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   } else {
//     var upperC = '';
//   }
//   return(upperC)
// });





// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// var generateUpper = document.querySelector("#upper");
// var generateSpecial = document.querySelector("#special");
// var generateLower = document.querySelector("#lower");
// var generateNumber = document.querySelector("#number");
// var Count = 0;
// var upCount = 0;

// // console.log(generateBtn);

// // console.log(generateUpper);

// // Write password to the #password input
//   function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // function getlist() {
// //   var list = [getUpper(),getLower(),getSpecial(),getNumber()];
// // }

// // function upper(){

// // }

// function getUpper(){  
//   if(Count === 1){
//     var upperC = "";
//     Count --;
//   }else if(Count === 0){
//     var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     Count++;
//   }
//     return(upperC);
// }

// otherCheckbox.addEventListener('change', () => {
//   if(otherCheckbox.checked) {
//     var upperC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   } else {
//     var upperC = '';
//   }
//   return(upperC)
// });

// function getLower(){
//   if(Count === 1){
//     var lowerC = "";
//     Count --;
//   }else if(Count === 0){
//     var lowerC = 'abcdefghijklmnopqrstuvwxyz';
//     Count++;
//   }
//   return(lowerC);
// }

// function getSpecial(){
//   if(Count === 1){
//     var spec = "";
//     Count --;
//   }else if(Count === 0){
//     var spec = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
//     Count++;
//   }
//   return(spec);
// }

// function getNumber(){
//   if(Count === 1){
//     var num = "";
//     Count --;
//   }else if(Count === 0){
//     var num = '0123456789';
//     Count++;
//   }
//   return(num);
// }

// function generatePassword(){
//   // var character = [getupperC(),'abcdefghijklmnopqrstuvwxyz', '0123456789', '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~'];
//   // var upper = confirm("Upper");
//   // var lower = confirm("lower");
//   // var num = confirm("num");
//   // var special = confirm("special");
//   var all = [getUpper(),getLower(),getNumber(),getSpecial()];
//   var size = prompt("how many times");
//   var password = "";
//   var list = "";

//   for (var i = 0; i < all.length; i++) {
//       if (all[i] === true) {
//           list = list + all[i];
//       }
//   }
      
//   for (var i = 0; i < size; i++) {
//       var character = Math.floor((Math.random() * list.length) + 1);
//       password += list.charAt(character);
//     }

//   return(password);
// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// generateUpper.addEventListener("click", getUpper);
// generateLower.addEventListener("click", getLower);
// generateSpecial.addEventListener("click", getSpecial);
// generateNumber.addEventListener("click", getNumber);

// // var checkbox = document.querySelector('input[name=mode]');
 
// // checkbox.addEventListener('change', function() {
// //     if(this.checked) {
// //         trans()
// //         document.documentElement.setAttribute('data-theme', 'dartheme')
// //     } else {
// //         trans()
// //         document.documentElement.setAttribute('data-theme', 'lighttheme')
// //     }
// // })

// // var $count = document.getElementById("count");
// // var $increment = document.getElementById("increment");
// // var $decrement = document.getElementById("decrement");
// // var count = 0;

// // $decrement.addEventListener('click', function() {
// //     if(count > 0) {
// //         count--;
// //         $count.textContent = count;
// //     }
// // });
// // $increment.addEventListener('click', function() {
// //     count++;
// //     $count.textContent = count;
// // });