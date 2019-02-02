


function get_checkbox_value(oCheckbox)
{
	
	 var resultado = 1;
    var checkbox_val = oCheckbox.value;
    if (oCheckbox.checked == true)
    {
        resultado = 1;
    }
    else
    {
        resultado = 0;
    }
    
return resultado;

}

function change_range(id) {
	console.log(id)
	var slider = document.getElementById("myRange_"+id);
	var output = document.getElementById("demo_"+id);
	output.innerHTML = slider.value;
	
	msg = {nombre:id, valor:slider.value}



msg_json = JSON.stringify(msg);

socket.emit('event', msg_json);
	
}

function change_checkbox(oCheckbox)

{
var id1 = oCheckbox.name.slice(-3);
var nombre_imagen = "image_"+id1;

if (get_checkbox_value(oCheckbox) == 1) {

msg = {nombre:oCheckbox.name, valor:1}
//changeImage(nombre_imagen)
	
//socket.emit('event', msg_json);
	
}else {
//change_Image(nombre_imagen)


msg = {nombre:oCheckbox.name, valor:0}

}

msg_json = JSON.stringify(msg);

socket.emit('event', msg_json);


}


function change_Image(id,value) {
	

	//alert(nombre.src)
  var image = document.getElementById('image_'+id);
  
  if(value == 0)
  {
    image.src = "pic_bulboff.gif";
  }else {
      image.src = "pic_bulbon.gif";
  
  }
}


function do_on_reception(id,value) {
	

	
if (id.slice(0,1) == 'C') {	

change_Image(id,value)	
	
}



}

