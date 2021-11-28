const factories = require('../factory');
const models = require('../../src/models');

const properCase = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase(); // user => User, teST => Test

const seedConsole = () => {
  const args = process.argv.slice(2).filter((arg) => !arg.startsWith('--') && arg);
  const options = process.argv.slice(2).filter((arg) => arg.startsWith('--') && arg);
  // Object.fromEntries(
  //     process.argv.slice(2)
  //         .map((arg) => {
  //           const [key, value=true] = arg.toLowerCase().split('=')
  //           return [key,value]
  //         })
  // )

  if (options) {
    Array.from(args).forEach((argument) => {
      const [arg, count = 1] = argument.split('=');

      try {
        const factoryName = `${arg.toLowerCase()}Factory`;
        const modelName = properCase(arg); // User, teST => Test

        if (factories[factoryName] && models[properCase(arg)]) {
          const fakeDataArray = factories[factoryName](count); // userFactory(), testFactory()
          models[modelName]
            .insertMany(fakeDataArray)
            .then((r) => console.log(`${arg} => documents inserted Model-${modelName}:`, r.length));
        } else {
          console.error(
            `${factoryName} or ${modelName} model not found`,
            'please check factory/index.js & models/modelName.js file module is exported properly.'
          );
        }
      } catch (e) {
        console.error('error::', arg, e);
      }
    });
  }

  Array.from(options).forEach(async (arg) => {
    const [option, value = true] = arg.split('=');
    // console.log('SeedConsole.js:', option, value);
    switch (option) {
      case '--export':
        // --export
        break;
      case '--exit':
        setTimeout(() => {
          process.exit();
        }, 5000);
        break;
      default:
    }
  });
};

module.exports = seedConsole;

// process.argv.shift(); // skip node.exe
// process.argv.shift(); // skip name of js file
