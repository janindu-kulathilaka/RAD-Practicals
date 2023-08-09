function reverseString(inputString) {
    const charArray = inputString.split('');
  
    const reversedArray = charArray.reverse();
  
    const reversedString = reversedArray.join('');
  
    return reversedString;
  }
  
  const input = process.argv[2];
  
  if (!input) {
    console.log('Please provide a string as input.');
  } else {
    const reversedString = reverseString(input);
    console.log('Reversed string:', reversedString);
  }
  