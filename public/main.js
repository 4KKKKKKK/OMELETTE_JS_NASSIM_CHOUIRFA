import {maison,epicerie,nassim,bol,poele,nullePart} from "./module/instances.js";

nullePart.personnes.push(nassim);
nassim.lieu = nullePart;

nassim.seDeplacer(nullePart, maison);
nassim.seDeplacer(maison, epicerie);

nassim.prendrePanier(epicerie);

// nassim.prendreIngredients(ingredient)

nassim.payerArticle(epicerie);

nassim.seDeplacer(epicerie, maison);

nassim.vider();

nassim.seDeplacer(maison, epicerie);

nassim.remettrePanier(epicerie);

nassim.seDeplacer(epicerie, maison);

nassim.couper();

nassim.melanger("omelette");