import {maison,epicerie,nassim,bol,poele,nullePart} from "./module/instances.js";
//Anonce du lieu ou je suis
nullePart.personnes.push(nassim);
nassim.lieu = nullePart;

//Anonce de mes déplacements
nassim.seDeplacer(nullePart, maison);
nassim.seDeplacer(maison, epicerie);

//Ke prend mon panier dans le sac a panier de l'epicerie
nassim.prendrePanier(epicerie);

//Anonce de la mise des ingrédients dans mon panier
for (let i = 0; i < epicerie.ingredients.length; i++) {
    nassim.mainDroite[0].content.push(epicerie.ingredients[i]);
    console.log(`${epicerie.ingredients[i].nom} a été ajouté a mon panier`);
}
epicerie.ingredients.forEach(e => {
    nassim.payerArticle(e)
});

//Anonce de paiement de mes ingredients
nassim.payerArticle(epicerie);

//Je rentre a la dar
nassim.seDeplacer(epicerie, maison);

//Je vide mon panier d'article dans mon big bazozo
nassim.vider();

//Je retourne a l'epicerie 
nassim.seDeplacer(maison, epicerie);

//Je depose le panier que j'ai omis de remettre
nassim.remettrePanier(epicerie);

//Jz retourne a la maison
nassim.seDeplacer(epicerie, maison);

//Je coupe mes ingredients qui sont entier -> oeufs, oignon et fromage
nassim.couper();

//Je melange le bazar
nassim.melanger("omelette");

//Je vide le big bol dans la giga poele 
nassim.viderBol();

//J'affiche l'état de mon omelette
poele.cuir(poele.content[0]);