export const kids = () => {
  const divKids = document.createElement('div');

  const viewKids = `
  /* <div> <h1>ZONA KIDS!</h1>
  <p>amigo puma espuma</p>
  </div>

  <div class="container-tittle-btn-home"> 
      <h1>Bienvenido al curso:</h1>
      <h2>Lorem ipsum dolor sit amet</2>
  </div>

  <div class="container-video-home"> 
    <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/kDjrJ5Mu_OY" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
  </div> */
  `

  divKids.innerHTML = viewKids;

  return divKids;
}