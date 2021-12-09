import {maison,epicerie,nassim,bol,poele,nullePart} from "./module/instances.js";

nullePart.personnes.push(nassim);
nassim.lieu = nullePart;

nassim.seDeplacer(nullePart, maison);
nassim.seDeplacer(maison, epicerie);

nassim.prendrePanier(epicerie);

for (let i = 0; i < epicerie.ingredients.length; i++) {
    nassim.mainDroite[0].content.push(epicerie.ingredients[i]);
    console.log(`${epicerie.ingredients[i].nom} a été ajouté a mon panier`);
}
epicerie.ingredients.forEach(e => {
    nassim.payerArticle(e)
});

nassim.payerArticle(epicerie);

nassim.seDeplacer(epicerie, maison);

nassim.vider();

nassim.seDeplacer(maison, epicerie);

nassim.remettrePanier(epicerie);

nassim.seDeplacer(epicerie, maison);

nassim.couper();

nassim.melanger("omelette");

nassim.viderBol();

poele.cuir(poele.content[0]);

