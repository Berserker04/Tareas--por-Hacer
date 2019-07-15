const Tareas = require("./por-hacer/por-hacer");
const argv = require("./config/yargs").argv;
const Color = require("color");

let comando = argv._[0]

switch(comando){
    case 'crear':
        let porHacer = Tareas.crearTareas(argv.d)
        console.log(porHacer);
        break;
    case 'listar':
        let listar = Tareas.listarTareas();
        console.log("trae",listar);
        for(let tarea of listar){
            console.log("\n========Tarea========");
            console.log(tarea.descripcion);
            console.log(`completado?: ${(tarea.completado)?"SI":"NO"}`);
            console.log("========Tarea========\n");
        }
        break;
    case 'actualizar':
        let Atarea = Tareas.actualizarTarea(argv.descripcion,argv.completado);
        if(Atarea) console.log("tarea actualizada con exito");
        else console.log("no se pudo actualizar la tarea");
        break;
    case 'borrar':
        let Btarea = Tareas.borrarTarea(argv.descripcion);
        if(Btarea) console.log("tarea eliminada con exito");
        else console.log("no se pudo eliminar la tarea");
        break;
    default:
        console.log(`Este comando no es valido`);
}




























/*
// Modo <3
var love = '<3';

const MeState = (LoveMe) => {

    let limit = Infinity;
    let she = "yes";

    for(let i = 0; i <= limit; i++){
        if(she == LoveMe){
            let I_Love = she;
            return I_Love * Love;
        }else{
            return `Nothing of ${love} for me`;
        }
    }
}

// para que cualquiera lo resuelva
module.exports = {
    MeState
}

// Programación cursi
//By BerserkerDev
*/
