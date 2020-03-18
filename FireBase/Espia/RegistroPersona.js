class Persona {
        
    constructor(id,Nombre,Latitud,Longitud){
        this.id = id;
        this.Nombre = Nombre;
        this.Latitud = Latitud;
        this.Longitud = Longitud;
    };

    borrar(id){                
        db.collection("Persona").doc(id).delete();
    };

    agregar(){
        db.collection('Persona').add({
            Nombre:  this.Nombre,
            Latitud: this.Latitud,
            Longitud: this.Longitud
        });
    }

    actualizar(){    
        db.collection('Persona').doc(this.id).update({
            Nombre: this.Nombre,
            Latitud: this.Latitud,
            Longitud: this.Longitud
        });
    };

};