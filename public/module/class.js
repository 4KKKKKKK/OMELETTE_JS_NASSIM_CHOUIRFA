class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom;
        this.lieu = lieu; //string
        this.argent = argent; //number
        this.mainDroite = []; //tableau
        this.mainGauche = [];
    }
}
class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Outil {
    constructor(nom, action) {
        this.nom = nom;
        this.action = action;
    }
}

class Ingredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}