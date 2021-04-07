/**
 * Created by breakmetal on 02/01/2015.
 */
//dimensiones y configuracion de pagina
var ancho=window.innerWidth,alto=window.innerHeight
$('#mapa').height(alto *.95);
$('#mapa').width(ancho *.98);
$('#mapa').css({'top':(alto *.08)+'px'})
$('#fondoSvg').height(alto);
$('#fondoSvg').width(ancho);
//cuencas//
var magdalena;
var bogota;
var suarez;
var sumapaz;
var negro;
var cDerecha;
var cArriba;
var isla1
var isla2;
var isla3;
var isla4;
var bogotaT;
var sumapazT;
var ubateT;
var negroT;
var machetaT;
//estaciones
var mag=new Array(4);
var neg=new Array(29);
var sua=new Array(68);
var bog=new Array(163);
var sum=new Array(28);
var cLD=new Array(4);
var cDA=new Array(3);
//estaciones y puntos
var estacionMagdalena=new Array(5);
estacionMagdalena[1]="El Placer";
estacionMagdalena[2]="Corralitos Pulí";
estacionMagdalena[3]="Corralitos Pulí";

////////////////////////////////////
var estacionNegro=new Array(32);
estacionNegro[1]="Zusne";
estacionNegro[2]="Caparrapí";
estacionNegro[3]="Los Tiestos";
estacionNegro[4]="Boc. Acueducto la Palma";
estacionNegro[5]="Murca";
estacionNegro[6]="Puerto Leticia";
estacionNegro[7]="Negrete";/////////////////////////
estacionNegro[8]="Puente Guaduero";
estacionNegro[9]="Guaduas";
estacionNegro[10]="Puente Granada";
estacionNegro[11]="San Isidro";
estacionNegro[12]="San Isidro-Pm";
estacionNegro[13]="Agua Fría-LM";
estacionNegro[14]="Paso del rejo-Negro";
estacionNegro[15]="Agua Fría-PM";
estacionNegro[16]="Paso del rejo- Tigre";
estacionNegro[17]="Inst. Vocacional Agrícola";
estacionNegro[18]="Puente Naranjal";
estacionNegro[19]="Salitre Blanco";
estacionNegro[20]="La Ferrería";
estacionNegro[21]="La Cabrera";
estacionNegro[22]="Vianí";
estacionNegro[23]="El Acomodo";
estacionNegro[24]="Puente Cucharal";
estacionNegro[25]="Puente Arco";

///////////////////////////////
var estacionSuarez=new Array(81);
estacionSuarez[1]="Garavito";
estacionSuarez[2]="Puente Garavito  Callejón";
estacionSuarez[3]="Socotá";
estacionSuarez[4]="Esclusa Merchán";
estacionSuarez[5]="Triangulo";
estacionSuarez[6]="El Pino-LM";
estacionSuarez[7]="Tolón arriba";
estacionSuarez[8]="Esperanza-Tibita";
estacionSuarez[9]="Puente Pinilla";
estacionSuarez[10]="La Florida";
estacionSuarez[11]="Nariño";
estacionSuarez[12]="Puente Barcelona";
estacionSuarez[13]="Santa Rita";
estacionSuarez[14]="Caldas";
estacionSuarez[15]="Simijaca";
estacionSuarez[16]="Los Arrayanes";
estacionSuarez[17]="Puente San Miguel";
estacionSuarez[18]="Puente Guzmán";
estacionSuarez[19]="San Agustín";
estacionSuarez[20]="Santa Sofía";
estacionSuarez[21]="Sutamarchán";
estacionSuarez[22]="Centra II";
estacionSuarez[23]="San Miguel de Sema";
estacionSuarez[24]="Capellania";
estacionSuarez[25]="El Espino-PM";
estacionSuarez[26]="La Candelaria";
estacionSuarez[27]="Monasterio";
estacionSuarez[28]="El Zarzal";
estacionSuarez[29]="Ticha Muñoz";
estacionSuarez[30]="Fúquene Ticha María";
estacionSuarez[31]="Puente Colorado";
estacionSuarez[32]="Carrizal";
estacionSuarez[33]="Chinzaque";
estacionSuarez[34]="El Hatillo";
estacionSuarez[35]="Monserrate";
estacionSuarez[36]="Media Luna";
estacionSuarez[37]="Torca";
estacionSuarez[38]="Nazareth";
estacionSuarez[39]="Tres Esquinas";
estacionSuarez[40]="El Puente";
estacionSuarez[41]="El Boquerón";
estacionSuarez[42]="Hospital Carupa";
estacionSuarez[43]="La Malilla";
estacionSuarez[44]="Corralejas";
estacionSuarez[45]="Represa el Hato";
estacionSuarez[46]="Descarga el Hato";
estacionSuarez[47]="Hato 1";
estacionSuarez[48]="Los Pinos-Lag Suesca";
estacionSuarez[49]="El Hato";
estacionSuarez[50]="Hacienda El Hato";
estacionSuarez[51]="Hato 7";
estacionSuarez[52]="Hato 6";
estacionSuarez[53]="El Pedregal";
estacionSuarez[54]="El Encanto";
estacionSuarez[55]="Puente Pedregal";
estacionSuarez[56]="Los Pinos-Lag Suesca";
estacionSuarez[57]="La Boyera";
estacionSuarez[58]="Captación 1";
estacionSuarez[59]="Boyera-CAR";
estacionSuarez[60]="El Pino";
estacionSuarez[61]="El Triangulo-PM";
estacionSuarez[62]="Palacios";
estacionSuarez[63]="Tapias";
estacionSuarez[64]="Puente Cabuya";
estacionSuarez[65]="Captación 2";

//////////////////////////////
var estacionCA=new Array(3);
estacionCA[1]="Puente Caney";
estacionCA[2]="Los Pinos";
////////////////////////////
var estacionSumaPaz=new Array(32);
estacionSumaPaz[1]="Bocatoma Pirineos";
estacionSumaPaz[2]="Puente La Panela";
estacionSumaPaz[3]="Aguasiso";
estacionSumaPaz[4]="Providencia";
estacionSumaPaz[5]="Puente La Aguadita";
estacionSumaPaz[6]="Matadero";
estacionSumaPaz[7]="Univ. Fusagasugá-UDEC";
estacionSumaPaz[8]="Puente Caracol";
estacionSumaPaz[9]="Juan XXII";
estacionSumaPaz[10]="Puente Rojo";
estacionSumaPaz[11]="Pasca";
estacionSumaPaz[12]="Pasca 1";
estacionSumaPaz[13]="Puente Caro";
estacionSumaPaz[14]="Puente Los Pinos";
estacionSumaPaz[15]="Costa Rica";
estacionSumaPaz[16]="El Batán";
estacionSumaPaz[17]="Puente San Vicente";
estacionSumaPaz[18]="Bocatoma Venecia";
estacionSumaPaz[19]="Puente Los Rios";
estacionSumaPaz[20]="Puente Arbeláez";
estacionSumaPaz[21]="Pajas Blancas";
estacionSumaPaz[22]="Pueblo Nuevo";
estacionSumaPaz[23]="Pajas Blancas-LM";
estacionSumaPaz[24]="Puente Cucharo";
estacionSumaPaz[25]="Aguas Claras";
estacionSumaPaz[26]="Puente Negro";




///////////////////////////////
var estacionBogota=new Array(176);
estacionBogota[1]="La Fortuna";
estacionBogota[2]="El triunfo";
estacionBogota[3]="Villapinzón-PM";
estacionBogota[4]="Villapinzón-LM";
estacionBogota[5]="La Argentina";
estacionBogota[6]="Puente Chocontá";
estacionBogota[7]="El Silencio";
estacionBogota[8]="Saucio";
estacionBogota[9]="Saucio Pte Baraya";
estacionBogota[10]="Tocaima";
estacionBogota[11]="Santa Martha";
estacionBogota[12]="Guanquica-LM";
estacionBogota[13]="Santa Rosita";
estacionBogota[14]="La Iberia";
estacionBogota[15]="Páramo de Guerrero-LM";
estacionBogota[16]="represa sisga";
estacionBogota[17]="Hoyo arriba";
estacionBogota[18]="La Neptuna";
estacionBogota[19]="Puente Sesquilé";
estacionBogota[20]="La Iberia-LM";
estacionBogota[21]="Cadillal";
estacionBogota[22]="El Consuelo";
estacionBogota[23]="El Okal";
estacionBogota[24]="Chécua";
estacionBogota[25]="Puente Chécua";
estacionBogota[26]="Puente Florencia";
estacionBogota[27]="El Portillo";
estacionBogota[28]="Acandy";
estacionBogota[29]="Acequia El Molino";
estacionBogota[30]="El Espino-LM";
estacionBogota[31]="Acequia La Quinta";
estacionBogota[32]="Bombas Sesquilé";
estacionBogota[33]="La Argelia";
estacionBogota[34]="La Bolera";
estacionBogota[35]="La Pola";
estacionBogota[36]="Guanquica";
estacionBogota[37]="Ladera Grande";
estacionBogota[38]="El Llano";
estacionBogota[39]="Barrancas";
estacionBogota[40]="El Salitre";
estacionBogota[41]="El Volador";
estacionBogota[42]="Represa Neusa";
estacionBogota[43]="Canaleta Parshall";
estacionBogota[44]="Páramo de Guerrero";
estacionBogota[45]="La Victoria-LM";
estacionBogota[46]="El Recreo";/////
estacionBogota[47]="La Pradera";
estacionBogota[48]="El Manzano";
estacionBogota[49]="El Cedral";
estacionBogota[50]="Ave Colombiana";
estacionBogota[51]="Rodamontal";
estacionBogota[52]="Zipaquirá";
estacionBogota[53]="Caracolí";
estacionBogota[54]="Puente Sáenz";
estacionBogota[55]="Puente Tocancipá";
estacionBogota[56]="Esc. Samper Madrid";////
estacionBogota[57]="Puente Vargas";
estacionBogota[58]="Guatavita";
estacionBogota[59]="Montecillos";
estacionBogota[60]="Pueblo de Piedra";
estacionBogota[61]="San José";
estacionBogota[62]="Santo Domingo";
estacionBogota[63]="El Vergel";
estacionBogota[64]="Puente Apulo";
estacionBogota[65]="Viotá";
estacionBogota[66]="Parque Sopó";
estacionBogota[67]="Apulo";
estacionBogota[68]="Univ, Nueva  Granada";
estacionBogota[69]="Alco";
estacionBogota[70]="Paso Ancho";
estacionBogota[71]="Pozo Hondo";
estacionBogota[72]="Planadas";
estacionBogota[73]="Guamal";
estacionBogota[74]="Santa Isabel";
estacionBogota[75]="Puente Calamar";
estacionBogota[76]="La Pradera-LM";
estacionBogota[77]="Entreríos";
estacionBogota[78]="El Potrero";
estacionBogota[79]="La Vega";
estacionBogota[80]="La Esperanza-LM";
estacionBogota[81]="Las Mercedes";
estacionBogota[82]="Villa Paula";
estacionBogota[83]="Puente Manrique";
estacionBogota[84]="Puente Cacique";
estacionBogota[85]="La Balsa Chía";
estacionBogota[86]="Apto Guaimaral-USTA";
estacionBogota[87]="Santa Teresa";
estacionBogota[88]="Simayá";
estacionBogota[89]="Puente La Calera";
estacionBogota[90]="Torca-PM";
estacionBogota[91]="Puente La Virgen";
estacionBogota[92]="Santa Inés";
estacionBogota[93]="Acequia San Patricio";
estacionBogota[94]="La Muralla";
estacionBogota[95]="Puerto Brasil Rusito";
estacionBogota[96]="Puente Cundinamarca";
estacionBogota[97]="La Casita";
estacionBogota[98]="Edicio CAR";
estacionBogota[99]="El Bosque";
estacionBogota[100]="La Primavera";
estacionBogota[101]="La Unión";
estacionBogota[102]="Las Margaritas";
estacionBogota[103]="La Ramada";
estacionBogota[104]="Puerto Brasil La Mona";
estacionBogota[105]="Campobello";
estacionBogota[106]="Altamira";
estacionBogota[107]="Hacienda La Virginia";
estacionBogota[108]="La Tribuna";
estacionBogota[109]="Hacienda Grande";
estacionBogota[110]="Venecia";
estacionBogota[111]="Rebose gatillo";
estacionBogota[112]="Bojacá";
estacionBogota[113]="Puente Ferrocarril";
estacionBogota[114]="Cartagena";
estacionBogota[115]="Cachipay";
estacionBogota[116]="Prosocial";
estacionBogota[117]="Pedro Palo";
estacionBogota[118]="Pedro Palo-LM";
estacionBogota[119]="La Esperanza-CP";
estacionBogota[120]="Peña Negra";
estacionBogota[121]="Manzanares";
estacionBogota[122]="San Javier";
estacionBogota[123]="La Mesa";
estacionBogota[124]="San Gregorio";
estacionBogota[125]="Puente Carretera";
estacionBogota[126]="Puente Lutaima";
estacionBogota[127]="Las Violetas";
estacionBogota[128]="Dario Valencia";
estacionBogota[129]="Anclaje 14";
estacionBogota[130]="Monterrey";
estacionBogota[131]="Montañuela";
estacionBogota[132]="Boquemonte";
estacionBogota[133]="El Fute";
estacionBogota[134]="Las Huertas";
estacionBogota[135]="La Campiña";
estacionBogota[136]="La Tribuna";
estacionBogota[137]="Sibaté apostólica";
estacionBogota[138]="Hungría";
estacionBogota[139]="San Jorge";
estacionBogota[140]="Doña Juana";
estacionBogota[141]="El Tesoro";
estacionBogota[142]="El Bosque-Cisaca";
estacionBogota[143]="Villablanca";
estacionBogota[144]="Paraiso Perdido";
estacionBogota[145]="Torres";
estacionBogota[146]="Peñas Blancas";
estacionBogota[147]="Escuela Antioquia";
estacionBogota[148]="La Victoria";
estacionBogota[149]="El Delirio";
estacionBogota[150]="El triunfo";
estacionBogota[151]="Java";
estacionBogota[152]="San Pabluna";
estacionBogota[153]="La Cascada";
estacionBogota[154]="América";
estacionBogota[155]="Laguna El Indio";




/////////////////////////////
var estacionCD=new Array(4);
estacionCD[1]="El Molino"
estacionCD[2]="Las Gaviotas"
estacionCD[3]="Agua Blanca"
estacionCD[4]="Manta";









