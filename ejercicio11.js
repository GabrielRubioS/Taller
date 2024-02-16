// Array para almacenar los productos
let inventario = [];

// Funcion para agregar un nuevo producto
function agregarProducto(nombre, descripcion, precio, cantidad, categoria) {
    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };
    inventario.push(producto);
}

// ver la lista de los productos 
function listaproduc() {
    inventario.forEach(producto => {
        console.log("Nombre:", producto.nombre);
        console.log("Descripción:", producto.descripcion);
        console.log("Precio:", producto.precio);
        console.log("Cantidad en stock:", producto.cantidad);
        console.log("Categoría:", producto.categoria);
        console.log("------------------------");
    });
}

// buscar un producto por su nombre
function buscarProducto(nombre) {
    const productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Producto encontrado:");
        console.log("Nombre:", productoEncontrado.nombre);
    }
}
      
