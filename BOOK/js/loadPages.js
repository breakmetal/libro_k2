/**
 * Created by breakmetal on 19/06/14.
 */
    //

var contenedor1 = document.getElementById("mybook");

for(var l=0; l<646;l++)
{

    // console.log("_*_");
    var divtest = document.createElement("div");
    divtest.style.height=window.innerHeight-(window.innerHeight*.10)+'px';
    divtest.id=l+'p';
    divtest.className = "paginas";
    contenedor1.appendChild(divtest);
    divtest.innerHTML +="<img src='paginas/"+l+".png' name="+l+" width='100%' height='95%'>";

}
//width='100%' height='93%'