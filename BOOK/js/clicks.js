/**
 * Created by breakmetal on 11/03/2015.
 */
function clickMag(entero)
{
    mag[entero].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=8;i++)
    {
        mag[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
}
function  clickNeg(entero)
{
    neg[entero].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=31;i++)
    {
        neg[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
}
function clickSua(punto)
{
    sua[punto].animate({fill:"#000000",transform: 's5r360'},1000,mina.bounce())
    for(var i=1;i<=81;i++)
    {
        sua[i].attr({fill:"#ffffff",transform: '-s5r-360'});
    }
}