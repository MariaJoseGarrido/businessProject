export const games = () => {
    const divGames = document.createElement('div');
    divGames.className="templateGames"
  
    const viewGames = `

    <h1>Juegos</h1>
    <h3>Quieres divertirte mientras aprendes? Acá podrás hacerlo</h3>

    <h2>Rompecabezas del Escuadrón prevención</h2>

    <svg width="700" height="700" id="entorno">
          <g id="basecolor"><image xlink:href="http://imgfz.com/i/m7hyj1Q.jpeg" width="450" height="450" x="170" y="100"></g>
      <g class="father" id="0"><image xlink:href="http://imgfz.com/i/2aKTCtj.jpeg" class="movil"></g>
      <g class="father" id="1"><image xlink:href="http://imgfz.com/i/b8oWriz.jpeg" class="movil"></g>
      <g class="father" id="2"><image xlink:href="http://imgfz.com/i/luSHyr2.jpeg" class="movil"></g>
      <g class="father" id="3"><image xlink:href="http://imgfz.com/i/aT3xqAi.jpeg" class="movil"></g>
      <g class="father" id="4"><image xlink:href="http://imgfz.com/i/vxQTsjG.jpeg" class="movil"></g>
      <g class="father" id="5"><image xlink:href="http://imgfz.com/i/enu5NdI.jpeg" class="movil"></g>
      <g class="father" id="6"><image xlink:href="http://imgfz.com/i/IKSdX9h.jpeg" class="movil"></g>
      <g class="father" id="7"><image xlink:href="http://imgfz.com/i/6SqmuhE.jpeg" class="movil"></g>
      <g class="father" id="8"><image xlink:href="http://imgfz.com/i/WHlM61j.jpeg" class="movil"></g>
    </svg>
  
  

      <br>
      <br>
      <h1>¡Vamos a ver cómo está tu memoria!</h1>

      <div id="pairGames">
      <div id="containGame">
        <div id="gameHeader">
          <label id="gameTime">00:00 </label><span>Tiempo</span>
        </div>
        <div id="boardGame">
          <div class="box" id="0"></div>
          <div class="box" id="1"></div>
          <div class="box" id="2"></div>
          <div class="box" id="3"></div>
          <div class="box" id="4"></div>
          <div class="box" id="5"></div>
          <div class="box" id="6"></div>
          <div class="box" id="7"></div>
          <div class="box" id="8"></div>
          <div class="box" id="9"></div>
          <div class="box" id="10"></div>
          <div class="box" id="11"></div>
          <div class="box" id="12"></div>
          <div class="box" id="13"></div>
          <div class="box" id="14"></div>
          <div class="box" id="15"></div>
          <div class="box" id="16"></div>
          <div class="box" id="17"></div>
          <div class="box" id="18"></div>
          <div class="box" id="19"></div>
        </div>
      </div>
      <div id="resultsPanel">
        <div id="results">
          <label class="labelTime">Tiempo:</label><br/><span class="finalTime">-- seg</span>
          <hr/>
         
          <div><p class="arrow">&downarrow;</p></div>
          <hr/><br/><br/><span id="btnRestart">Reiniciar</span>
        </div>
      </div>
    </div>

    `;

    divGames.innerHTML = viewGames;


/* Programacion de Rompecabezas */
/*Programacion de JavaScript*/
const piece = document.getElementsByClassName('movil');

let tamWidh = [150,150,150,150,150,150,150,150,150];
let tamHeight = [150,150,150,150,150,150,150,150,150];

for(let i=0;i<piece.length;i++){
	piece[i].setAttribute("width", tamWidh[i]);
	piece[i].setAttribute("height",tamHeight[i]);
	piece[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
	piece[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
	piece[i].setAttribute("onmousedown","selectElement(evt)");
}

let elementSelect = 0;  
let currentX = 0;
let currentY = 0;
let currentPosX = 0;
let currentPosY = 0;

function selectElement(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moveElement(evt)");
}

function moveElement(evt){
	let dx = evt.clientX - currentX;
	let dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","unselectElement(evt)");
	elementSelect.setAttribute("onmouseup","unselectElement(evt)");
	iman();
}

function unselectElement(evt){
	testing();
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
}

let entorno = document.getElementById('entorno');

function reordenar(evt){
	let father = evt.target.parentNode;
	let clone = father.cloneNode(true);
	let id = father.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

let origX = [170,320,470,170,320,470,170,320,470];   
let origY = [100,100,100,250,250,250,400,400,400];

function iman(){
	for(let i=0;i<piece.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}
			
let win = document.getElementById("win");

function testing() {
	let wellLocated = 0;
	let fathers = document.getElementsByClassName('father');
	for(let i=0;i<piece.length;i++){
		let posx = parseFloat(fathers[i].firstChild.getAttribute("x"));    
		let posy = parseFloat(fathers[i].firstChild.getAttribute("y"));
		ide = fathers[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			wellLocated = wellLocated + 1;
		}
	}
	if(wellLocated == 9){
		win.play();
	}
}





/* Progamacion de memorice */
//LOGICA PRINCIPAL DEL JUEGO
  /*En caso de añadir una imagen al juego solo es necesario añadir un td en HTML nuevo y la imagen en arrayImagenes*/
  let testCounter=0;
  let previous=null;
  let chosenImage;
  let faultCounter = 0;
  let hitCounter = 0;

  const  arrayImages = ["http://imgfz.com/i/KCxODoj.png", "http://imgfz.com/i/KCxODoj.png","http://imgfz.com/i/FeBix6r.png", "http://imgfz.com/i/FeBix6r.png", "http://imgfz.com/i/cXUdDH4.png", "http://imgfz.com/i/cXUdDH4.png", "http://imgfz.com/i/D4Oarud.png", "http://imgfz.com/i/D4Oarud.png", "http://imgfz.com/i/gGQOzmu.png", "http://imgfz.com/i/gGQOzmu.png", "http://imgfz.com/i/7qhaLeb.png", "http://imgfz.com/i/7qhaLeb.png", "http://imgfz.com/i/6KmOaBN.png", "http://imgfz.com/i/6KmOaBN.png", "http://imgfz.com/i/MOLa7NW.png", "http://imgfz.com/i/MOLa7NW.png", "http://imgfz.com/i/f9WXPHY.png", "http://imgfz.com/i/f9WXPHY.png", "http://imgfz.com/i/cC4HV3k.png", "http://imgfz.com/i/cC4HV3k.png"];

  // Los valores de este arrglo corresponden a las imagenes que hacen pareja en el arreglo anterior, 
  // asignandoles el mismo valor a las casillas correspondientes a la pareja de imagenes, con un valor unico para cada pareja
  const arrayPairs = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

  const quantityImages = arrayImages.length;
  const arrayPositions = new Array(quantityImages);
  const arrayPositionsParejas = new Array(quantityImages);

  $(document).ready(function(){
      //Crea las posiciones de la array
      let counterPositions = 0;
      
      //VARIABLES CRONOMETRO DE TIEMPO
      let startCount;
      let idTimeout;
      let cronometer = document.querySelector('#gameTime');
      //botonReiniciar = document.querySelector('#botonReiniciar');
      let cronometer_active = 0;
      let endGame = 0;
      
      while(counterPositions < quantityImages){
          let putImages = Math.floor((Math.random()*quantityImages));
          let counterPositionsRepeat =0;

          //Verifica que la imagen no se haya asignado anteriormente
          for (let x=0; x<counterPositions; x++){
              if (arrayPositions[x]==putImages) counterPositionsRepeat++;
          }

          //Asigna la imagen a la casilla y el valor al arreglo de posiciones de parejas para poder encontrar la solución mas adelante
          if (counterPositionsRepeat != 1){
              arrayPositions[counterPositions] = putImages;
              arrayPositionsParejas[counterPositions] = arrayPairs[putImages];
              counterPositions++;
          }
      }

      //Recogemos cuando clique en un td

      $(".box").click(function(){
          
          //Inicia el cronometro al dar click por primera vez en una casilla
          if(cronometer_active == 0){
              cronometer_active++;
              start();
          }
          
          testCounter++;
          //Recogemos la casilla
          let box = $(this).attr("id");

          if (testCounter>1){
              chosenImage = arrayPositions[box];

              //Hace la animación entre el fondo plano y la imagen de la segunda casilla seleccionada
              $("#"+box).animate({opacity: "toggle"}, 100);
              $("#"+box).animate({opacity: "toggle"}, 100);
              window.setTimeout(function(){
                  $("#"+box).css("background-image", "url("+arrayImages[chosenImage]+")").css("background-color", "transparent");
              },100);

              console.log(arrayPositionsParejas[previous] + ":" + arrayPositionsParejas[box]);

              //Comapara con el arreglo de posiciones de parejas si la imagen del deportista conside con el nombre de la jugada, 
              //si es asi la da por acertada y bloquea las acciones sobre las casillas correspondientes
              if (arrayPositionsParejas[box]!=arrayPositionsParejas[previous]){
                  faultCounter++;
                  $("#fallosN").html(faultCounter);

                  //No permite clicks en las casillas mientras corre la animación
                  $(".box").css("pointer-events","none");

                  //Cuando las casillas no coinciden corre la animacion de la imagen de regreso al color plano
                  window.setTimeout(function(){
                      $("#"+box).animate({opacity: "toggle"}, 200);
                      $("#"+box).animate({opacity: "toggle"}, 200);
                      $("#"+previous).animate({opacity: "toggle"}, 200);
                      $("#"+previous).animate({opacity: "toggle"}, 200);
                      window.setTimeout(function(){
                          $("#"+box).css("background", "");
                          $("#"+previous).css("background", "");

                          //Reactiva el click en las casillas cuando la animación termina
                          $(".box").css("pointer-events","auto");
                      },200);
                  },500);
              }else{ 
                  hitCounter++;
                  $("#hits").html(hitCounter);

                  //No permite que se vuelva a activar el click en las casillas que ya han sido acertadas y emparejadas
                  $("#"+box).addClass("right");
                  $("#"+previous).addClass("right");
              }
              testCounter = 0;
          }else{
              previous = box;
              chosenImage = arrayPositions[box];

              //Hace la animación entre el fondo plano y la imagen de la primera casilla seleccionada
              $("#"+box).animate({opacity: "toggle"}, 100);
              $("#"+box).animate({opacity: "toggle"}, 100);
              window.setTimeout(function(){
                  $("#"+box).css("background-image", "url("+arrayImages[chosenImage]+")").css("background-color", "transparent");
              },100);
              testCounter++;

              //Al ser esta la primera de las dos casillas donde se intenta emparejar, no permite que se de click hasta que se seleccione otra casilla más
              $(this).css("pointer-events","none");
          }
          
          if(hitCounter == 10){
              console.log("fin");
              endGame++;
              $(".finalTime").html(cronometer);
              $("#resultsPanel").fadeIn();
              $("html, body").stop().animate({
                  scrollTop: $("#pairGames").offset().top
              }, 500, 'swing');
              
          }
      });

      //CRONOMETRO DE TIEMPO
      function zeroIzq(n){
          return n.toString().replace(/^(\d)$/,'0$1');
      }
      function secondFormat(s){
  //        return zeroIzq(Math.floor(s / 3600))+':'+zeroIzq(Math.floor(s%3600 / 60))+':'+zeroIzq(Math.floor((s%3600)%60));
          return zeroIzq(Math.floor(s%3600 / 60))+':'+zeroIzq(Math.floor((s%3600)%60));
      }
      function reloaded(){
          if(endGame == 0){
              let dif = Date.now() - startCount;
              dif = Math.round(dif / 1000);
              cronometer.innerHTML = secondFormat(dif);
              idTimeout = setTimeout(reloaded,1000);
          }
      }
      function start(){
          clearTimeout(idTimeout);
          startCount = Date.now();
          reloaded();
      }
      
      
      //PANEL DE RESULTADOS
      $("#btnRestart").click(function(){
          location.reload(true);
      });
      
     
      
    
  });
  



    return divGames;

};
