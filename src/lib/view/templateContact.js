export const Contact = () => {
  const divContact = document.createElement('div');

  const viewContact = `
    <div class="infoContact">
    <h3>Esto hacemos...<h/3>
      <div class="container">
        <div class="row">
          <div class="col"><i class="fas fa-graduation-cap"></i></div>
          <div class="col"><i class="fas fa-hand-pointer"></i></div>
          <div class="col"><i class="fas fa-video"></i></div>
          <div class="col"><i class="fas fa-sticky-note"></i></div>
        </div>
      <div class="row">
        <div class="col"><i class="fas fa-pencil-alt"></i></div>
        <div class="col"><i class="fas fa-desktop"></i></div>
        <div class="col"><i class="fas fa-chess"></i></div>
        <div class="col"><i class="fas fa-dragon"></i> Animaciones</div>
      </div>
     </div>
      <h3>Contáctanos para tu próximo proyecto!</h3>
    </div>  
    <div class="contactForm">
      <p> <i class="fas fa-map-marker-alt"></i> Santiago, Chile</p>
      <p><i class="fas fa-envelope"></i> contacto@hootiehoo.cl</p>
      <p><i class="fas fa-envelope"></i> ventas@hootiehoo.cl</p>
      <p></p>
    </div>
  `

  divContact.innerHTML = viewContact;

  return divContact;
}




