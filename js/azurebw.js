var aProductos = [
	{
		id: 1,
		Nombre: 'Remera Bebecita',
		Precio: 999,
		Categoria: "remeras" ,
		'Descripción': 'Remera manga corta de jersey. Cuello redondo aplicado. Largo arriba de la cintura. Ruedo al corte. Estampa centrada en frente.',
		Imagen: {
			src: 'imagenes/articulos/remeras/1.jpg',
			alt: 'Remera Naranja "Bebecita"',
		},
		Colores: [
			'negro',
			'rojo',
			'crema',
		],
	},
	{
		id: 2,
		Nombre: 'Remera One Way',
		Precio: 799,
		Categoria: "remeras" ,
		'Descripción': 'Remera básica manga corta cuello redondo de pro modal. collareta aplicada en cuello a tono de la base. Ruedo al corte. Largo a la cintura. Estampa centrada en frente.',
		Imagen: {
			src: 'imagenes/articulos/remeras/2.jpg',
			alt: 'Remera con estampa de coches',
		},
		Colores: [
			'negro',
			'rojo',
			'azul',
		],
	},
	{
		id: 3,
		Nombre: 'Top Zhavia',
		Precio: 799,
		Categoria: "tops" ,
		'Descripción': 'Top tipo viso en satén con tanca y elástico para fruncir en ruedo.',
		Imagen: {
			src: 'imagenes/articulos/tops/1.jpg',
			alt: 'Top azul',
		},
		Colores: [
			'negro',
			'rojo',
			'azul',
		],
	},
	{
		id: 4,
		Nombre: 'Top Murray',
		Precio: 1199,
		Categoria: "tops" ,
		'Descripción': 'Top básico de supplex. Breteles de elástico al tono de la prenda. Largo a la cintura. Grifa institucional en ruedo izquierdo.',
		Imagen: {
			src: 'imagenes/articulos/tops/2.jpg',
			alt: 'top básica',
		},
		Colores: [
			'negro',
			'rojo',
			'crema',
		],
	},
	{
		id: 5,
		Nombre: 'Vestido Wishes',
		Precio: 6999,
		Categoria: "vestidos" ,
		'Descripción': 'Vestido largo cruzado con escote en v profundo en frente y espalda, con lazos para anudar en hombros sobre el bretel.',
		Imagen: {
			src: 'imagenes/articulos/vestidos/1.jpg',
			alt: 'Vestido beige',
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
		Nombre: 'Vestido Highlight',
		Precio: 4399,
		Categoria: "vestidos" ,
		'Descripción': 'Vestido largo al cuerpo, tipo tubo. De creppe con spandex. Con tajo delantero y escote recto con breteles anchos.',
		Imagen: {
			src: 'imagenes/articulos/vestidos/2.jpg',
			alt: 'Vestido elegante negro',
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
		id: 7,
		Nombre: 'Remera Euphoria',
		Precio: 799,
		Categoria: "remeras" ,
		'Descripción': 'Remera manga corta cuello redondo de jersey. Ruedo al corte. Cuello con collareta al tono. Estampa centrada en frente.',
		Imagen: {
			src: 'imagenes/articulos/remeras/3.jpg',
			alt: 'Remera azul',
		},
		Colores: [
			'negro',
			'rojo',
			'azul',
		],
	},
	{
		id: 8,
		Nombre: 'Top Kuwait',
		Precio: 1899,
		Categoria: "tops" ,
		'Descripción': 'Top de lino escote v profundo con entredós en recorte de hombrera y en escote. Ruedo fruncido con tanca y elástico flúor para ajustar y sujetar.',
		Imagen: {
			src: 'imagenes/articulos/tops/3.jpg',
			alt: 'Top color petroleo',
		},
		Colores: [
			'negro',
			'crema',
			'rojo',
		],
	},
	{
		id: 9,
		Nombre: 'Vestido All Stripes',
		Precio: 1499,
		Categoria: "vestidos" ,
		'Descripción': 'Vestido básico de morley rayado. Escote cerrado con sisas cavadas. Molderia acampanada. Largo arriba de la rodilla. Grifa institucional en ruedo izquierdo.',
		Imagen: {
			src: 'imagenes/articulos/vestidos/3.jpg',
			alt: 'Vestido rayado blanco y negro de morley',
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
var btn,
contP,
uno,
rem,
top,
vest;

$(function() {
	uno = $('#uno');
    contP = $('#Productos');
    var cont = 1;
    for(var i = 0; i < aProductos.length; i++){
        $('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
        appendTo(contP);
	}
    $('.prod').click(function(){
		ObtenerProducto($(this).attr('dataid'));
	});

	$('.cat-btn li').click(function(){
		if($(this).attr('focus') == "remeras"){
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "remeras") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP);
				}
			}
		}else if($(this).attr('focus') == "tops"){
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "tops") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP);
				}
			}
		}else if($(this).attr('focus') == "vestidos"){
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "vestidos") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP);
				}
			}
		}else{
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){
				$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
				appendTo(contP);
			}
		}
	});

	$('.prod img').mouseover(function(){
		var art = $(this);
		$('<img src="'+ $(this).attr('src') +'" alt="'+ $(this).attr('alt') +'" class="zoom" />').
		insertAfter(art);
		$(this).mouseout(function(){ $(this).next('img').remove() });
	});
    function ObtenerProducto(elId) {
        for(var i = 0; i < aProductos.length; i++){ 
            
            if (aProductos[i].id == elId) {
                $('<div class = "modalprod"><a href="javascript:void(0)">X</a><div><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p><p>'+ aProductos[i].Descripción +'</p></div><button class="btn btn-danger btnAgregar">Agregar</button></div></div>').
                appendTo(uno).hide().fadeIn('slow').find('a').click( function () {
                    $('.modalprod').fadeOut('slow', function() { $(this).remove() });
                    return false;
				});
            }
        }
	}
});


