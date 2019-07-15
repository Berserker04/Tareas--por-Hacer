const fs = require('fs');

let listaDB = [];

const crearTareas = (descripcion) => {
    cargarDB();

    let datos = {
        completado:false,
        descripcion:descripcion
    }

    listaDB.push(datos);

    guardarDB();

    return datos;
}

const cargarDB = () =>{
    try{

        listaDB = require('../db/datosDB.json');
    }catch(e){
        listaDB = [];
    }
}

const guardarDB = () => {
    let dato = JSON.stringify(listaDB);
    fs.writeFile("./db/datosDB.json",dato,(err=>{
        if(err) throw Error("no se pudo guardar")
    }))
}

const listarTareas = () => {
    cargarDB();
    return listaDB;
}

const actualizarTarea = (descripcion,completado = true) => {
    cargarDB();
    let index = listaDB.findIndex(tarea=> tarea.descripcion === descripcion);

    if(index >= 0){
        listaDB[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevaLista = listaDB.filter(tarea=> tarea.descripcion !== descripcion);
    if(nuevaLista.length != listaDB.length){
        listaDB = nuevaLista;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crearTareas,
    listarTareas,
    actualizarTarea,
    borrarTarea
}