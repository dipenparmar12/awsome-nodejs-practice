const fs = require('fs');

const loadData = (path, jsonParse = false) => {
  try {
    return jsonParse ? JSON.parse(fs.readFileSync(path, 'utf8')) : fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = loadData;
