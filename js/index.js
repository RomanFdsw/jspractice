alert('Hello world'); 

let userAge = parseInt(prompt('Enter your age'));
alert(userAge);
let userNext = add(userAge,1);
alert(userNext);


if (userAge >= 18) {
 alert('ви вже повнолітній')
} else {
  alert('Ви ще неповнолітній')
}

function add(a, b) {
    let result = a + b; 
    return result;
}