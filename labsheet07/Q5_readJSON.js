const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    const parsedData = JSON.parse(data);

    console.log('Name:', parsedData.name);
    console.log('Age:', parsedData.age);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
