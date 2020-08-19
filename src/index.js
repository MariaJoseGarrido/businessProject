import { changeRouter } from "./lib/router.js";
import { menu } from "./lib/view/templateMenu.js";

const init = () => {
    document.getElementById('root').innerHTML = menu();

window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash);
})
} 
window.addEventListener('load', init)

