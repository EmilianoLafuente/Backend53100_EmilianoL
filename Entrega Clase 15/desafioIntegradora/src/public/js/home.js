const socket = io()
console.log("🚀 ~ ", "Connected!")

socket.on('productos', (productos) => {
    // Manejar la actualización del DOM con los productos recibidos

    const productosHTML = productos.map(producto => {

        return `
            <li>
                Título: ${producto.title} <br>
                Descripción: ${producto.description} <br>
                Código: ${producto.code} <br>
                Precio: ${producto.price} <br>
                Stock: ${producto.stock} <br>
                Categoría: ${producto.category} 
            </li>
        `;
    }).join('');
    
    // div al que envio la data de los productos
    const div = document.getElementById('productos')
    
    // Menejo HTML del div
    div.innerHTML = `<ul>${productosHTML}</ul>`;
});

[]