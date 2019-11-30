var aProductos = [
	{
		id: 1,
		Nombre: 'Short Pollera',
		Precio: 370,
		'Descripción': 'Short pollera con hebilla, con una hermosa tela de bengalina.',
		Imagen: {
			src: 'imagenes/articulos/1.jpg',
			alt: 'Short Pollera negra',
		},
		Colores: [
			'negro',
			'rojo',
			'crema',
		],
	},
	{
		id: 2,
		Nombre: 'Pollera con cierre',
		Precio: 300,
		'Descripción': 'Pollera con cierre negro, de crep punto con el mejor calze del mercado.',
		Imagen: {
			src: 'imagenes/articulos/2.jpg',
			alt: 'Pollera con cierre',
		},
		Colores: [
			'negro',
			'rojo',
			'azul',
		],
	},
	{
		id: 3,
		Nombre: 'Remera basica guess',
		Precio: 200,
		'Descripción': 'Remera basica de la mejor calidad de modal viscoza con estampado guess.',
		Imagen: {
			src: 'imagenes/articulos/3.jpg',
			alt: 'Remera guess',
		},
		Colores: [
			'negro',
			'rojo',
			'azul',
		],
	},
	{
		id: 4,
		Nombre: 'Top un hombro',
		Precio: 220,
		'Descripción': 'Top un hombro crep',
		Imagen: {
			src: 'imagenes/articulos/4.jpg',
			alt: 'top hombro',
		},
		Colores: [
			'negro',
			'rojo',
			'crema',
		],
	},
	{
		id: 5,
		Nombre: 'Body',
		Precio: 350,
		'Descripción': 'Body con hebilla de crep',
		Imagen: {
			src: 'imagenes/articulos/5.jpg',
			alt: 'body con hebilla',
		},
		Colores: [
			'negro',
			'rojo',
			'verde',
			'blanco',
		],
	},
	{
		id: 6,
		Nombre: 'Remera basica',
		Precio: 180,
		'Descripción': 'Remera basica con estampa vibe.',
		Imagen: {
			src: 'imagenes/articulos/6.jpg',
			alt: 'Remera basica blanca',
		},
		Colores: [
			'negro',
			'crema',
			'rojo',
			'verde',
			'amarillo',
		],
	},
	{
		id: 6,
		Nombre: 'Vestido White',
		Precio: 1200,
		'Descripción': 'Vestido elegante con tasas echo de la mejor tela "razo" con tull',
		Imagen: {
			src: 'imagenes/articulos/7.jpg',
			alt: 'Vestido blanco',
		},
		Colores: [
			'negro',
			'crema',
			'rojo',
		],
	},
];
var _c = console.log,
d = document,
qS = 'querySelector',
qSa = 'querySelectorAll',
cE = 'createElement';
let btn;
let contP;
let uno;

$(function() {
    contP = $('#Productos');
    let cont = 1;
    for(var i = 0; i < aProductos.length; i++){
        $('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>'+ aProductos[i].Precio +'</span></p></div></div></div>').
        appendTo(contP);
    }
    $('.prod').click(function(){
        ObtenerProducto($(this).attr('dataid'));
    })

    function ObtenerProducto(elId) {
        for(var i = 0; i < aProductos.length; i++){ 
            uno = $('#uno');
            if (aProductos[i].id == elId) {
                $('<div class = "modalprod"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>'+ aProductos[i].Precio +'</span></p><button class="btn btn-danger btnAgregar">Agregar</button></div></div></div>').
                appendTo(uno).hide().fadeIn('fast');
            }
        }
    }
});


