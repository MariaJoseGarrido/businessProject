export const home = () => {
  const divHome = document.createElement('div');
  divHome.className="templateHome"
  const viewHome = `

  <div class="container-tittle-btn-home"> 
      <h1>Bienvenido/a al curso:</h1>
      <h2>Lorem ipsum dolor sit amet</h2>

      <div class="btn-home">
        <button class="btn-entrar">Entrar</button>
      </div>
      
      <p> 
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet
      Lorem ipsum dolor sit amet

      v
      </p>

  </div>

  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
      <div class="carousel-caption d-none d-md-block">
        <p class="tittle-video-carrousel">"Ganémosle al virus, Trailer"</p>
      </div>
    </div>
    <div class="carousel-item">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
      <div class="carousel-caption d-none d-md-block">
        <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...¡La corona es nuestra!"</p>
      </div>
    </div>
    <div class="carousel-item">
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
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
  
  `

  /*   <footer>
  <img class="hootie-footer" src="./img/footerPPT Hootie Hoo.jpg">
  </footer> */

  divHome.innerHTML = viewHome;

  return divHome;
}