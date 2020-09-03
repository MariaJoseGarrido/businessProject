import { home } from './view/templateHome.js';
import { parents } from './view/templateParents.js';
import { menu } from './view/templateMenu.js';
import { kids } from './view/templateKids.js';
import { Contact } from './view/templateContact.js';
import { quizParents } from './view/templateQuizParents.js';
import { games } from './view/templateGames.js'

export const changeRoute = (hash) => {
  if ( hash === '#/'){
    return showTemplate(hash)
  } else if ( hash === '#/parents'){
    return showTemplate(hash)
  } else if ( hash === '#/quizParents'){
    return showTemplate(hash)
  } else if ( hash === '#/kids'){
    return showTemplate(hash)
  } else if ( hash === '#/games'){
    return showTemplate(hash)
  } else if ( hash === '#/Contact'){
    return showTemplate(hash)
  } 
} 

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = menu();

  switch (hash) {
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/parents':
      containerRoot.appendChild(parents());
      break;
    case '#/quizParents':
      containerRoot.appendChild(quizParents());
      break;
    case '#/kids':
      containerRoot.appendChild(kids());
      break;
    case '#/games':
      containerRoot.appendChild(games());
      break;
    case '#/Contact':
        containerRoot.appendChild(Contact());
      break;
    default:
      containerRoot.innerHTML= `<h2>404 NOT FOUND</h2>`    
  }
}











