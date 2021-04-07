/**
 * Created by breakmetal on 08/03/2015.
 */
//$('#cM').height(alto)
var mg2;
$('#qZ').css({'top':(alto*0.85)+'px'})
$('.clima').click(function()
{
    var mg=$(this).attr('id')
    mg2=mg.slice(1);
    mostrarGraficos(mg2)
    $('#graficos').fadeOut('fast')
    $('#qZ').fadeIn('fast')
    $('#hola').fadeIn('fast')
    $('#hola').height(alto*0.5)
    $('#hola').css({'top':(alto *.15)+'px'})
    $('#mapa').animate(
        {
            width:(ancho*0.6)+'px',
            height:(alto *.7)+'px',
            left:ancho*0.08+'px',
            top:alto*0.1,
            opacity:'0.8'
        },1000)
    limpiarR(bandera);
    $('#volver').fadeOut(1000)
    rotate();
})
var degree=0;
degree1=0;
var timer=0;
function rotate ()
{

   if(degree<30)
   {
       setTimeout ( function ()
       {
           $('#mapa').css ({  WebkitTransform :  'rotateY('  + degree +  'deg)' });
           $('#mapa').css ({  '-moz-transform' :  'rotateY('  + degree +  'deg)' });
           degree++;
           rotate ();
       }, 50 );
   }
   else
   {
   }
}
$('#volverMapa').click(function()
{
    $('#img'+mg2).fadeOut(1000)
    $('#mapa').animate(
        {
            width:ancho *.95+'px',
            height:alto *.98+'px',
            left:'0px',
            top:'0px',
            opacity:'1'
        },1500)
    limpiarRR(bandera)
    volverMapa()
    $('#volver').fadeIn(1000)
})
function volverMapa()
{
    $('#qZ').fadeOut('fast')
    $('#graficos').fadeIn(3000)
    if(degree>=0)
    {
        setTimeout ( function ()
        {
            $('#mapa').css ({  WebkitTransform :  'rotateY('  + degree +  'deg)' });
            $('#mapa').css ({  '-moz-transform' :  'rotateY('  + degree +  'deg)' });
            degree--;
            volverMapa();
        }, 50 );
    }
    else
    {
        degree=0;
    }
}
function limpiarR(bandera)
{
    switch (bandera)
    {
        case 1:
            $('#estMag').fadeOut(2000);
            break;
        case 2:
            $('#estNeg').fadeOut(2000);
            break;
        case 3:
            $('#estSua').fadeOut(2000);
            break;
        case 4:
            $('#estSum').fadeOut(2000);
            break;
        case 5:
            $('#estBog').fadeOut(2000);
            break;
        case 6:
            $('#estCD').fadeOut(2000)
            break;
        case 7:
            $('#estCA').fadeOut(2000)
            break;
        default :
            break;
    }
}
function limpiarRR(bandera)
{
    switch (bandera)
    {
        case 1:
            $('#estMag').fadeIn(2000);
            break;
        case 2:
            $('#estNeg').fadeIn(2000);
            break;
        case 3:
            $('#estSua').fadeIn(2000);
            break;
        case 4:
            $('#estSum').fadeIn(2000);
            break;
        case 5:
            $('#estBog').fadeIn(2000);
            break;
        case 6:
            $('#estCD').fadeIn(2000)
            break;
        case 7:
            $('#estCA').fadeIn(2000)
            break;
        default :
            break;
    }
}
function mostrarGraficos(clima)
{
    if(clima==1)
    {
        $('#img1').fadeIn(2000)
    }
    else if(clima==2)
    {
        $('#img2').fadeIn(2000)
    }
    else if(clima==3)
    {
        $('#img3').fadeIn(2000)
    }
    else if(clima==4)
    {
        $('#img4').fadeIn(2000)
    }
    else if(clima==5)
    {
        $('#img5').fadeIn(2000)
    }
    else if(clima==6)
    {
        $('#img6').fadeIn(2000)
    }
    else if(clima==7)
    {
        $('#img7').fadeIn(2000)
    }
    else if(clima==8)
    {
        $('#img8').fadeIn(2000)
    }
    else if(clima==9)
    {
        $('#img9').fadeIn(2000)
    }
}
