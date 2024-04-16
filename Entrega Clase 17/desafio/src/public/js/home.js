const socket = io()
console.log("🚀 ~ ", "Connected!")

socket.on('productos', (productos) => {

    // Manejar la actualización del DOM con los productos recibidos
    const productosHTML = productos.map(producto => {

        return `
        <div class="container mt-5">
    <h1 class="text-center mb-4">PRODUCTOS</h1>
    <div id="productos" class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

    <div class="col mb-4">
        <div class="card h-100 bg-light">
            <div class="card-header bg-primary text-white">
                <i class="bi bi-tag"></i> Code: {{producto.code}}
            </div>
            <div class="card-body">
                <h5 class="card-title text-white">{{producto.title}}</h5>
                <li  class="list-unstyled">
                    <li><i class="bi bi-info-circle"></i> ID: {{producto.title}}</li>
                    <li><i class="bi bi-file-text"></i> Description: {{producto.description}}</li>
                    <li><i class="bi bi-currency-dollar"></i> Price: {{producto.price}}</li>
                    <li><i class="bi bi-grid"></i> Category: {{producto.category}}</li>
                    <li><i class="bi bi-check-circle"></i> Status: {{producto.status}}</li>
                    <li><i class="bi bi-box"></i> Stock: {{producto.stock}}</li>
                    <li>
                        <i class="bi bi-image"></i> Image: <img src="{{producto.thumbnails}}" alt="{{producto.title}}"
                            class="img-fluid mt-2">
                    </li>
                </li>
            </div>
        </div>
    </div>
    </div>
    </div>
       
            
        `;
    }).join('');

    // {{!-- 
    //     <ul class="product">
    //     Título: ${producto.title} <br>
    //     Descripción: ${producto.description} <br>
    //     Código: ${producto.code} <br>
    //     Precio: ${producto.price} <br>
    //     Stock: ${producto.stock} <br>
    //     Categoría: ${producto.category} 
    // </ul> --}}
    
    // div al que envio la data de los productos
    const div = document.getElementById('productos')

    // Menejo HTML del div
    div.innerHTML = `<ul>${productosHTML}</ul>`;
});

[]