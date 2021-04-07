/**
 * Created by breakmetal on 03/03/2015.
 */
$('#mapa').on('retornarM',function()
{
    if (bandera === 1)
    {

        grupo.animate({transform: 's1,300,100' }, 2000, mina.easeinout())
        negro.animate({opacity: '1'}, 1000, mina.easeinout())
        suarez.animate({opacity: '1'}, 1000, mina.easeinout())
        sumapaz.animate({opacity: '1'}, 1000, mina.easeinout())
        bogota.animate({opacity: '1'}, 1000, mina.easeinout())
        cDerecha.animate({opacity: '1'}, 1000, mina.easeinout());
        cArriba.animate({opacity: '1'}, 1000, mina.easeinout())
        isla1.animate({opacity: '1'}, 1000, mina.easeinout())
        isla2.animate({opacity: '1'}, 1000, mina.easeinout())
        isla3.animate({opacity: '1'}, 1000, mina.easeinout())
        isla4.animate({opacity: '1'}, 1000, mina.easeinout())
        for (i1 = 1; i1 <= 3; i1++) {
            mag[i1].attr({opacity: "0"})
        }

    } else if (bandera === 2) {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,700,-100' }, 2000, mina.easeinout())
        negro.animate({opacity: '1'}, 1000, mina.easeinout())
        suarez.animate({opacity: '1'}, 1000, mina.easeinout())
        sumapaz.animate({opacity: '1'}, 1000, mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        bogota.animate({opacity: '1'}, 1000, mina.easeinout())
        cDerecha.animate({opacity: '1'}, 1000, mina.easeinout());
        cArriba.animate({opacity: '1'}, 1000, mina.easeinout())
        isla1.animate({opacity: '1'}, 1000, mina.easeinout())
        isla2.animate({opacity: '1'}, 1000, mina.easeinout())
        isla3.animate({opacity: '1'}, 1000, mina.easeinout())
        isla4.animate({opacity: '1'}, 1000, mina.easeinout())
        for (i2 = 1; i2 <= 25; i2++)
        {
            neg[i2].attr({opacity: "0"})
        }

    }
    else if (bandera === 3)
    {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,1300,-50' },2000,mina.easeinout())
        negro.animate({opacity:'1'},1000,mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        suarez.animate({opacity:'1'},1000,mina.easeinout())
        sumapaz.animate({opacity:'1'},1000,mina.easeinout())
        bogota.animate({opacity:'1'},1000,mina.easeinout())
        cDerecha.animate({opacity:'1'},1000,mina.easeinout());
        cArriba.animate({opacity:'1'},1000,mina.easeinout())
        isla1.animate({opacity:'1'},1000,mina.easeinout())
        isla2.animate({opacity:'1'},1000,mina.easeinout())
        isla3.animate({opacity:'1'},1000,mina.easeinout())
        isla4.animate({opacity:'1'},1000,mina.easeinout())
        for(i3=1;i3<=65;i3++)
        {
            sua[i3].attr({opacity:"0"})
        }

    }
    else if (bandera === 4)
    {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,650,750' },2000,mina.easeinout())
        negro.animate({opacity:'1'},1000,mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        suarez.animate({opacity:'1'},1000,mina.easeinout())
        sumapaz.animate({opacity:'1'},1000,mina.easeinout())
        bogota.animate({opacity:'1'},1000,mina.easeinout())
        cDerecha.animate({opacity:'1'},1000,mina.easeinout());
        cArriba.animate({opacity:'1'},1000,mina.easeinout())
        isla1.animate({opacity:'1'},1000,mina.easeinout())
        isla2.animate({opacity:'1'},1000,mina.easeinout())
        isla3.animate({opacity:'1'},1000,mina.easeinout())
        isla4.animate({opacity:'1'},1000,mina.easeinout())
        for(var i5=1;i5<=26;i5++)
        {
            sum[i5].attr({opacity:"0"})
        }

    }
    else if (bandera === 5)
    {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,900,350' },2000,mina.easeinout())
        negro.animate({opacity:'1'},1000,mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        suarez.animate({opacity:'1'},1000,mina.easeinout())
        sumapaz.animate({opacity:'1'},1000,mina.easeinout())
        bogota.animate({opacity:'1'},1000,mina.easeinout())
        cDerecha.animate({opacity:'1'},1000,mina.easeinout());
        cArriba.animate({opacity:'1'},1000,mina.easeinout())
        isla1.animate({opacity:'1'},1000,mina.easeinout())
        isla2.animate({opacity:'1'},1000,mina.easeinout())
        isla3.animate({opacity:'1'},1000,mina.easeinout())
        isla4.animate({opacity:'1'},1000,mina.easeinout())
        for(var i4=1;i4<=155;i4++)
        {
            bog[i4].attr({opacity:"0"})
        }

    }
    else if (bandera === 6)
    {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,1300,200' },2000,mina.easeinout())
        negro.animate({opacity:'1'},1000,mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        suarez.animate({opacity:'1'},1000,mina.easeinout())
        sumapaz.animate({opacity:'1'},1000,mina.easeinout())
        bogota.animate({opacity:'1'},1000,mina.easeinout())
        cDerecha.animate({opacity:'1'},1000,mina.easeinout());
        cArriba.animate({opacity:'1'},1000,mina.easeinout())
        isla1.animate({opacity:'1'},1000,mina.easeinout())
        isla2.animate({opacity:'1'},1000,mina.easeinout())
        isla3.animate({opacity:'1'},1000,mina.easeinout())
        isla4.animate({opacity:'1'},1000,mina.easeinout())
        for(var i7=1;i7<=4;i7++)
        {
            cLD[i7].attr({opacity:"0"})
        }


    }
    else if (bandera === 7)
    {
        negroT.animate({opacity:'1'},1000,mina.easeinout())
        bogotaT.animate({opacity:'1'},1000,mina.easeinout())
        ubateT.animate({opacity:'1'},1000,mina.easeinout())
        sumapazT.animate({opacity:'1'},1000,mina.easeinout())
        machetaT.animate({opacity:'1'},1000,mina.easeinout())
        grupo.animate({transform: 's1,920,100' },2000,mina.easeinout())
        negro.animate({opacity:'1'},1000,mina.easeinout())
        magdalena.animate({opacity: '0'}, 1000, mina.easeinout())
        suarez.animate({opacity:'1'},1000,mina.easeinout())
        sumapaz.animate({opacity:'1'},1000,mina.easeinout())
        bogota.animate({opacity:'1'},1000,mina.easeinout())
        cDerecha.animate({opacity:'1'},1000,mina.easeinout());
        cArriba.animate({opacity:'1'},1000,mina.easeinout())
        isla1.animate({opacity:'1'},1000,mina.easeinout())
        isla2.animate({opacity:'1'},1000,mina.easeinout())
        isla3.animate({opacity:'1'},1000,mina.easeinout())
        isla4.animate({opacity:'1'},1000,mina.easeinout())
        for(var i6=1;i6<=2;i6++)
        {
            cDA[i6].attr({opacity:"0"})
        }
    }
});

$('#volver').click(function()
{
    $('#vL').fadeIn(1000)
    $('#mapa').trigger('retornarM');
    $('#tecacho').fadeOut(3000)
    $(".vEst").fadeOut(1500)
    $('#graficos').toggle('slide',{direction:'right'},1000)
    //$('#graficos').fadeOut(2000)
})
$('#titulo').height(alto *.035)
$('#titulo').width(ancho)
$('#pie').height(alto*.038)
$('#pie').width(ancho)
$('.vEst').height(alto *.7)
$('#pie').css({'top':(alto*0.963)+'px'})
$('#tecacho').css({'top':(alto*.85)+'px'})
$('#fondo').width(ancho)
$('#fondo').height(alto)
$('.vEst').css({'top':(alto *.15)+'px'})
$('#cuencas').width(ancho *.15)
$('#cuencas').height(ancho *.15)
$('#cuencas').css({'top':(alto *.3)+'px'})
$('.clima').width(ancho *.07);
$('.clima').height(alto *.07);
$('#graficos').css({'top':alto *.1})
$('.imgC').width(ancho*.2)
$('.imgC').height(alto*.2)
$('#datos').css({'top':alto *.25})
$('#datos').height(alto*0.5)
$('.imgDatos').height(alto *.5)
$('.infC').height(ancho *.07)
$('.infC').width(alto *.07)
$('#volverLibro').css({'top':alto *.85})
$('#vL').width(ancho *.07)
$('#vL').height(alto *.07)
$('#pieF').height(alto *.09)
$('#pieF').css({'top':(alto *.91)+'px'})
$('#pf2').height(alto*.05)
$('#pf1').height(alto *.06)
/*
 body
 {
 margin: 0px;
 overflow: hidden;
 }
 */