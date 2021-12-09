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

let oignon = new Ingredients("un oignon", "entier", 1);
let oeuf = new Ingredients("3 oeufs", "entier", 3);
let sel = new Ingredients("du sel", "moulu", 1);
let cumin = new Ingredients("du cumin", "moulu", 1);
let fromage = new Ingredients("du fromage", "entier", 1);
let eau = new Ingredients("de l'eau", "liquide", 1);

epicerie.ingredients = [oignon, oeuf, sel, cumin, fromage, eau];

// Objets 

let couteau = {
    nom: "Couteau",
    action: "coupé",
    couper(ingredient){
        if (ingredient.etat == "entier") {
            ingredient.etat = "coupé";
            console.log(`${nassim.nom} découpe ${ingredient.nom}` );
        }
    }
}

let poele = {
    nom: "Poêle",
    content: [],
    cuir(){
        setTimeout(()=> {this.content[0].etat = "cuite";
        console.log(`L'omelette de ${nassim.nom} est prête !`);
    }, 4000)
    } 
}

let bol = {
    nom: "Bol",
    content: [],
    melanger(nomMelange){
        let newMelange = {
            nom : nomMelange,
            etat : "pas cuit"
        }
        while(this.content.length > 0) {
            this.content.shift();
        }
        this.content.push(newMelange);
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