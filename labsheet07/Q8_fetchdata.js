const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

axios.get(apiUrl)
  .then(response => {
    console.log('API Response:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data from API:', error.message);
  });
