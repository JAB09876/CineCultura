const peliculas = [
    {
        titulo: "Warhammer 40K Space Marine 2",
        descripcion: "Enfréntate a hordas de enemigos en un universo devastado.",
        imagen: "https://assets-prd.ignimgs.com/2022/12/16/space-marine-2-1671194737602.jpg",
        horarios: ["12:00 PM", "3:00 PM", "6:00 PM"],
        duracion: "2h 15min",
        sinopsis: "Un emocionante viaje para salvar la galaxia en este épico universo de guerra.",
        trailer: "https://www.youtube.com/embed/EqHnrhIoEiE?si=yQFdcPp_G75KF0De"
    },
    {
        titulo: "Bellow Still Waters",
        descripcion: "Diez años después del colapso de la plataforma Beira D, extrañas criaturas emergen del abismo.",
        imagen: "https://github.com/JAB09876/CineCultura/blob/main/img/43895c57-f593-4c30-8460-268de4535e98.png?raw=true",
        horarios: ["12:00 PM", "6:00 PM", "8:00 PM"],
        duracion: "3h",
        sinopsis: "El doctor Mike Mentzer lidera una expedición al fondo del Atlántico, donde enfrentan horrores cósmicos inexplicables.",
        trailer: "https://youtu.be/1GFUCpvNnrA?si=UuUapEgSjTGDj3ib"
    },
    {
        titulo: "Berserk",
        descripcion: "La historia de Guts en un mundo oscuro y brutal.",
        imagen: "https://play-lh.googleusercontent.com/proxy/hO0GKwU5GYtJRoh7spC5FsBJYlON6WTfSp3kyKEA4SWIFcWdfLwCS0K1JEBJSDGplsfd8yrtX8NqiAQsqhXiSxD4lhgK5GNw0HbbqnlIdSBBU71Ns5f_Z4od=s3840-w3840-h2160",
        horarios: ["1:00 PM", "4:00 PM", "7:00 PM"],
        duracion: "1h 55min",
        sinopsis: "Guts lucha por sobrevivir en un mundo lleno de demonios, traiciones y dolor.",
        trailer: "https://www.youtube.com/embed/1ZwMr1j2ZmQ?si=nvpn52GMMCz0yjVB"
    },
    {
        titulo: "Transformers One",
        descripcion: "La historia de origen de los Autobots y Decepticons.",
        imagen: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/transformers-one/images/regions/au/updates/header.jpg",
        horarios: ["11:00 AM", "2:30 PM", "5:30 PM"],
        duracion: "2h 30min",
        sinopsis: "Descubre cómo comenzó la épica rivalidad entre Autobots y Decepticons en Cybertron.",
        trailer: "https://www.youtube.com/embed/APZhIJGQ7mM?si=3VnOiE2FknwXnZPp"
    },
    {
        titulo: "El Padrino 2",
        descripcion: "El padrino II presenta dos historias paralelas.",
        imagen: "https://i.blogs.es/40271f/2009_godfather2/450_1000.jpg",
        horarios: ["12:00 MD", "2:00 PM", "6:00 PM"],
        duracion: "3h 20min",
        sinopsis: "Sigue la expansión del imperio Corleone mientras exploras el pasado de Vito Corleone.",
        trailer: "https://www.youtube.com/embed/cpt4cXjdJz0?si=ESc8gYL1WKIuVuIW"
    },
    {
        titulo: "The Last of Us",
        descripcion: "Presenta la Aventura por salvar a la humanidad.",
        imagen: "https://forbes.es/wp-content/uploads/2023/01/the-last-of-us-hbo-portada.jpg",
        horarios: ["1:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        duracion: "1h 40min",
        sinopsis: "Joel y Ellie enfrentan un mundo postapocalíptico lleno de peligros y emociones.",
        trailer: "https://www.youtube.com/embed/yyGetSp7CIc?si=uPHaWDxVKMlroKum"
    },
    {
        titulo: "Batalla Cultural",
        descripcion: "Agustín Laje analiza las ideologías que están moldeando la política y la cultura actual.",
        imagen: "https://newmedia.ufm.edu/wp-content/uploads/2023/03/DG1_20230306_laje1-Portada.png",
        horarios: ["11:00 AM", "4:00 PM", "8:00 PM"],
        duracion: "1h 30min",
        sinopsis: "Explora las fuerzas culturales y políticas que están transformando nuestra sociedad.",
        trailer: "https://www.youtube.com/embed/2A-LR7iv6qQ?si=uGnNRv1BGkl37z1p"
    },
    {
        titulo: "Blade Runner 2049",
        descripcion: "La secuela del icónico filme de ciencia ficción, explorando los límites de la humanidad.",
        imagen: "https://wallpapers.com/images/featured/blade-runner-2049-ln4wirn5204bujot.jpg",
        horarios: ["10:00 AM", "2:00 PM", "5:00 PM"],
        duracion: "2h 44min",
        sinopsis: "Un blade runner desentierra secretos enterrados que podrían alterar el equilibrio de la sociedad.",
        trailer: "https://www.youtube.com/embed/PkqHVGFAhbU?si=wJNYNZRL05Ab7Mvh"
    },
    {
        titulo: "Pulp Fiction",
        descripcion: "Historias entrelazadas que cambian la estructura de las películas tradicionales.",
        imagen: "https://www.rockandpop.cl/wp-content/uploads/2024/04/Pulp-Fiction-jpg.webp",
        horarios: ["1:00 PM", "4:00 PM", "7:00 PM"],
        duracion: "2h 34min",
        sinopsis: "Un clásico del cine que redefine la narrativa cinematográfica con personajes memorables.",
        trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY?si=ZVZeoPcZin90sESR"
    },
    {
        titulo: "Fight Club",
        descripcion: "Un hombre lucha contra su propia identidad y las expectativas sociales.",
        imagen: "https://www.digitec.ch/im/Files/2/2/3/2/4/3/1/5/fight_club_brad_pitt_edward_norton_teaser21.jpeg?impolicy=teaser&resizeWidth=1136&resizeHeight=568",
        horarios: ["11:00 AM", "2:30 PM", "5:30 PM"],
        duracion: "2h 19min",
        sinopsis: "Explora los límites de la cordura y la rebelión contra las normas sociales en este thriller psicológico.",
        trailer: "https://www.youtube.com/embed/BdJKm16Co6M?si=aYcxYTWcfvri-a9_"
    },
    {
        titulo: "The Matrix",
        descripcion: "Un hacker descubre que la realidad que conoce es una simulación controlada por máquinas.",
        imagen: "https://www.syfy.com/sites/syfy/files/2021/03/the-matrix.jpeg",
        horarios: ["12:00 PM", "3:00 PM", "6:00 PM"],
        duracion: "2h 16min",
        sinopsis: "Neo se enfrenta a un mundo donde la ilusión y la realidad colisionan en una batalla por la libertad.",
        trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?si=HhH-DbW92NUnpCSl"
    }
];

// Renderizar cartelera
const cartelera = document.getElementById('cartelera');

peliculas.forEach((pelicula, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';

    col.innerHTML = `
        <div class="movie-card">
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}" class="img-fluid">
            <div class="p-3">
                <h5>${pelicula.titulo}</h5>
                <p>${pelicula.descripcion}</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary btn-asientos" data-index="${index}" data-bs-toggle="modal" data-bs-target="#horariosModal">Horarios</button>
                    <button class="btn btn-secondary btn-info text-white" data-index="${index}">Más info</button>
                </div>
            </div>
        </div>
    `;

    cartelera.appendChild(col);
});

// Mostrar horarios en modal
document.getElementById('horariosModal').addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const index = button.getAttribute('data-index');
    const pelicula = peliculas[index];

    const horariosList = document.getElementById('horariosList');
    horariosList.innerHTML = '';

    pelicula.horarios.forEach(horario => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = horario;
        li.addEventListener('click', () => {
            const url = `sala.html?titulo=${encodeURIComponent(pelicula.titulo)}`;
            window.location.href = url;
        });
        horariosList.appendChild(li);
    });

    document.getElementById('horariosModalLabel').textContent = `Horarios - ${pelicula.titulo}`;
});

// Modal más info
const peliculaModal = document.getElementById('peliculaModal');
peliculaModal.addEventListener('hidden.bs.modal', () => {
    document.body.classList.remove('modal-open');
    document.querySelector('.modal-backdrop')?.remove();
    document.getElementById('modalTrailer').src = ''; // detener video
});

// Clicks en botones de cartelera
document.getElementById('cartelera').addEventListener('click', (event) => {
    const target = event.target;
    const index = target.getAttribute('data-index');

    if (target.classList.contains('btn-info')) {
        const pelicula = peliculas[index];
        document.getElementById('modalImagen').src = pelicula.imagen;
        document.getElementById('modalTitulo').textContent = pelicula.titulo;
        document.getElementById('modalDuracion').textContent = pelicula.duracion;
        document.getElementById('modalSinopsis').textContent = pelicula.sinopsis;
        document.getElementById('modalTrailer').src = pelicula.trailer;

        const modal = new bootstrap.Modal(document.getElementById('peliculaModal'));
        modal.show();
    }

    if (target.classList.contains('btn-asientos')) {
        const pelicula = peliculas[index];
        const url = `../HTML/asientos.html?titulo=${encodeURIComponent(pelicula.titulo)}`;
        window.location.href = url;
    }
});
