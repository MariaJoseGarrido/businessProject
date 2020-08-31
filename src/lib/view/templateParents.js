export const parents = () => {
  const divParents = document.createElement('div');

  const viewParents = `
  <div class="logo-face" > <img class="owl-icon" src="./img/Icono_Demo_3.png"> </div>
  <div class="intro"><p class="text">En esta zona podrás encontrar nuestro material de capacitación y apoyo para trabajar
  prevención y autocuidado en niñas y niños durante la contigencia COVID-19.</p></div>
  <div class="card mb-3" style="max-width: 840px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="./img/pdf.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">Módulo Introductorio</h3>
        <h4 class="theme">Tema 1: ¿Qué está pasando?</h4>
        <a href="./Doc/M1/HH_GanemosleAlVirus_PDF_M1_T1.pdf" download="">Descargar Material </a>
        <h4 class="theme">Tema 2: ¿Qué es el covid-19?</h4>
        <a href="./Doc/M1/HH_GanemosleAlVirus_PDF_M1_T2.pdf" download="">Descargar Material </a>
        </div>
    </div>
  </div>
  </div>
  <div class="card mb-3" style="max-width: 840px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="./img/pdf.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">Módulo 2: "Cultivando Nuestras Emociones"</h3>
        <h4 class="theme">Tema 1: Cuidando las relaciones en cuarentena</h4>
        <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T1.pdf/" download="">Descargar Material </a>
        <h4 class="theme">Tema 2: ¿Cómo cambia la mente de los niños y niñas?</h4>
        <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T2.pdf" download="">Descargar Material </a>
        <h4 class="theme">Tema 3: Psicohigiene: El cuidado de uno mismo y de los demás</h4>
        <a href="./Doc/M2/HH_GanemosleAlVirus_PDF_M2_T3.pdf/" download="">Descargar Material </a>
        </div>
    </div>
  </div>
  </div>
  <div class="card mb-3" style="max-width: 840px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="./img/pdf.png" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title">Módulo 3: "Cultivando Nuestro Cuerpo"</h3>
        <h4 class="theme">Alimentos</h4>
        <a href=".Doc/M3/HootieHoo_GAV_M3_Contenido.docx" download="">Descargar Material </a>
        <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Estoy jugando en Hootie Hoo!" target="blank">compartir en Tweet</a>  
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://hootie.cl" target="blank">Comparte en Facebook</a>  
        <a href="https://api.whatsapp.com/send?text=Estoy jugando en%20https://hootie.cl" target="blank">Compartir en Whatsapp</a>
      </div>
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

  divParents.innerHTML = viewParents;

  return divParents;
}




