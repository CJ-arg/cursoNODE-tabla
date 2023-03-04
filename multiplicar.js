const fs = require("fs");

let crearArchivo = async (num = 5, h, l) => {
  let i = 0;
  let consola = "",
    salida = "";

  try {
    while (i <= h) {
      salida += `${num} *${i}  = ${num * i}\n`;
      consola += `${num} ${"*".magenta} ${i}  ${"=".yellow} ${num * i}\n`;
      i++;
    }
    l ? console.log(consola) : null;

    fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
    return `tabla-${num}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
