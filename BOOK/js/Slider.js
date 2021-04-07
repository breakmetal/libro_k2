var ancho=window.innerWidth;
var alto=window.innerHeight;
$('#slider img').width(ancho *.14);
$('#slider img').height(alto *.35);
var ancho1=ancho *.14;
var alto1=alto *.35;
var ancho2=ancho *.15;
var alto2=alto *.4;
$('#slider img').hover
(
    function()
    {
        $(this).animate({height:alto2+'px',width:ancho2+'px'});
    },function()
    {
        $(this).animate({height:alto1+'px',width:ancho1})
    }
);
//ver mas
var j=0;
var k=0;
$('#sliderR').click(function()
    {
        if(j==0)
        {
            j=1;
            $('#'+j+'t').fadeOut('fast');
            k=j+5 ;
            $('#'+k+'t').delay('fast').fadeIn('fast');
            return j++;
        }
        else if(j<8)
        {
            $('#'+j+'t').fadeOut('fast');
            k=j+5;
            $('#'+k+'t').delay('fast').fadeIn('fast');
            return j++;

        }

    }
);
$('#sliderL').click(function()
    {
        if(j>0)
        {
            $('#'+j+'t').delay('fast').fadeIn('fast');
            k=j+5;
            $('#'+k+'t').fadeOut('fast');
            return j--;
        }


    }
);
$('.chapter').click(function(){

    $('#pp').trigger('click');
    c=$(this).attr('id');
    switch(c)
    {
        case '1t':
            $('#mybook').booklet("gotopage",0);
            break;
        case '2t':
            $('#mybook').booklet("gotopage",182);
            break;
        case '3t':
            $('#mybook').booklet("gotopage",300);
            break;
        case '4t':
            $('#mybook').booklet("gotopage", 336);

            break;
        case '5t':
            $('#mybook').booklet("gotopage", 356);

            break;
        case '6t':
            $('#mybook').booklet("gotopage", 376);

            break;
        case '7t':
            $('#mybook').booklet("gotopage", 394);

            break;
        case '8t':
            $('#mybook').booklet("gotopage", 418);

            break;
        case '9t':
            $('#mybook').booklet("gotopage", 430);

            break;
        case '10t':
            $('#mybook').booklet("gotopage", 452);

            break;
        case '11t':
            $('#mybook').booklet("gotopage", 466);

            break;
        case '12t':
            $('#mybook').booklet("gotopage", 634);

            break;
        default :
            break;
    }
});