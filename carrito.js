document.addEventListener('DOMContentLoaded', () => {
    const carritoContainer = document.getElementById('carrito-container');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        carritoContainer.innerHTML = carrito.map(product => `
            <div class="producto-carrito">
                <img src="${product.image}" alt="${product.name}" width="50">
                <p>${product.name}</p>
                <p>Precio: $${product.price} COP</p>
                <p>Cantidad: ${product.quantity}</p>
                <button class="eliminar-producto" data-id="${product.id}">Eliminar</button>
            </div>
        `).join('');

        // Agregar evento para eliminar productos
        document.querySelectorAll('.eliminar-producto').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.dataset.id;
                const nuevoCarrito = carrito.filter(product => product.id !== id);
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
                location.reload(); 
            });
        });
    }

    // Finalizar compra (puedes personalizar esta lógica)
    document.getElementById('finalizar-compra').addEventListener('click', () => {
        alert('Gracias por tu compra');
        localStorage.removeItem('carrito'); 
        location.href = 'index.html'; 
    });
});

