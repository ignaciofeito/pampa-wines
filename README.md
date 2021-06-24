Pampa Wines es una tienda de vinos, creada con React.

Todos los datos están almacenados en un array del archivo "products.js", y son llamados por "ItemListContainer", que renderiza por cada objeto del array un componente "Item" con imagen, nombre y precio del producto.
Los vinos están clasificados en tres categorías, Malbec, Cabernet Sauvignon y Syrah, cada una de ellas con su propia ruta. Al hacer clic en una categoría, "ItemListContainer" filtra el array de productos y muestra sólo los que cumplen con la misma.
Al hacer clic en el componente "Item", renderiza "ItemDetail", que muestra las características del producto y agrega "ItemCount", para seleccionar cantidad, y "AddToCart" para añadir al carrito.

Home page: /pampa-wines/
