const { crearArchivo } = require("./multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

// console.log(process.argv);
// const [, , arg3 = 5] = process.argv;
// const [, num = 5] = arg3.split("=");
// console.log(num);
console.clear();

crearArchivo(argv.n, argv.h, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo.bgMagenta, "creado"))
  .catch((err) => console.log(err));
