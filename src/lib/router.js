import { menu } from "./view/templateMenu.js";

export const changeRouter = (hash) => {
    if (hash === '#home') {
        return showTemplate(hash);
    }

    else if (hash === '#parents') {
        return showTemplate(hash);
    }

    else if (hash === '#kids') {
        return showTemplate(hash);
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = menu();

    switch (hash) {
        case '#home':
            containerRoot.appendChild(home());
            break;
         case '#parents':
                containerRoot.appendChild(parents());
            break;
        case '#kids':
            containerRoot.appendChild(kids());
            break;
    }
}