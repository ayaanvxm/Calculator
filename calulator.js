function fullCalculator() {
  rl.question('Enter the math statement: ', (userInput) => {

    let tempInput = userInput.split(' ');

    // Validate input
    if (tempInput.length % 2 === 0) {
      console.log('Invalid input. Please enter a valid math statement.');
      return;
    }

    let total = parseFloat(tempInput[0]);
    let placeHolder = 0;
    let symbol = "";

    for (let i = 1; i < tempInput.length; i++) {
      const element = tempInput[i];
      if (i % 2 === 0) {
        // If current element is a symbol, perform the calculation with the previous number
        switch(symbol) {
          case '+':
            total += parseFloat(placeHolder);
            break;
          case '-':
            total -= parseFloat(placeHolder);
            break;
          case '*':
            total *= parseFloat(placeHolder);
            break;
          case '/':
            total /= parseFloat(placeHolder);
            break;
        }
        symbol = element;
        placeHolder = 0;
      } else {
        // If current element is a number, store it as the placeholder for the next calculation
        placeHolder = element;
      }
    }

    // Perform the last calculation with the final number
    switch(symbol) {
      case '+':
        total += parseFloat(placeHolder);
        break;
      case '-':
        total -= parseFloat(placeHolder);
        break;
      case '*':
        total *= parseFloat(placeHolder);
        break;
      case '/':
        total /= parseFloat(placeHolder);
        break;
    }

    console.log(`Result: ${total}`);

    return;
  });
}
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Call the fullCalculator function here
fullCalculator();
