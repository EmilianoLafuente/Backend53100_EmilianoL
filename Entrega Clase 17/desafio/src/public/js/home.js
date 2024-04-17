const socket = io()
console.log("🚀 ~ ", "Connected!")

socket.on('productos', (productos) => {

    // Manejar la actualización del DOM con los productos recibidos
    const productosHTML = productos.map(producto => {

        return `
        <div class="container mt-5"> 
            <div class="card h-100 bg-light">
                <div class="card-header bg-primary text-white">
                    <i class="bi bi-tag"></i> Code: ${producto.code}
                </div>
                    <div class="card-body">
                        <h5 class="card-title text-white">${producto.title}</h5>
                        <ul class="list-unstyled">
                            <li><i class="bi bi-info-circle"></i> ID: ${producto._id}</li> 
                            <li><i class="bi bi-file-text"></i> Description: ${producto.description}</li>
                            <li><i class="bi bi-currency-dollar"></i> Price: $${producto.price}</li>
                            <li><i class="bi bi-grid"></i> Category: ${producto.category}</li>
                            <li><i class="bi bi-check-circle"></i> Status: ${producto.status}</li> 
                            <li><i class="bi bi-box"></i> Stock: ${producto.stock}</li>
                            <li>
                                <i class="bi bi-image"></i> <img src="${producto.thumbnails}" alt="${producto.title}"
                                    class="img-fluid mt-2">
                            </li> 
                        </ul>
                    </div>
            </div>

        </div>


        `;
    }).join('');

    // div al que envio la data de los productos
    const div = document.getElementById('productos')

    // Menejo HTML del div
    div.innerHTML = `<div>${productosHTML}</div>`;
});

[]



// <div class="card-header bg-primary text-white">
// <i class="bi bi-tag"></i> Code: ${producto.code}
// </div>
// Título: ${producto.title} <br>
// Descripción: ${producto.description} <br>
// Código: ${producto.code} <br>
// Precio: ${producto.price} <br>
// Stock: ${producto.stock} <br>
// Categoría: ${producto.category} 