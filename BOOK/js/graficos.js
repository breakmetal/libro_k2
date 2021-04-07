/**
 * Created by breakmetal on 04/03/2015.
 */
function magGraficos(punto)
{
    $('#datos').empty();
    //$('#datos').append("<img id='img1' src='graficos/"+estacionMagdalena[punto]+"1.png' width='100%' height='100%' class='imgDatos'>");
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionMagdalena[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function negGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionNegro[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function suaGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionSuarez[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function sumGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionSumaPaz[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function bogGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionBogota[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function cdGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionCD[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function caGraficos(punto)
{
    $('#datos').empty();
    for(var k=1;k<=9;k++)
    {
        $('#datos').append("<img id='img"+k+"' src='graficos/"+estacionCA[punto]+k+".png' width='100%' height='100%' class='imgDatos' style='display: none' alt='informacion no disponible para este punto'>");
    }
}
function bGraficos()
{
    $('#graficos').empty();
    $('#menuImg').fadeOut('fast')
}

var chanceImg=1;

$('#goLeft').click(function()
{

    if(chanceImg<8)
    {
        $('#l'+chanceImg).fadeOut(500);
        alert(chanceImg)
        $('#l'+(chanceImg+1)).fadeIn(1000)
        alert(chanceImg+1)
        return chanceImg++;
    }
})
$('#goRight').click(function()
{

    if(chanceImg>1)
    {
        $('#l'+chanceImg).fadeOut(500);
        $('#l'+(chanceImg-1)).fadeIn(1000)
        return chanceImg--;
    }
})