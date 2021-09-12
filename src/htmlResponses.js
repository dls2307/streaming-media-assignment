const fs = require('fs');

const loadPage = (request, response, filePath) => {
  const index = fs.readFileSync(`${__dirname}/${filePath}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getIndex = (request, response) => {
  loadPage(request, response, '../client/client.html');
};

const getPage2 = (request, response) => {
  loadPage(request, response, '../client/client2.html');
};

const getPage3 = (request, response) => {
  loadPage(request, response, '../client/client3.html');
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
