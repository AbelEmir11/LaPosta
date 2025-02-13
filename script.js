//para el desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
// Obtener productos y mostrarlos en la página
fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
        console.log("Productos:", data); // Aquí verás los productos en la consola
        const productosContainer = document.getElementById('productos');
        data.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: ${producto.stock}</p>
                <p>Categoría: ${producto.categoria}</p>
            `;
            productosContainer.appendChild(productoElement);
        });
    })
    .catch(error => console.error("Error:", error));

document.getElementById('contactForm').onsubmit= function(event){
    event.preventDefault();

    this.submit()
};

document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];

    document.querySelectorAll('.agregar-carrito').forEach(button => {
        button.addEventListener('click', (event) => {
            const productoElement = event.target.closest('.producto');
            const productoId = productoElement.getAttribute('data-id');
            const productoNombre = productoElement.querySelector('h3').innerText;
            const productoPrecio = productoElement.querySelector('p').innerText;

            const producto = {
                id: productoId,
                nombre: productoNombre,
                precio: productoPrecio
            };

            carrito.push(producto);
            console.log('Producto agregado al carrito:', producto);
            console.log('Carrito:', carrito);
        });
    });
});
//document.querySelectorAll('.carrusel-item').forEach(item => {
  //  const image = item.querySelector('.carrusel-imagen');
    //const price = item.querySelector('.price');
    //const stock = item.querySelector('.stock');
  
    // Almacena los detalles de precio y stock en los atributos de la imagen
    //price.textContent = "Precio: " + image.getAttribute('data-precio');
    //stock.textContent = "Stock: " + image.getAttribute('data-stock');
  
    // Alternativa para agregar animación al menú si es necesario
    //item.addEventListener('mouseover', () => {
      //item.querySelector('.product-details').style.opacity = "1";
    //});
  
    //item.addEventListener('mouseout', () => {
      //item.querySelector('.product-details').style.opacity = "0";
    //});
  //});