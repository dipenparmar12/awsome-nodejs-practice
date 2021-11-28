const fs = require('fs');
const appRoot = require('app-root-path');

const storeData = (data, path) => {
  try {
    fs.writeFileSync(`${appRoot}/${path}`, JSON.stringify(data));
  } catch (err) {
    console.error('Error (writing file)', err);
  }
};

module.exports = storeData;
