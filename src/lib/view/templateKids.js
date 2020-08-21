export const kids = () => {
  const divKids = document.createElement('div');
  divKids.className="templateKids"

  const viewKids = `
  <div> 
    <h1 class="tittleKids"> ZONA KIDS! </h1>
    <p class="subtittleKids">Puma Espuma y el Escuadrón Prevención</p>
  </div>

  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <iframe width="600" height="320" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
      width: 100%;">
    </iframe>
      <div class="carousel-caption d-none d-md-block">
        <p class="tittle-video-carrousel">"Ganémosle al virus, Trailer"</p>
      </div>
    </div>

    <div class="carousel-item">
      <iframe width="600" height="320" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="
      width: 100%;">
    </iframe>
      <div class="carousel-caption d-none d-md-block">
        <p class="tittle-video-carrousel">"Puma Espuma y el Escuadrón Prevención en...¡La corona es nuestra!"</p>
      </div>
    </div>

    <div class="carousel-item">
      <iframe width="600" height="320" 
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
  `

  divKids.innerHTML = viewKids;

  return divKids;
}