const ControladorAPI = (function() {
    
    const clientId = '8a61692cb28548e3ad237a2472c24be6';
    const clientSecret = '48fcf9d9b7ce43358f38741771ae5f59';

    
    const _obtenerToken = async () => {

        const resultado = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const datos = await resultado.json();
        return datos.access_token;
    }
    
    const _obtenerGeneros = async (token) => {

        const resultado = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const datos = await resultado.json();
        return datos.categories.items;
    }

    const _obtenerListaReproduccionPorGenero = async (token, idGenero) => {

        const limite = 20;
        
        const resultado = await fetch(`https://api.spotify.com/v1/browse/categories/${idGenero}/playlists?limit=${limite}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const datos = await resultado.json();
        return datos.playlists.items;
    }

    const _obtenerPistas = async (token, puntoFinalPistas) => {

        const limite = 20;

        const resultado = await fetch(`${puntoFinalPistas}?limit=${limite}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const datos = await resultado.json();
        return datos.items;
    }

    const _obtenerPista = async (token, puntoFinalPista) => {

        const resultado = await fetch(`${puntoFinalPista}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const datos = await resultado.json();
        return datos;
    }

    return {
        obtenerToken() {
            return _obtenerToken();
        },
        obtenerGeneros(token) {
            return _obtenerGeneros(token);
        },
        obtenerListaReproduccionPorGenero(token, idGenero) {
            return _obtenerListaReproduccionPorGenero(token, idGenero);
        },
        obtenerPistas(token, puntoFinalPistas) {
            return _obtenerPistas(token, puntoFinalPistas);
        },
        obtenerPista(token, puntoFinalPista) {
            return _obtenerPista(token, puntoFinalPista);
        }
    }
})();



const ControladorInterfazUsuario = (function() {

    
    const ElementosDOM = {
        seleccionarGenero: '#select_genre',
        seleccionarListaReproduccion: '#select_playlist',
        botonEnviar: '#btn_submit',
        divDetalleCancion: '#song-detail',
        hfToken: '#hidden_token',
        divListaCanciones: '.song-list'
    }

    
    return {

        
        campoEntrada() {
            return {
                genero: document.querySelector(ElementosDOM.seleccionarGenero),
                listaReproduccion: document.querySelector(ElementosDOM.seleccionarListaReproduccion),
                pistas: document.querySelector(ElementosDOM.divListaCanciones),
                enviar: document.querySelector(ElementosDOM.botonEnviar),
                detalleCancion: document.querySelector(ElementosDOM.divDetalleCancion)
            }
        },

       
        crearGenero(texto, valor) {
            const html = `<option value="${valor}">${texto}</option>`;
            document.querySelector(ElementosDOM.seleccionarGenero).insertAdjacentHTML('beforeend', html);
        }, 

        crearListaReproduccion(texto, valor) {
            const html = `<option value="${valor}">${texto}</option>`;
            document.querySelector(ElementosDOM.seleccionarListaReproduccion).insertAdjacentHTML('beforeend', html);
        },

        
        crearPista(id, nombre) {
            const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${nombre}</a>`;
            document.querySelector(ElementosDOM.divListaCanciones).insertAdjacentHTML('beforeend', html);
        },

        
        crearDetalleCancion(img, titulo, artista) {

            const detalleDiv = document.querySelector(ElementosDOM.divDetalleCancion);
           
            detalleDiv.innerHTML = '';
        
            const html = 
            `
            <div class="row col-sm-12 px-0">
                <img src="${img}" alt="" style="width: 300px;">        
            </div>
            <div class="row col-sm-12 px-0">
                <label for="Genero" class="form-label col-sm-12" style="font-size: 30px;">${titulo}</label>
            </div>
            <div class="row col-sm-12 px-0">
                <label for="artista" class="form-label col-sm-12" style="color: black;" style="font-size.30px;"> Interpretada por: ${artista}</label>
            </div> 
            `;
        
            detalleDiv.insertAdjacentHTML('beforeend', html)
        },
        

        resetearDetalleCancion() {
            this.campoEntrada().detalleCancion.innerHTML = '';
        },

        resetearPistas() {
            this.campoEntrada().pistas.innerHTML = '';
            this.resetearDetalleCancion();
        },

        resetearListaReproduccion() {
            this.campoEntrada().listaReproduccion.innerHTML = '';
            this.resetearPistas();
        },
        
        almacenarToken(valor) {
            document.querySelector(ElementosDOM.hfToken).value = valor;
        },

        obtenerTokenAlmacenado() {
            return {
                token: document.querySelector(ElementosDOM.hfToken).value
            }
        }
    }

})();

const ControladorApp = (function(ControladorInterfazUsuario, ControladorAPI) {

 
    const ElementosDOM = ControladorInterfazUsuario.campoEntrada();

   
    const cargarGeneros = async () => {
        
        const token = await ControladorAPI.obtenerToken();           
        
        ControladorInterfazUsuario.almacenarToken(token);
      
        const generos = await ControladorAPI.obtenerGeneros(token);
        
        generos.forEach(elemento => ControladorInterfazUsuario.crearGenero(elemento.name, elemento.id));
    }

    
    ElementosDOM.genero.addEventListener('change', async () => {
        
        ControladorInterfazUsuario.resetearListaReproduccion();
       
        const token = ControladorInterfazUsuario.obtenerTokenAlmacenado().token;        
        
        const seleccionGenero = ControladorInterfazUsuario.campoEntrada().genero;       
       
        const idGenero = seleccionGenero.options[seleccionGenero.selectedIndex].value;             
       
        const listaReproduccion = await ControladorAPI.obtenerListaReproduccionPorGenero(token, idGenero);       
       
        listaReproduccion.forEach(p => ControladorInterfazUsuario.crearListaReproduccion(p.name, p.tracks.href));
    });
     

   
    ElementosDOM.enviar.addEventListener('click', async (e) => {
       
        e.preventDefault();
        
        ControladorInterfazUsuario.resetearPistas();
        
        const token = ControladorInterfazUsuario.obtenerTokenAlmacenado().token;        
       
        const seleccionListaReproduccion = ControladorInterfazUsuario.campoEntrada().listaReproduccion;
       
        const puntoFinalPistas = seleccionListaReproduccion.options[seleccionListaReproduccion.selectedIndex].value;
       
        const pistas = await ControladorAPI.obtenerPistas(token, puntoFinalPistas);
        
        pistas.forEach(el => ControladorInterfazUsuario.crearPista(el.track.href, el.track.name))
        
    });

    
    ElementosDOM.pistas.addEventListener('click', async (e) => {
      
        e.preventDefault();
        ControladorInterfazUsuario.resetearDetalleCancion();
        
        const token = ControladorInterfazUsuario.obtenerTokenAlmacenado().token;
        
        const puntoFinalPista = e.target.id;
        
        const pista = await ControladorAPI.obtenerPista(token, puntoFinalPista);
        
        ControladorInterfazUsuario.crearDetalleCancion(pista.album.images[1].url, pista.name, pista.artists[0].name);
    });    

    return {
        iniciar() {
            console.log('La aplicación está comenzando');
            cargarGeneros();
        }
    }

})(ControladorInterfazUsuario, ControladorAPI);


ControladorApp.iniciar();
