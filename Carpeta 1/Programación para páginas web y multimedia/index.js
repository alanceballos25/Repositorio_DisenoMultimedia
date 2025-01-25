let nombreArtista = document.getElementById('nombreArtista');
let nombreAlbum = document.getElementById('nombreAlbum');
let fotoArtista = document.getElementById('fotoArtista');
let listaCanciones = document.getElementById('listaCanciones');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7cf65ac27cmshe80f8d2db45dca8p1c08f0jsn7a5aac1124db',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

fetch('https://spotify23.p.rapidapi.com/albums/?ids=3ind4Ir3JMazCITxWQajDb', options)
.then(response => response.json())
.then(response =>{
    console.log(response);
    nombreArtista.innerHTML = response.albums[0].artists[0].name;
   nombreAlbum.innerHTML = response.albums[0].name;
   fotoArtista.src = response.albums[0].images[0].url;
   
   let canciones = response.albums[0].tracks.items;

   let todasLasCanciones = '';
canciones.forEach((cancion,index) => {
    let nombreCancion = cancion.name;
    let cancionUrl = cancion.preview_url;
    todasLasCanciones +=
    `<div class="col-12 col-md-4 text center">
        <p>${nombreCancion}</p>
        <audio controls>
            <source src="${cancionUrl}" type="audio/mpeg">
                Tu navegador no soporta este elemento de audio
        </audio>
    </div>`;
    console.log(nombreCancion);
    console.log(cancion.preview_url);
});
listaCanciones.innerHTML = todasLasCanciones;
})
.catch(err => console.error(err));
