let data = '';

// requireds

const fs = require('fs');
//const fs = require('express');
//const fs = require('');


let listaTabla = (base, limite = 10) => {

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducciondo no es un numero');
            return;

        }

        for (let i = 0; i <= limite; i++) {
            //console.log(base, 'x', i, '=', base * i);

            data += `${base} * ${i} = ${base * i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
            console.log(`El archivo de la tabla-${base}-al-${limite}.txt ha sido creado`);
        });

    });
}


module.exports = {
    crearArchivo,
    listaTabla
}