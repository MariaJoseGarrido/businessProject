export const quizParents = () => {
  const divQuizParents = document.createElement("div");
  divQuizParents.className = "templateQuizParents row";
  const viewQuizParents = `

  <div class="container-btns-quiz  col-xs-12 col-sm-4"> 

      <div class="btns-quiz">
        <button class="btn-general btnQuiz">Lorem ips</button>
        <button class="btn-general btnQuiz">Lorem ips</button>
        <button class="btn-general btnQuiz">Lorem ips</button>
        <button class="btn-general btnQuiz">Lorem ips</button>
      </div>
      
  </div>

  <div class="container-img-quiz  col-xs-12 col-sm-4"> 
    <img src="https://via.placeholder.com/300x400" alt="Imagen quiz">
  </div>
  
  <div class="container-txt-quiz  col-xs-12 col-sm-4"> 
    <p class="txt-quiz"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur </p>
  </div>

  `;

  /*   <footer>
  <img class="hootie-footer" src="./img/footerPPT Hootie Hoo.jpg">
  </footer> */

  divQuizParents.innerHTML = viewQuizParents;

  return divQuizParents;
};
