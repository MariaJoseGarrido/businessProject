import { myFunction } from './lib/index.js';
import { menu } from './lib/view/templateMenu.js';
import { changeRoute } from './lib/router.js';
import { kids } from './lib/view/templateKids.js';
import { parents } from './lib/view/templateParents.js'

const init = () => {
  document.getElementById('root').innerHTML = menu()
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRoute(window.location.hash)
  })
}

window.addEventListener('load', init)