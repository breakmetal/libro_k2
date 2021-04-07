/**
 * Created by breakmetal on 4/07/14.
 */
var ancho=window.innerWidth;
var alto=window.innerHeight;
var contenedor = document.getElementById("viewT");
var count=1;
for(var l=0; l<21;l++)
{
    var columna = document.createElement("tr");
    columna.className="columnas";
    contenedor.appendChild(columna);
    for(var i=0;i<6;i++)
    {
        //columna.id=count;
        columna.innerHTML +="<td><img src='paginas/"+count+".png' id=page"+count+" class='seleccionaPagina'></a>"
        count++;
    }
}
$('.columnas td img').width(ancho*.06);
$('.columnas td img').height(alto *.15);
$('#return').width(ancho*.96);
$('#return').height(alto *.05);

$('.seleccionaPagina').click(function(){
    comprobar=$(this).attr('id');
    comprobar=comprobar.substring(4);
    $('#pp').trigger('click');
    $('#mybook').booklet("gotopage",comprobar);
    if(comprobar%2==0)
    {
        $('#selP').val(comprobar+'-'+(comprobar+1)+'/32');

    }else
    {
        $('#selP').val((comprobar-1)+'-'+(comprobar)+'/32');
    }



});