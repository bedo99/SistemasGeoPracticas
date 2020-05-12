const listaloggedout = document.querySelectorAll('.logged-out');
 const listaloggedin = document.querySelectorAll('.logged-in');
 const datosdelacuenta = document.querySelector('.datosdelacuenta');
 
 const configuraMenu = (user) => {
     if(user){
        

        db.collection('usuarios').doc(user.uid).get().then( doc =>{
            const html = `
                <p>Nombre: ${ doc.data().nombre }</p>
                <p>Correo: ${ user.email}</p>
                <p>Teléfono: ${ doc.data().telefono }</p>
                <p>Dirección: ${ doc.data().direccion }</p>
                <p>Coordenadas: ${ doc.data().coordenadas.latitude } , ${ doc.data().coordenadas.longitude }</p>
            `;
            datosdelacuenta.innerHTML = html;
        });

        listaloggedin.forEach( item => item.style.display = 'block');
        listaloggedout.forEach( item => item.style.display = 'none');
     }
     else
     {
        datosdelacuenta.innerHTML = '';
        listaloggedin.forEach( item => item.style.display = 'none');
        listaloggedout.forEach( item => item.style.display = 'block');
     }
 }

 const obtieneAmigos = (data) =>{

    var propiedades = {
        center: {
            lat: 21.152665,
            lng: -101.711201
        },
        zoom: 14
    }

    var mapa = document.getElementById("map");
    var map = new google.maps.Map(mapa,propiedades);



 };