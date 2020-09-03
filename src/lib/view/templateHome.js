export const home = () => {
  const divHome = document.createElement('div');
  divHome.className="templateHome"
  const viewHome = `

<div class="row">

  <div class="container-hootie-bienv  col-xs-12 col-sm-6">
  <img src="./img/buhoo.png" class="card-img-top" alt="...">
  </div>

  <div class="container-tittle-btn-home  col-xs-12 col-sm-6"> 

  <div class="tittlesHome">
    <h1>Bienvenido/a: </h1>
    <h2>Ingresa como: </h2>
  </div>

    <div class="btn-home">
      <a href="#/parents"> 
        <button class="btn-general"> <img src="./img/icon-btn-parents.png" alt="" style="width:30px;height:30px">
          Adulto
        </button>
      </a>
      <a href="#/kids"> 
        <button class="btn-general"> <img src="./img/icon-btn-chid.png" alt="" style="width:30px;height:30px">
          Niño
        </button>
      </a>
    </div>
    
</div>
  
</div>

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
`



  divHome.innerHTML = viewHome;



  return divHome;
}