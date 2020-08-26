export const Contact = () => {
  const divContact = document.createElement("div");

  const viewContact = `
    <section class="infoContact">
    <ul id="categories" class="clr">
    <li class="pusher"></li>
    <li>
        <div>
          <img src="https://howtechhack.com/wp-content/uploads/2018/06/Synfig-Studios-696x392.jpeg" alt=""/>
          <h1 class="text-left">Animaciones</h1>
          <p>...</p>
      </div>
    </li>
      <li>
        <div>
          <img src="https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt=""/>
          <h1 class="text-left">Videos</h1>
          <p>...</p>
      </div>
    </li>
    <li>
        <div>
          <img src="https://www.tuyu.es/digital/wp-content/uploads/2018/04/imagen-corporativa.jpg" alt=""/>
          <h1 class="text-left">Material corporativo</h1>
          <p>...</p>
      </div>
    </li>
    <li>
        <div>
          <img src="https://images.unsplash.com/photo-1561919073-4801940983a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" alt=""/>
          <h1 class="text-left">Ilustraciones</h1>
          <p>..</p>
      </div>
    </li>
    <li class="pusher"></li>
    <li>
        <div>
          <img src="https://specials-images.forbesimg.com/imageserve/5e8507f3ff6c160006cdb219/960x0.jpg?fit=scale" alt=""/>
          <h1 class="text-left">E-Learning tradicional</h1>
          <p>...</p>
      </div>
    </li>
    
    <li>
        <div>
          <img src="https://images.unsplash.com/photo-1584651766658-1b7b47a2cb79?ixlib=rb-1.2.1&auto=format&fit=crop&w=404&q=80" alt=""/>
          <h1 class="text-left">Gamificación</h1>
          <p>...</p>
      </div>
    </li>
    <li class="pusher"></li>
    <li>
        <div>
          <img src="https://www.ingagedigitalmedia.com/uploads/2/1/3/7/21376950/istock-86970841-xxxlarge-1976x1264_orig.jpg" alt=""/>
          <h1 class="text-left">Video learning</h1>
          <p>...</p>
      </div>
    </li>
    <li>
        <div>
          <img src="https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""/>
          <h1 class="text-left">Aplicaciones</h1>
          <p>...</p>
      </div>  
  </ul>
    </section>
    <div class="contactForm">
      <p> <i class="fas fa-map-marker-alt"></i> Santiago, Chile</p>
      <p><i class="fas fa-envelope"></i> contacto@hootiehoo.cl</p>
      <p><i class="fas fa-envelope"></i> ventas@hootiehoo.cl</p>
      <p></p>
    </div>
  `;

  divContact.innerHTML = viewContact;

  return divContact;
};
