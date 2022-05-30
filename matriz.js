var matriz=[[1,"Intel I7", 450000,"Procesador de 8va generacion",10]];

function mostrarProducto(){
	var largo=matriz.length;
	
	for(var x=0; x<largo;x++){
		alert("ID: "+matriz[x][0]+"\n"+
			"Nombre: "+matriz[x][1]+"\n"+
			"Precio: "+matriz[x][2]+"\n"+
			"Descripcion: "+matriz[x][3]+"\n"+
			"Stock: "+matriz[x][4]
			
			
			);

	}
}

function insertarProducto(){
	var id=document.getElementById("id").value;
	var nombre=document.getElementById("nombre").value;
	var precio=document.getElementById("precio").value;
	var descripcion=document.getElementById("descripcion").value;
	var stock=document.getElementById("stock").value;
	var largo=matriz.length;
	var existe=false;
    for(var x=0; x<largo;x++){
        if(matriz[x][0]==id){
        existe=true;
		}
    }
	if(!existe){
		matriz.push([id,nombre,precio,descripcion,stock]);
		alert("Producto insertado");
		document.getElementById("id").value="";
		document.getElementById("nombre").value="";
		document.getElementById("precio").value="";
		document.getElementById("descripcion").value="";
		document.getElementById("stock").value="";
	}
	else {
		alert("Error: Producto existente");
	}
}