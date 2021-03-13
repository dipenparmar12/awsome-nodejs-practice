const fs = require('fs');
const approot = require('app-root-path');

const storeData = (data, path) => {
  try {
    fs.writeFileSync(`${approot}/${path}`, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

module.exports = storeData;
