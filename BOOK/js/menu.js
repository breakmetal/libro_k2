/**
 * Created by breakmetal on 20/06/14.
 */
var ancho=window.innerWidth;
var alto=window.innerHeight;
$('#selP').height(alto*0.015);
$('.m').width(ancho *.013);
$('.m').height(alto *.021);
$('.mR').width(ancho *.013);
$('.mR').height(alto *.021);
var comprobar;
//////////////////////
//buscar por  pagina//
//////////////////////
//carga las vistas
$(function() {
    $( "#tabs" ).tabs();
});
//escribe numero hacer focus
$('#selP').focus(function()
{
    comprobar=$(this).val();
    $(this).val("");
    return comprobar
});
//quitar focus
$('#selP').blur(function(){
    if(!validar(comprobar))
    {
        $(this).val(comprobar);
    }
});
$('#selP').keyup(function(e)
{
    if(e.which==13 && validar($(this).val())){
        comprobar=$(this).val();
        $('#mybook').booklet("gotopage",comprobar);
        if(comprobar%2==0){
            comprobar++;
            comprobar--;
            $(this).val(comprobar+'-'+(comprobar+1)+'/646');
        }else if(comprobar==1)
        {
            $(this).val('1/648');
        }
        else
        {
            comprobar--;
            $(this).val(comprobar+'-'+(comprobar+1)+'/646');
        }
    }
})
//izquierda
$('#leftT').click(function(){
    comprobar=$('#selP').val();
    comprobar=comprobar.substring(comprobar.indexOf('-'),0);
    if(comprobar!=1)
    {
        comprobar=comprobar-1;
        $('#mybook').booklet("gotopage", comprobar);
    }
});
//derecha
$('#rightT').click(function(){
    comprobar=$('#selP').val();
    var h=comprobar.indexOf('-');
    if(h!=-1)
    {
        comprobar=comprobar.substring(h,0);
        comprobar++;
        comprobar--;
        comprobar=comprobar+2;
        $('#mybook').booklet("gotopage",comprobar);

    }else
    {
        comprobar=comprobar.substring(comprobar.indexOf('/'),0);
        comprobar++;
        $('#mybook').booklet("gotopage",comprobar );
    }
});

//desvanese el menu
$( "#tabs #menu1 a img").click(function(){
    $( "#tabs" ).tabs({ hide: { effect: "fade", duration: 400 }},{show:{effect:"fade",duration:400}});
    $(".m").fadeOut("slow");
    $(".mR").fadeOut("slow");
    $("#selP").fadeOut("slow");
    $('#return').fadeIn('slow');
});
//retorna al menu
$( "#tabs #menu1 div a").click(function(){
    $( "#tabs" ).tabs({ hide: { effect: "fade", duration: 400 }},{show:{effect:"fade",duration:400}});
    $(".m").fadeIn("slow");
    $(".mR").fadeIn("slow");
    $("#selP").fadeIn("slow");
    $('#return').fadeOut('slow');
});
//validar expresiones regulares
function validar(valor)
{
    var numeros = /^[0-9]+$/;
    if(numeros.test(valor))
    {
        return true;
    }else
    {
        return false;
    }
}