// Configuración de asientos
const filas = 6;
const columnas = 8;
const asientosOcupados = ["2-3", "3-4", "4-5"];  // Asientos ocupados para demostración

const seatContainer = document.getElementById('seatContainer');

// Crear las filas de asientos
for (let i = 1; i <= filas; i++) {
    const row = document.createElement('div');  // Crear un div para la fila
    row.classList.add('row');
    row.classList.add('d-flex');
    seatContainer.appendChild(row);  // Añadir la fila al contenedor principal

    for (let j = 1; j <= columnas; j++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.dataset.seat = `${String.fromCharCode(64 + i)}${j}`;  // Crear etiquetas como A1, B2, etc.

        // Marcar asientos ocupados
        if (asientosOcupados.includes(`${i}-${j}`)) {
            seat.classList.add('occupied');
        }

        // Añadir el número sobre el asiento
        const seatNumber = document.createElement('div');
        seatNumber.classList.add('seat-number');
        seatNumber.textContent = `${String.fromCharCode(64 + i)}${j}`;  // Asiento A1, B2, etc.
        seat.appendChild(seatNumber);

        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occupied')) {
                seat.classList.toggle('selected');
            }
        });

        row.appendChild(seat);  // Añadir cada asiento a la fila
    }
}

document.getElementById('confirmButton').addEventListener('click', () => {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
        .map(seat => seat.dataset.seat);

    if (selectedSeats.length > 0) {
        Swal.fire({
            title: '¡Selección confirmada!',
            text: `Tus asientos seleccionados son: ${selectedSeats.join(', ')}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            window.location.href = '../index.html#';
        });
    } else {
        Swal.fire({
            title: 'Error en la selección!',
            text: 'Tus asientos no han sido seleccionados con éxito.',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
    }
});
