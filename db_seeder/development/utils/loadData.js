const fs = require('fs');

const loadData = (path) => {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = loadData;
