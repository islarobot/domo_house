


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


function change_checkbox(oCheckbox)

{
var id1 = oCheckbox.name.slice(-2);
var nombre_imagen = "image"+id1;

if (get_checkbox_value(oCheckbox) == 1) {

msg = {nombre:oCheckbox.name, valor:1}
//changeImage(nombre_imagen)
	
//socket.emit('event', msg_json);
	
}else {
changeImage(nombre_imagen)


msg = {nombre:oCheckbox.name, valor:0}

}

msg_json = JSON.stringify(msg);

socket.emit('event', msg);


}


function changeImage(t) {
	
	var nombre = t;
	alert(nombre.src)
  //var image = document.getElementById(t.id);
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}




