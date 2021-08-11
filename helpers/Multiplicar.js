const fs = require('fs');
const colors =  require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {
    
    try {

        let salida, print = '';
        for (let index = 1; index <= hasta; index++) {
            const opera = index * base;
            salida += `${colors.bold.green(base)} ${'x '.inverse}${colors.bold.inverse(index)} ${'='.blue.bold} ${colors.bold(opera)} \n`;
            print += `${base} x ${index} = ${opera}\n`;
        }
    if (listar) {
        console.log("====================".yellow)
        console.log(`     Tabla del ${colors.red(base)}    `)
        console.log("====================".yellow)
        console.log(salida)
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, print)
    return(`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }

    
}

module.exports = {
    crearArchivo
}