import { home } from './view/templateHome.js';
import { parents } from './view/templateParents.js';
import { menu } from './view/templateMenu.js';
import { kids } from './view/templateKids.js';
<<<<<<< HEAD
import { Contact } from './view/templateContact.js';
=======
import { quizParents } from './view/templateQuizParents.js';
>>>>>>> 9259ce0228ed84bb14289569ccd7beb4eeb5e5b1

export const changeRoute = (hash) => {
  if ( hash === '#/'){
    return showTemplate(hash)
  } else if ( hash === '#/parents'){
    return showTemplate(hash)
  } else if ( hash === '#/quizParents'){
    return showTemplate(hash)
  } else if ( hash === '#/kids'){
    return showTemplate(hash)
  } else if ( hash === '#/Contact'){
    return showTemplate(hash)
  } else {
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
    case '#/Contact':
        containerRoot.appendChild(Contact());
      break;
    default:
      containerRoot.innerHTML= `<h2>404 NOT FOUND</h2>`    
  }
}











