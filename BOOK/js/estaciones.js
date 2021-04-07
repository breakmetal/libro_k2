/**
 * Created by breakmetal on 03/03/2015.
 */
var  anterior;
function regMag()
{
    for(var j=1;j<=3;j++)
    {
        $('#estMag').append("<p id='EstMag"+j+"' class='puntos1'>"+estacionMagdalena[j]+"</p>")
    }
    for(j=1;j<=25;j++)
    {
        $('#estNeg').append("<p id='EstNeg"+j+"' class='puntos1'>"+estacionNegro[j]+"</p>")
    }
    for(j=1;j<=65;j++)
    {
        $('#estSua').append("<p id='EstSua"+j+"' class='puntos1'>"+estacionSuarez[j]+"</p>")
    }
    for(j=1;j<=26;j++)
    {
        $('#estSum').append("<p id='EstSum"+j+"' class='puntos1'>"+estacionSumaPaz[j]+"</p>")
    }
    for(j=1;j<=155;j++)
    {
        $('#estBog').append("<p id='EstBog"+j+"' class='puntos1'>"+estacionBogota[j]+"</p>")
    }
    for(var j=1;j<=4;j++)
    {
        $('#estCD').append("<p id='EstCLD"+j+"' class='puntos1'>"+estacionCD[j]+"</p>")
    }
    for(var j=1;j<=2;j++)
    {
        $('#estCA').append("<p id='EstCLA"+j+"' class='puntos1'>"+estacionCA[j]+"</p>")
    }
}
regMag();
function cargarEstaciones(parametro)
{
    switch (parametro)
    {
        case 1:
            $('#estMag').fadeIn(3000);
            break;
        case 2:
            $('#estNeg').fadeIn(3000);
        default :
            break;
    }
    $('#menuImg').fadeIn('fast')
}
//puntos
$('#mapa').on('pMag',function(event,punto)
{
    mag[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())

    for(var i=1;i<=3;i++)
    {
        mag[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pNeg',function(event,punto)
{
    neg[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=25;i++)
    {
        neg[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pSua',function(event,punto)
{
    sua[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=65;i++)
    {
        sua[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pSum',function(event,punto)
{
    sum[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=26;i++)
    {
        sum[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pBog',function(event,punto)
{
    bog[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=155;i++)
    {
        bog[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pCLD',function(event,punto)
{
    cLD[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=4;i++)
    {
        cLD[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})
$('#mapa').on('pCDA',function(event,punto)
{
    cDA[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=2;i++)
    {
        cDA[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
})

$('#estMag').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pMag',position);
    for(var j=1;j<=3;j++)
    {
        $('#EstMag'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstMag'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    magGraficos(position)

});
$('#estSua').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pSua',position);
    for(var j=1;j<=65;j++)
    {
        $('#EstSua'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstSua'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    suaGraficos(position)
});
$('#estNeg').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pNeg',position);
    for(var j=1;j<=25;j++)
    {
        $('#EstNeg'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstNeg'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    negGraficos(position)

});
$('#estSum').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    for(var j=1;j<=26;j++)
    {
        $('#EstSum'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstSum'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    $('#mapa').trigger('pSum',position);
    sumGraficos(position);
    });
$('#estBog').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pBog',position);
    for(var j=1;j<=155;j++)
    {
        $('#EstBog'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstBog'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    bogGraficos(position)
});
$('#estCD').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pCLD',position);
    for(var j=1;j<=4;j++)
    {
        $('#EstCLD'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstCLD'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    cdGraficos(position)
});
$('#estCA').delegate( '.puntos1', 'click', function(){
    p=$(this).attr('id');
    position=p.slice(6);
    $('#mapa').trigger('pCDA',position);
    for(var j=1;j<=2;j++)
    {
        $('#EstCDA'+j).css({'color':'#ffffff','background-color':'#223D4E}'})
    }
    $('#EstCDA'+position).css({'color':'#000000','background-color':'#ffffff','border-radius':'5px'})
    caGraficos(position)

});