const argv = require('./config/yargs').argv;




const { crearArchivo, listaTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listaTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Àrchivo creado ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}