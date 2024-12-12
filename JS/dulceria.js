const productos = [
    { id: 1, nombre: 'Palomitas', precio: 1500, imagen: 'https://media.istockphoto.com/id/985459232/es/foto/render-3d-de-un-carrete-de-video-con-pel%C3%ADculas-de-v%C3%ADdeo-que-se-extiende-alrededor-de-un-gran.jpg?s=612x612&w=0&k=20&c=QmlhOEdRglbbRMwvYpNaC_wXwiWHfe503CKw2erQX0c=' },
    { id: 2, nombre: 'Refresco', precio: 1200, imagen: 'https://media.istockphoto.com/id/909938470/es/foto/comida-r%C3%A1pida-cola-bebe-copa-y-pajita.jpg?s=612x612&w=0&k=20&c=MV_j5gIoFgobJM_lTmhgDnpSt1g_eStiww1xrPFw8uA=' },
    { id: 3, nombre: 'Chocolates', precio: 2000, imagen: 'https://www.regalooriginal.com/frontend/urls/grande/tableta-chocolate-amor-de-cine-g2.jpg' },
    { id: 4, nombre: 'Nachos', precio: 2500, imagen: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c20d283979207.5d4cf69c38534.jpg' },
    { id: 5, nombre: 'Combo Palomitas', precio: 2600, imagen: 'https://media.istockphoto.com/id/1086056476/es/foto/aperitivos-de-entretenimiento-de-cine.jpg?s=612x612&w=0&k=20&c=6oB1ysztmRDer-MWwDIxnBT9gG9p-Ic_-RjQbICLNDM=' },
    { id: 6, nombre: 'Combo Nachos', precio: 3600, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIFT9Aaw0vB4iHyneF4NVYKtHcOkKly22cA&s' },
];

let carrito = [];

// Renderizar productos
const listaProductos = document.querySelector('.lista-productos');
productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>₡${producto.precio}</p>
        <button data-id="${producto.id}">Agregar</button>
    `;
    listaProductos.appendChild(div);
});

// Agregar al carrito
listaProductos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const idProducto = parseInt(e.target.dataset.id);
        const producto = productos.find(p => p.id === idProducto);

        const itemEnCarrito = carrito.find(item => item.id === idProducto);
        if (itemEnCarrito) {
            itemEnCarrito.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        actualizarResumen();
    }
});

// Actualizar el resumen
function actualizarResumen() {
    const listaResumen = document.querySelector('.lista-resumen');
    listaResumen.innerHTML = '';

    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.nombre} x${item.cantidad}</span>
            <span>₡${item.precio * item.cantidad}</span>
        `;
        listaResumen.appendChild(li);
    });

    document.getElementById('total').textContent = `₡${total.toFixed(2)}`;
}

// Confirmar compra
document.getElementById('confirmarCompra').addEventListener('click', () => {
    if (carrito.length === 0) {
        Swal.fire('Carrito vacío', 'Agrega productos antes de confirmar', 'error');
    } else {
        Swal.fire('¡Compra confirmada!', 'Gracias por tu compra', 'success');
        carrito = [];
        actualizarResumen();
    }
});
