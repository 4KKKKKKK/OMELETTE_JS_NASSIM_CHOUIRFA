import { epicerie, bol, couteau, poele} from "./instances.js";

class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom;
        this.lieu = lieu; //string
        this.argent = argent; //number
        this.mainDroite = []; //tableau
        this.mainGauche = [];

        //methode se deplacer
        this.seDeplacer = (dar, arrivee) => {
            arrivee.personne.push(this);
            dar.personne.splice(dar.personne.indexOf(this), 1);

            this.lieu = arrivee;
            console.log(`${this.nom} est actuellemement à la ${this.lieu.nom}`);
        }

        //methode pour prendre un panier
        this.prendrePanier = (place) => {
            if (place.nom == "Epicerie") {
                this.mainDroite.push(place.sacPaniers.shift());
                console.log(`${this.nom} a pris le ${this.mainDroite[1].type}`);
            }
        }

        //methode pour mettre des ingrédients dans son panier
        this.prendreIngredients = (place) => {
            if (place.nom == "Epicerie") {
                place.ingredients.forEach(e => {
                    this.mainGauche[0].content.push(e);
                    console.log(`${this.nom} a mis ${place.nom} dans son panier !`);
                });
            }
        }

        //mzthode pour acheter els ingrédients pris
        this.payerArticle = (place) =>{
            if (place.nom == "Epicerie") {
                place.ingredients.forEach(e => {
                    this.mainDroite[0].content.push(e);
                    this.argent -= e.prix;
                    console.log(`${this.nom} a acheter ${e.nom} au prix de : ${e.prix}€`);
                });
            }
        }
    }
}
class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

export {Personne,Lieu,Ingredients};