export const kids = () => {
  const divKids = document.createElement('div');
  divKids.className="templateKids"

  const viewKids = `
    <div> 
      <h1 class="tittleKids"> ZONA KIDS! </h1>
      <p class="subtittleKids">"Puma Espuma y el Escuadrón Prevención"</p>
    </div>

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Ganémosle al virus, Trailer"</p>
        </div>
      </div>

      <div class="carousel-item">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...¡La corona es nuestra!"</p>
        </div>
      </div>

      <div class="carousel-item">
        <iframe width="600" height="400" 
        src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
        frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
        width: 100%;">
      </iframe>
        <div class="carousel-caption d-none d-md-block">
          <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...Una gran aventura en un mundo pequeño"</p>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <section>
  <p class="title text-left"> ✨ Conoce a nuestro escuadrón prevención</p>
    <div class="container-pj">
      <div class="row">
        <div class="col"><img class="characters" src="./img/puma1.png"></div>
        <div class="col"><img class="characters"  src="./img/jabier1.png"></div>
        <div class="col"><img class="characters"  src="./img/tomask1.png"></div>
        <div class="col"><img class="characters"  src="./img/guantrini1.png"></div>
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

  <section>
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
  `

  divKids.innerHTML = viewKids;

  return divKids;
}

