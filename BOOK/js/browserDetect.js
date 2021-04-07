/**
 * Created by jose on 4/07/14.
 */
//definimos el estilo
var style=document.createElement("link");
style.rel="stylesheet";
style.type="text/css";
var dec=navigator.userAgent.toLowerCase().indexOf('firefox');
if(dec!=-1)
{
    style.href="css/menuReflect.css";

}
else
{
    style.href="css/refChrome.css";
}
//añadir a la cabecera
document.head.appendChild(style);