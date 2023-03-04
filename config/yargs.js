const argv = require("yargs")
  .option("n", {
    alias: "num",
    type: "number",
    demandOption: true,
    describe: "es el numero a multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    default: 10,
    describe: "es el numero hasta el cual llega la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: " Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.n)) {
      throw "La num tiene que ser un numero";
    }
    return true;
  }).argv;
module.exports = argv;
