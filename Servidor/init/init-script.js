db.createCollection('productos', { capped: false });
db.createCollection('categorias', { capped: false });

db.categorias.insert([{"id":1,"name":"Ropa","image":"https://i.imgur.com/QkIa5tT.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":2,"name":"Electrónica","image":"https://i.imgur.com/ZANVnHE.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":3,"name":"Mobiliario","image":"https://i.imgur.com/Qphac99.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":4,"name":"Zapatos","image":"https://i.imgur.com/qNOjJje.jpeg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"},{"id":5,"name":"Variado","image":"https://i.imgur.com/BG8J0Fj.jpg","creationAt":"2024-02-27T04:27:04.000Z","updatedAt":"2024-02-27T04:27:04.000Z"}]);


db.productos.insert([
    {
      "title": "Camiseta deportiva",
      "price": 13,
      "description": "Camiseta deportiva transpirable",
      "image": "./assets/imagenes/camiseta_deportiva.webp",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Pantalones cortos",
      "price": 24,
      "description": "Pantalones cortos cómodos para hacer ejercicio",
      "image": "./assets/imagenes/pantalones_cortos.webp",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sudadera con capucha",
      "price": 34,
      "description": "Sudadera con capucha y bolsillo canguro",
      "image": "./assets/imagenes/sudadera_capucha.webp",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Calcetines deportivos",
      "price": 3,
      "description": "Calcetines deportivos cómodos y duraderos",
      "image": "./assets/imagenes/calcetines_deportivos.webp",
      "category": 1,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Teléfono inteligente",
      "price": 600,
      "description": "Teléfono inteligente con pantalla táctil y cámara de alta resolución",
      "image": "./assets/imagenes/telefono_inteligente.webp",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Laptop",
      "price": 900,
      "description": "Laptop ultradelgada con procesador potente y larga duración de la batería",
      "image": "./assets/imagenes/laptop.webp",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Auriculares inalámbricos",
      "price": 29,
      "description": "Auriculares inalámbricos con cancelación de ruido activa",
      "image": "./assets/imagenes/auriculares_inalambricos.webp",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Smartwatch",
      "price": 49,
      "description": "Smartwatch con monitor de frecuencia cardíaca y seguimiento de actividad",
      "image": "./assets/imagenes/smartwatch.webp",
      "category": 2,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Silla de oficina ergonómica",
      "price": 49,
      "description": "Silla de oficina con respaldo ajustable y soporte lumbar",
      "image": "./assets/imagenes/silla_oficina.webp",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Escritorio de madera",
      "price": 79,
      "description": "Escritorio de madera maciza con amplio espacio de trabajo",
      "image": "./assets/imagenes/escritorio_madera.webp",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sofá de cuero",
      "price": 1499,
      "description": "Sofá de cuero genuino con asientos reclinables",
      "image": "./assets/imagenes/sofa_cuero.webp",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Mesa de comedor",
      "price": 250,
      "description": "Mesa de comedor con superficie de vidrio templado y patas de acero inoxidable",
      "image": "./assets/imagenes/mesa_comedor.webp",
      "category": 3,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Zapatillas deportivas",
      "price": 62,
      "description": "Zapatillas deportivas con suela amortiguada y material transpirable",
      "image": "./assets/imagenes/zapatillas_deportivas.webp",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Botas de senderismo",
      "price": 59,
      "description": "Botas de senderismo resistentes al agua y con suela antideslizante",
      "image": "./assets/imagenes/botas_senderismo.webp",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Zapatos de vestir",
      "price": 49,
      "description": "Zapatos de vestir elegantes con diseño clásico",
      "image": "./assets/imagenes/zapatos_vestir.webp",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Sandalias de playa",
      "price": 18,
      "description": "Sandalias de playa cómodas con correas ajustables",
      "image": "./assets/imagenes/sandalias_playa.webp",
      "category": 4,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Set de herramientas",
      "price": 49,
      "description": "Set de herramientas completo con destornilladores, llaves y martillo",
      "image": "./assets/imagenes/set_herramientas.webp",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Lámpara de escritorio",
      "price": 19,
      "description": "Lámpara de escritorio LED con brazo flexible",
      "image": "./assets/imagenes/lampara_escritorio.webp",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Caja de almacenamiento",
      "price": 14,
      "description": "Caja de almacenamiento de plástico resistente con tapa hermética",
      "image": "./assets/imagenes/caja_almacenamiento.webp",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    },
    {
      "title": "Reloj de pared",
      "price": 9,
      "description": "Reloj de pared decorativo con diseño moderno",
      "image": "./assets/imagenes/reloj_pared.webp",
      "category": 5,
      "creationAt": "2024-02-28T12:00:00.000Z",
      "updatedAt": "2024-02-28T12:00:00.000Z"
    } 
]);
  
