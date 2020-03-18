class Registro {
        
    constructor(id,Nombre,Codigo){
        this.id = id;
        this.Nombre = Nombre;
        this.Codigo = Codigo;
    };

    borrar(id){                
        db.collection("Productos2").doc(id).delete();
    };

    agregar(){
        db.collection('Productos2').add({
            Nombre: this.Nombre,
            Codigo: this.Codigo
        });
    }

    editar(id){    
        formularioeditar.nombreeditar.value = this.Nombre;
        formularioeditar.codigoeditar.value = this.Codigo;
        formularioeditar.ideditar.value = this.id;
    };

    actualizar(){    
        db.collection('Productos2').doc(this.id).update({
            Nombre: this.Nombre,
            Codigo: this.Codigo
        });
    };

};