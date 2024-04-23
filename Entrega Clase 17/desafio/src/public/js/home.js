const socket = io()
console.log("🚀 ~ ", "Connected!")

socket.on('productos', (productos) => {

    // Manejar la actualización del DOM con los productos recibidos
    const productosHTML = productos.map(producto => {

        return `

           
                <div class="productoCard">
                    <h5 class="card-title text-white">${producto.title}</h5>
                    <ul class="">
                        <p><i class="bi-tag"></i> Code: ${producto.code}</p> 
                        <p><i class="bi-info-circle"></i> ID: ${producto._id}</p>
                        <p><i class="bi-file-text"></i> Description: ${producto.description}</li>
                        <p><i class="bi-currency-dollar"></i> Price: $${producto.price}</li>
                        <p><i class="bi-grid"></i> Category: ${producto.category}</li>
                        <p><i class="bi-check-circle"></i> Status: ${producto.status}</p>
                        <p><i class="bi-box"></i> Stock: ${producto.stock}</li>
                        <p><img src="${producto.thumbnails}" alt="${producto.title}"
                                class="imgage-thumbnail">
                        </p>
                    </ul>
                </div>
                


        `;
    }).join('');

    // div al que envio la data de los productos
    const div = document.getElementById('productos')

    // Menejo HTML del div
    div.innerHTML = `<div>${productosHTML}</div>`;
});

[]