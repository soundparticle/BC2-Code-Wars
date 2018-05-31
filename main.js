function insertDash(num) {
  let numbers = num.toString().split('');
  
  for (let i = 0; i < numbers.length; i++) {
  
  if (numbers[i] % 2 === 1 && numbers[i + 1] % 2 === 1) {
    
        numbers.splice(i + 1, 0, "-");
  }
 }
 let newNumber = numbers.join('');
  return newNumber;
}
