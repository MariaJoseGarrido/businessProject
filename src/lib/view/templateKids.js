export const kids = () => {
  const divKids = document.createElement('div');
  divKids.className="templateKids"

  const viewKids = `
    <br>
    <div class="body-kids"> 
    <h1 class="punk">
    <span>Z</span><span>o</span><span>n</span><span>a</span><span> 
    </span><span>K</span><span>i</span><span>d</span><span>s</span><span>!</span>
    </h1>
    <br>
    </div>

    <div class="container">
    <h2 class="titleGame">Te invitamos a ver la serie de "El Escuadrón prevención"</h2>
    <div class="row">
      <div class="col-sm">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9skA9MFlcs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="col-sm">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G2BHb6kWnRc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="col-sm">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tuILs6Zedco" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <section>
  <p class="title text-left"> ✨ Conoce a nuestro escuadrón prevención</p>
    <div class="container-pj">
      <div class="row">
        <div class="col"><img class="characters" src="./img/puma1.png">
        <h5 class="card-title">“¡Vamos todos juntos ahora!”</h5>
        <p class="text-left card-body">Líder por naturaleza, valiente y aventurero, 
        intrépido. Le gusta hacer cosas nuevas y creativas. Enfrenta con valentía al coronavirus. Sin embargo, a veces su 
        intrepidez le juega malas pasadas y se transforma en ansiedad.</p></div>
        <p></p>
        <div class="col"><img class="characters"  src="./img/jabier1.png">
        <h5 class="card-title">“Estaré ahí cuando me necesiten.”</h5>
        <p class="text-left card-body">Tímido, sonriente y tranquilo. Le gusta compartir con sus amig@s y 
        comer cosas ricas. Es el más asustadizo del grupo frente a coronavirus, pero sabe que en el fondo tiene el mayor poder de 
        todo el equipo, ya que no sólo puede proteger, sino que también destruir al virus. Su presencia es indispensable.</p></div>
        <div class="col"><img class="characters"  src="./img/tomask1.png">
        <h5 class="card-title">“Tranquilos. Todo esté bien”</h5>
        <p class="text-left card-body">Gracioso, cercano, amistoso, elocuente. Siempre sabe cómo hacer 
        reír y verle el lado positivo a las cosas y mantener la calma. Frente a coronavirus, busca bajarle la gravedad a la situación y calmar 
        a los humanos protegiendo su boca.</p></div>
        <div class="col"><img class="characters"  src="./img/guantrini1.png">
        <h5 class="card-title">“No teman, ¡Guantrini ya está aquí!</h5>
        <p class="text-left card-body">Directa, fuerte y protectora. Es la más temeraria del grupo. 
        Se enfrenta directamente al Coronavirus sin miedo, 
        ya que sabe que su rol principal es proteger la piel de los humanos.</p>
</div>
      </div>
    </div>
  </section>

  <section id="aprende">
  <p class="title text-left"> 💡 Aprendamos sobre el coronavirus!</p>
    <div class="card-group">
      <div class="card">
        <img src="./img/covid.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">¿Qué es el coronavirus?</h5>
          <p class="card-text text-left">Es un virus nuevo 🦠, los científicos 👩🏻‍🔬 y médicos 👩🏻‍⚕️ siguen aprendiendo acerca de él. 
          Durante el último tiempo, el virus ha enfermado a muchísimas personas 🤒. Los científicos y médicos están intentando 
          aprender más 👨🏻‍💻 para poder ayudar a las personas que se enferman y poder prevenir la enfermedad 💉, también están trabajando 
          arduamente para ayudar a las personas a mantenerse saludables 🧪.</p>
        </div>
      </div>
      <div class="card">
        <img src="./img/lavar.png" class="card-img-top" alt="...">
        <div class="card-text card-body"">
          <h5 class="card-title">Previene el coronavirus</h5>
          <ul class="list-group text-left">
          <li class="list-group-item">Lava tus manos con jabón mientras cantas una canción 🎵</li>
          <li class="list-group-item">Evita tocar tu cara, nariz y ojos ✋</li>
          <li class="list-group-item">Mantén distancia con otras personas 😊 ➖ 😊</li>
          <li class="list-group-item">En caso de tos o estornudo, hazlo sobre el antebrazo o en pañuelo
          desechable 🤧 </li>
          <li class="list-group-item">No salgas sin mascarilla 😷</li>
        </ul></div>
      </div>
      <div class="card">
        <img src="./img/puma-covid.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Avísales a tus papás si...</h5>
          <p class="card-text text-left">Tienes tos o fiebre 🤒, si sientes malestar como dolor
          de  estómago o cabeza 🤕, si tienes mucho calor 🥵 o si te encuentran especialmente cansado 🥱.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="download">
  <p class="title text-left"> 🖨 Imprime los personajes del escuadrón y llenalos como quieras, compártelo en las redes sociales,
  no olvides etiquetarnos para ver tus hermosos diseños!</p>
    <div class="card-group">
    <div class="card">
      <img class="card-img-print d-flex justify-content-center" src="./prints/print1.png" alt="Card image cap">
      <div class="card-body">
      <a href="./prints/guantrini.pdf" download="">Descarga a Guantrini </a>

      </div>
    </div>
    <div class="card print">
      <img class="card-img-print d-flex justify-content-center" src="./prints/print2.png" alt="Card image cap">
      <div class="card-body">
      <a href="./prints/jabier.pdf" download="">Descarga a Jabier </a>

      </div>
    </div>
    <div class="card print">
      <img class="card-img-print d-flex justify-content-center" src="./prints/print3.png" alt="Card image cap">
      <div class="card-body">
      <a href="./prints/espuma.pdf" download="">Descargar a Puma Espuma </a>

      </div>
    </div>
    <div class="card print">
      <img class="card-img-print d-flex justify-content-center" src="./prints/print4.png" alt="Card image cap">
      <div class="card-body">
      <a href="./prints/tomask.pdf" download="">Descarga a Tomask</a>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="logoHootieHooFooter"> 
    <a href="#/"> 
    <img class="logo-footer" src="./img/Icono_Demo_1.png" alt="Logo del sitio"> 
  </div>

  <div class="menuFooter">
    <p class="opmenuFooter">
      <a href="#/"> Home </a>
        | &nbsp;
      <a href="#/parents"> Zona adultos </a>
        | &nbsp;
      <a href="#/kids"> Zona niños </a>
    </p>

    <p class="menuiconsFooter"> 
      <a href="#/"> 
        <i class="fa fa-home iconFooter"> </i> 
      </a>
      <a href="#/Contact"> 
        <i class="fas fa-phone iconFooter"></i> 
      </a>
      <a href="https://www.youtube.com/channel/UC0Z1Czogj0CW3S0XbRyv_0w" target="_blank"> 
      <i class="fab fa-youtube"></i>
      </a>
    </p>

      <p class="copyrigth">
        ©️ 2020 Hootie Hoo™️  | Todos los derechos reservados.
      </p>
    </div>
  </footer>

  </section>
  `

  divKids.innerHTML = viewKids;

  return divKids;
}

