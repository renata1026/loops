const firstChoice = prompt(
  `What program would you like to run? (length, yell, binary, or numSum)`
);
// if user selects length
if (firstChoice === 'length') {
  let word = prompt(`Enter your word to calculate the number of characters:`);
  let i = 0;
  while (word[i]) {
    i++;
  }
  alert(`${word} has ${i} characters.`);
  // if user selects yell
} else if (firstChoice === 'yell') {
  let yell = prompt(`Enter your word to yell:`);
  alert(`${yell.toUpperCase()}`);
  // if user selects numSum
} else if (firstChoice === 'numSum') {
  let num = prompt(
    `Enter number to calculate the sum of all the numbers it contains:`
  );
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    console.log(i, sum);
    sum += i;
  }
  alert(sum);
  console.log(`Sum of the digits in ${num} is ${sum}`);
  // if user selects binary
} else if (firstChoice === 'binary') {
  const word = prompt('Enter string to find out the binary');
  const wordArr = word.split('');
  const binaryArr = wordArr.filter((char) => char === '0' || char === '1');
  alert(`Filtered binary characters: ${binaryArr.join('')}`);
} else {
  alert(`I don't recognize the program`);
}
