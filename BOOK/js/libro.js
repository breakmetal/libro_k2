      $('#mybook').booklet(
        {
            width: window.innerWidth - (window.innerWidth * .07),
            height: window.innerHeight - (window.innerHeight *.15),
            closed: true,
            menu: '#custom-menu',
            covers: true,
            pagePadding: 0,
            pageNumbers: false,
            change: function(event, data) {
                if(data.index!=0)
                {
                    $('#selP').val(data.index+'-'+(data.index+1)+'/646');
                }else
                {
                    $('#selP').val(1+'/646');
                }
            }
            });


$('#fondo').width(ancho);
$('#fondo').height(alto);
//////////////////////
///// thumnail ///////
//////////////////////
//mueve las imagenes segun el thumnail
$('.lista img').click(
    function()
    {
          var e=$(this).attr('id');
           $('#mybook').booklet("gotopage", e);


    });
//buscar la imagen por el thumnail
$('.oculto img').click(
    function()
    {
         var e=$(this).attr('id');
         $('#mybook').booklet("gotopage", e);


     });
//bucar por capitulos


///////////////////////
////// buscar /////////
///////////////////////
//obtiene el numero introducido en el input
$('#buscar').click(function()
    {
            var b=$('#tB').val();
            if(b!='')
            {
                $('#mybook').booklet("gotopage", b);
                $('#tB').val("");
            }else
            {
                //alert('digita un numero');

            }
    });