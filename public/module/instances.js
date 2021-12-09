import {
    Personne,
    Lieu,
    Ingredients
} from "./class.js"

// Personnage

let nassim = new Personne("Nassim", "nullePart", 100);

// Lieu 

let maison = new Lieu("Maison", []);
let epicerie = new Lieu("Epicerie", []);
let nullePart = new Lieu('Nulle Part', []);

//Paniers
epicerie.sacPaniers = [{
        type: "panier Carré",
        content: []
    },
    {
        type: "panier Rond",
        content: []
    },
    {
        type: "panier Charrette",
        content: []
    },
];


// Ingrédients

let oignon = new Ingredients("Oignon", "entier", 1);
let oeuf = new Ingredients("Oeuf", "entier", 3);
let sel = new Ingredients("Sel", "moulu", 1);
let cumin = new Ingredients("Cumin", "moulu", 1);
let fromage = new Ingredients("Fromage", "entier", 1);
let eau = new Ingredients("Eau", "entier", 1);

epicerie.ingredients = [oignon, oeuf, sel, cumin, fromage, eau];

// Objets 

let couteau = {
    nom: "Couteau",
    action: "coupé"
}

let poele = {
    nom: "Poêle",
    content: [],
    cuir() {
        setTimeout(() => {
            this.content[0].etat = "cuit";
        }, 4000)
    }
}

let bol = {
    nom: "Bol",
    content: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: "nomMelange",
            etat: "pas cuit"
        }
    }
}

export {
    maison,
    epicerie,
    nassim,
    oignon,
    oeuf,
    sel,
    cumin,
    fromage,
    eau,
    bol,
    couteau,
    poele,
    nullePart
};