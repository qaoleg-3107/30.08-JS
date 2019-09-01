let message = 'Hello JavaScript!';
alert(message);
message = 'Nice to see you!';
alert(message);

const userAge = parseInt(prompt('Enter you age'));
 alert('Your age is ' + userAge);

const nextAge = addOne(userAge);
alert('Your age in next year is ' + nextAge);

if (userAge >= 18 && userAge < 65) {
alert('You are adult')
} else if (userAge >= 65) {
alert ('You are mature')
} else {
alert('You are child')
}

function addOne(userA) {
  const newValue = userA + 1;
return newValue;
}