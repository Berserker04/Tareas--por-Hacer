const descripcion={
    demand: true,
    alias: "d",
    desc: "Borra una tarea"
}

const completado = {
    default: true,
    alias: 'c',
    desc:"Marca como completado o pendiente una tarea"
}

const argv = require('yargs')
    .command(
        "crear",
        "Crear una tarea",{
        descripcion
    })
    .command(
        "actualizar",
        "Actualiza el estado de una tarea",{
        descripcion,
        completado
    })
    .command("borrar","Borra una tarea especifica",{
        descripcion
    })
    .help()
    .argv;

    module.exports = {
        argv
    }