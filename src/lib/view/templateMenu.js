export const menu = () => {
  const viewMenu = `
  <img class="hootie-logo" src="./img/HeaderPPT Hootie Hoo.jpg">
  <div id="container">
  <nav>
      <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/parents">Zona Adultos</a>
          <!-- First Tier Drop Down -->      
          </li>
          <li><a href="#/kids">Zona Kids</a>
          <!-- First Tier Drop Down -->
          <ul>
              <li><a href="#">algo</a></li>
              <li><a href="#">algo</a></li>
              <li><a href="#">algo</a>
            <!-- Second Tier Drop Down -->
              <ul>
                  <li><a href="#">algo </a></li>
                  <li><a href="#">algo </a></li>
                  <li><a href="#">algo </a>
                      <!-- Third Tier Drop Down -->
                      <ul>
                          <li><a href="#">algo</a></li>
                          <li><a href="#">algo</a></li>
                          <li><a href="#">algo</a></li>
                      </ul>
                  </li>
              </ul>
              </li>
          </ul>
          </li>
          <li><a href="#">algo que no sabemos</a></li>
          <li><a href="#">algo que no sabemos</a></li>
          <li><a href="#/Contact">Contacto</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
      </ul>
  </nav>
</div>

  `
  return viewMenu;
}
