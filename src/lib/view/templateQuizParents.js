export const quizParents = () => {
  const divQuizParents = document.createElement("div");
  divQuizParents.className = "templateQuizParents";
  const viewQuizParents = `

  <div class="row">
  <div class="container-txt-quiz  col-xs-12 col-sm-4"> 
    <p class="txt-quiz"> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur 
    </p>
  </div>

  <div class="container-img-quiz  col-xs-12 col-sm-4"> 
    <img src="https://via.placeholder.com/300x400" alt="Imagen quiz">
  </div>
  
  <div class="container-btns-quiz  col-xs-12 col-sm-4"> 

    <div class="btns-quiz">
      <button class="btn-general btnQuiz" data-toggle="modal" data-target="#exampleModal">Lorem ips</button>
      <button class="btn-general btnQuiz">Lorem ips</button>
      <button class="btn-general btnQuiz">Lorem ips</button>
      <button class="btn-general btnQuiz">Lorem ips</button>
    </div>
    
  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua
        </div>
        
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
  `;


  divQuizParents.innerHTML = viewQuizParents;

  return divQuizParents;
};
