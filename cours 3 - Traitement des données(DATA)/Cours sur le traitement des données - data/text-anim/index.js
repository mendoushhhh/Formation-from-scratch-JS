// étape 3 : après avoir fait le css  

const target = document.getElementById('target');
//  le getelemntbyid a une meilleur performance avec id que queryselector 53min

let array = ["développeur", "photographe", "créatif"];

// on va devoir injecter donc , ce qu'il va falloir s'imagienr c'est l'injection de ce mot "développeur", puis l'autre puis l'autre !!

target.textContent = array[0] [1];
// je te passe array numéro 0 , tu void qu'l injecte le développeur , si je lui avait dit autre il aurait, si je lui avait i jecter 1 il aurait injecter le é etc etc on peut se balader la dedans 

// mtn ilf audrait faire en sorte que la création de elttre se fasse de façon automatique 

const createLetter = () => {
    const letter = document.createElement("span");
    target.app
}

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);
    //  on dit que ce span est l'enfant de target

}