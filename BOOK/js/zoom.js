/**
 * Created by breakmetal on 08/07/2014.
 */
$('#menuZ').width(ancho*0.18);
$('#menuZ').height(alto*0.08);
$('#mostrarZoom').width(ancho*.8);
$('#mostrarZoom').height(alto *1.5);
$('#porcentaje').width(ancho*0.16);
imgW=$('#mostrarZoom').width();
imgH=$('#mostrarZoom').height();
var valorAnterior;
$('.paginas img').dblclick(function()
{
    $("#zoom").trigger('click');
    //menuZ se deja arrastrar
    $('#menuZ').draggable();
    comprobar=$(this).attr('name');
    $('#mostrarZoom').html("<img src='paginas/"+comprobar+".png' width='100%' height='95%'>");
    $('#porcentaje').val(0);
});
//aumenta el zoom
$('#porcentaje').change(function()
{
    comprobar=$(this).val();
    $('#mostrarZoom img').width(imgW+imgW*comprobar);
    $('#mostrarZoom img').height(imgH+imgH*comprobar);
});
