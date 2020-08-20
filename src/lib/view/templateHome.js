export const home = () => {
  const divHome = document.createElement('div');
  divHome.className="templateHome"
  const viewHome = `

  <div class="container-tittle-btn-home"> 

    <div class="tittlesHome">
      <h1>Bienvenido/a al curso:</h1>
      <h2>Lorem ipsum dolor sit amet</h2>
    </div>

      <div class="btn-home">
        <button class="btn-entrar">Lorem ips</button>
      </div>
      
  </div>

  <div class="container-video-home"> 
  <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
    frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</div>
  
  `

  /*   <footer>
  <img class="hootie-footer" src="./img/footerPPT Hootie Hoo.jpg">
  </footer> */

  divHome.innerHTML = viewHome;

  return divHome;
}