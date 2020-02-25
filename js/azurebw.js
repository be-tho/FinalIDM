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
		Color: "azul",
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
		Color: "azul",
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
		Color: "verde",
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
		Color: "verde",
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
		Color: "rojo",
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
		Color: "rojo",
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
		Color: "azul",
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
		Color: "verde",
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
		Color: "rojo",
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
vest,
dos,
contProd = 0,
acumProd = 0,
cantProd = 1,
band = 0;

$(function() {
	uno = $('#uno');
    contP = $('#Productos');
    var cont = 1;
    for(var i = 0; i < aProductos.length; i++){
        $('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div class="'+aProductos[i].Color+'"><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
        appendTo(contP);
	}
	//modal de los productos
    $('.prod').click(function(){
		ObtenerProducto($(this).attr('dataid'));
		$('.btn-agregar').click(function(){
			agregar($('.modalprod').attr('dataid'));
		});
	});
	//catergoria de productos
	$('.cat-btn li').click(function(){
		obtenerCategoria($(this).attr('focus'));
	});

	//efecto mouseover img
	$('.prod > img').mouseover(function(){
		var art = $(this);
		$('<img src="'+ $(this).attr('src') +'" alt="'+ $(this).attr('alt') +'" class="zoom" />').
		insertAfter(art);
		$(this).mouseout(function(){ $(this).next('img').remove() });
	});

	//generar el carrito

	//funciones
    function ObtenerProducto(elId) {
        for(var i = 0; i < aProductos.length; i++){ 
            if (aProductos[i].id == elId) {
                $('<div class = "modalprod" dataid = "' + aProductos[i].id + '"><a href="javascript:void(0)">X</a><div><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div><h3>'+ aProductos[i].Nombre +'</h3><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p><p>'+ aProductos[i].Descripción +'</p></div><button class="btn btn-danger btn-agregar">Agregar</button></div></div>').
                appendTo(uno).hide().fadeIn('slow').find('a').click( function () {
					$('.modalprod').fadeOut('slow', function() { $(this).remove()}
					);
                    return false;
				});
            }
		}
		window.onkeydown = function letras (e) {
			// Detección de tecla común:
			switch (e.keyCode) {
				// Escape:
				case 27:
					$('.modalprod').remove();
					break;
				}
		}
	}

	function obtenerCategoria(data){
		if( data == "remeras"){
			$('.prod').remove();

			var intervalito = setInterval(
				function () {
					$('<di+v class="col modalprod banner"><img src="imagenes/articulos/remeras/propaganda.jpg" class="img-fluid"></div>').appendTo(uno).hide().fadeIn('slow');
				},
				1000
			);
			setTimeout(diezsegundos, 10000);
			
			function diezsegundos() {
				clearInterval(intervalito);
				$('.banner').fadeOut('slow', function() { $(this).remove() });
			}

			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "remeras") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div class="'+ aProductos[i].Color +'"><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP).hide().fadeIn('slow');
				}
			}

			$('.prod').click(function(){
				ObtenerProducto($(this).attr('dataid'));
			});

		}else if(data == "tops"){
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "tops") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div class="'+ aProductos[i].Color +'"><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP).hide().fadeIn('slow');;
				}
			}
			$('.prod').click(function(){
				ObtenerProducto($(this).attr('dataid'));
			});
		}else if(data == "vestidos"){
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){ 
				if (aProductos[i].Categoria == "vestidos") {
					$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div class="'+ aProductos[i].Color +'"><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
					appendTo(contP).hide().fadeIn('slow');;
				}
			}
			$('.prod').click(function(){
				ObtenerProducto($(this).attr('dataid'));
			});
		}else{
			$('.prod').remove();
			for(var i = 0; i < aProductos.length; i++){
				$('<div class =  "col-md-3 prod" dataid = "' + aProductos[i].id + '"><img src="'+ aProductos[i].Imagen.src +'" alt="'+ aProductos[i].Imagen.alt +'"><div class="'+ aProductos[i].Color +'"><h3>'+ aProductos[i].Nombre +'</h3><div><p>Precio: <span>$'+ aProductos[i].Precio +'</span></p></div></div></div>').
				appendTo(contP).hide().fadeIn('slow');
			}
			$('.prod').click(function(){
				ObtenerProducto($(this).attr('dataid'));
			});
		}
	}

	//vaciar los li del ul y reiniciar los contador y acumuladores a 0
	$('.vaciar').click(function(){
		$('.detalle').empty();
		contador(3);
	});
	$('.enviar').click(function(){
		if($('.detalle').find('li').length){
			$('<div class="col modalprod"><div><form action="#" method="post" enctype="multipart/form-data"><div><label for="nombre">Nombre *</label><input type="text" id="nombre" name="nombre" required placeholder="Escriba su nombre aquí"/></div><div><label for="telefono">Telefono *</label><input type="number" id="telefono" name="telefono" ></div><div><label for="correo">Correo *</label><input type="email" id="correo" name="correo" required placeholder="q@q.com"/></div><div><label for="lugar" >Dirección</label><input type="text" if="lugar" name="lugar" required></div><div><label for="fecha">Fecha de Entrega</label><input type="date" id="fecha" name="fecha"	value="2020-02-25" min="2020-02-25" max="2020-03-25" required></div><div><label>Tarjeta</label><input type="number" name="tarjeta" placeholder="Numero de Tarjeta" required /><div></div><label>Cvv</label><input type="number" name="cvv" required /></div><div><input class="btn btn-primary" type="submit" value="enviar"><input class="btn btn-danger cancelar" value="cancelar"></div></form></div></div>').appendTo('#dos').
			find('.cancelar').click(function() { $('.modalprod').remove() });
		}else{
			$('.sinprod').remove();
			$('<p class="text-danger sinprod">Primero agregue un artículo gracias...</p>').insertBefore($('.vaciar'));
		}

		// Nombre:
		var nombre = d.querySelector('input[name=nombre]');
		var telefono = d.querySelector('input[name=telefono]');
		var lugar = d.querySelector('input[name=lugar]');
		var tarjeta= d.querySelector('input[name=tarjeta]');
		var cvv = d.querySelector('input[name=cvv]');

		// Genero mensaje personalizado en el onblur:
		nombre.onblur = function () {
			if (this.value.length < 3) {
				this.setCustomValidity('Debe tener 3 caracteres como mínimo');
			} else {
				this.setCustomValidity('');
			}
		}
		telefono.onblur = function(){
			if (this.value.length < 8) {
				this.setCustomValidity('Debe tener 8 caracteres como mínimo');
			} else {
				this.setCustomValidity('');
			}
		}
		lugar.onblur = function(){
			if (this.value.length < 3) {
				this.setCustomValidity('Debe tener 3 caracteres como mínimo');
			} else {
				this.setCustomValidity('');
			}
		}
		tarjeta.onblur = function(){
			if (this.value.length < 16) {
				this.setCustomValidity('Tarjeta invalida, minimo 16 numeros');
			} else {
				this.setCustomValidity('');
			}
		}
		cvv.onblur = function(){
			if (this.value.length != 3) {
				this.setCustomValidity('Cvv invalido, tiene que ser 3 numeros');
			} else {
				this.setCustomValidity('');
			}
		}
	});

	function agregar(elId){
		ul = $('.detalle');
		if(band == 0){
			$('.detalle > li').remove();
			band = 1;
		}
		for(var i = 0; i < aProductos.length; i++){ 
			if (aProductos[i].id == elId) {
				$('.sinprod').remove();
				var precioP = aProductos[i].Precio;

				
				var li = $('.detalle > li');
				_c(li.hasClass());

				// if(elId == )

				$('<li class="detalleLi col" id="'+ aProductos[i].id +'"><img src = "'+ aProductos[i].Imagen.src +'" alt = "'+ aProductos[i].Imagen.alt +'"><p>'+ aProductos[i].Nombre +'<span>$ '+ aProductos[i].Precio +'</span></p><p>cantidad <span> '+ cantProd +'</span></p><a href="javascript:void(0)">Quitar</a></li>').
				appendTo(ul).find('a').click( function () {$(this).parent().remove(); contador(2 , precioP); });

				contador(1 , precioP);
			}
		}
	}
	function contador(dato, precio){
		if(dato == 1){
			contProd ++;
			$('.detalleTotal li:first-child > span').text(contProd);

			acumProd = acumProd + precio;
			$('.detalleTotal li:last-child > span').text('$ ' + acumProd);

		}else if(dato == 2){
			contProd --;
			$('.detalleTotal li:first-child > span').text(contProd);

			acumProd = acumProd - precio;
			$('.detalleTotal li:last-child > span').text('$ ' + acumProd);

		}else if(dato == 3){
			$('.detalleTotal li:first-child > span').text('0');
			$('.detalleTotal li:last-child > span').text('$ 0');
		}
	}
});


