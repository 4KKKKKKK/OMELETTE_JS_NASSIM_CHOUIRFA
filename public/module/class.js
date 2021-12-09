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
            arrivee.personnes.push(this);
            dar.personnes.splice(dar.personnes.indexOf(this), 1);

            this.lieu = arrivee;
            console.log(`${this.nom} est actuellemement à la ${this.lieu.nom}`);
        }

        //methode pour prendre un panier
        this.prendrePanier = (place) => {
            if (place.nom == "Epicerie") {
                this.mainDroite.push(place.sacPaniers.shift());
                console.log(`${this.nom} a pris le ${this.mainDroite[0].type}`);
            }
        }

        //methode pour mettre des ingrédients dans son panier
        

        //mzthode pour acheter els ingrédients pris
        this.payerArticle = (place) =>{
            if (place.nom == "Epicerie") {
                place.ingredients.forEach(e => {
                    this.mainDroite[0].content.push(e);
                    this.argent -= e.prix;
                    console.log(`${this.nom} a acheter ${e.nom} au prix de : ${e.prix}€. Il lui reste ${this.argent}`);
                });
            }
        }

        //methode pour vider e$le panier
        this.vider = () => {
            while(this.mainDroite[0].content.length > 0){
                console.log(`${this.nom} avez ajouté ${this.mainDroite[0].content[0].nom} dans le big bol !`);
                bol.content.push(this.mainDroite[0].content.shift());
            }
        }

        //methode pour remettre le panier au mahal
        this.remettrePanier = (place) => {
            if (place.nom == "Epicerie") {
                place.sacPaniers.push(this.mainDroite.shift());
                console.log(`${this.nom} a remis le ${place.sacPaniers[place.sacPaniers.length-1].type}`);
            }
        }

        //methode pour couper les ingredients entier
        this.couper = () => {
            bol.content.forEach(e => {
                couteau.couper(e);
            });
        }

        //methode pour melanger le contenu du bol
        this.melanger = (nomMelange) => {
            bol.melanger(nomMelange)
            console.log("Je melange je melange je melange je melange, on a assez travaillez pendant l'escalavage sal*pe");
        }

        //methode pour vider le bol
        this.viderBol = () => {
            poele.content.push(bol.content.shift());
            console.log(`${this.nom} vide le bol big bol dans la poele`);
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