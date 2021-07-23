Pampa Wines es una tienda de vinos, creada con React.

Todos los datos están almacenados en firebase, y son llamados por "ItemListContainer", que renderiza por cada objeto del array un componente "Item" con imagen, nombre y precio del producto.
Los vinos están clasificados en dos categorías con sus correspondientes subcategorías, cada una de ellas con su propia ruta. Al hacer clic en una categoría o subcategoría, "ItemListContainer" filtra los productos y muestra sólo los que cumplen con la misma.
Al hacer clic en el componente "Item", renderiza "ItemDetail", que muestra las características del producto y cuenta con un ItemCount, para seleccionar cantidad, y "AddToCart" para añadir al carrito.

NavBar renderizará el CartWidget sólo en caso de que se haya añadido al menos un producto al carrito. CartWidget dirige a Cart, donde se renderiza el listado de productos seleccionados con su respectiva imagen, nombre, cantidad y precio, y al final de esta tabla muestra el total. El formulario "Finalizar Compra" permite almacenar la orden en firebase con los datos solicitados al usuario, y una vez realizada la orden muestra el id de la misma en pantalla.

