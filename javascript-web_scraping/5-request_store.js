const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.log('Usage: node 5-request_store.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Error:', response.statusCode);
  } else {
    // Save the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});
