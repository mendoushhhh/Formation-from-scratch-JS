// ********************LEs variables****************************

let variable = "Hello";

console.log(variable);

var unTexte = "voici un texte bg";

// constante = const , c'est une donné qu'on ne peut pas bouger , il ne pas obtenir une autre valeur par la suite

// const Name = "julie";
// console.log(Name);
// const Name = "mirabelle";


// Name = "charles";
// console.log(Name) ----> ça , ça ne fonctionnera pas 
//  mais si tu fais en renvanche

// let Name = "julie";

//  Name = "mirabelle";
// console.log(Name);
// let , la variable peut évoluer  , on peut réassigner une valeur a cela :)!

let unChiffre = 24;
unChiffre = 22;

// en js que tu choissie les simple guillemet ou les guillemet de la touche 4 c'est la même chose ... genre ya pas de différence que ce soit " " ou '' je suis l

// concaténation

let chaine = "je suis une des chaines de caractère";

let nouvelleChaine = "chaine précédente:" + chaine;

//  tu met + quand ya aps bcp de concatéantion mais si tu vois que ya bp de texte alors il conseille cela

// cocnaténation avec guillemet altgr+7, qu'on mette le plus ou les accolate algr le resultat reste le meme hein

let autreConcatenation = `Chaine précédente : ${chaine}. Voilà, c'était le contenu`;


// let autreConc = `chaine précédente: ${chaine}. Voila, c'étais ce que je voulais faire`;

console.log(autreConcatenation);



// Type de données


// string veut dire chaine de caractère

let string = "Je suis une chaine de caractère";
let number = 24;
// // en revanche 24 si tu lui met entre guillemet c'est une chiane de caractère si tu enelove les guilemet c'est un number

// // le boolean c'est soit un choix soit l'autre , vrai ou faux , c'eest très utile quand on aprle d'un boolean on met sans le guillemets
let boolean = false;

// // Tableau , il y a des crochets  !let array, veut dire tableau et attention il a des crochets pcq ya deux choses ya les tableaux et les objets  !

let array = ["je ", "suis", 47, true];

// // obets , accolades {}

let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

console.log(arbre);





// les opérateurs

console.log(4 + 5);
console.log(4 - 5);
console.log(4 * 5);
console.log(4 / 5);
console.log(4 ** 5);

// opérateurs d'affectations

let total = 0;
total++;

// total = total +1;
// ça veut dire enfait tu rajoute/i crémente 1 , c'est juste pour écrire plus vite et c mieux d'écrire ++ pcq sinn ça se fait pas vrmt

total += 5;
total -= 4;
total *= 2;
console.log(total);

// Structure de contrôle

// on va faire des comparaison

let x = 3;

let y = "3";
// une fois que t'as dis le if quoi qu'il arrive ilf aut mettre des parenthèses
// if (x > y) {
//   alert("tg");
// } else {
//   alert("Y plus grand que x enfait");
// }







// pour tesetr si une variable
if (x) {
  console.log("x existe");
}



// pour assigner une vakeur c'est tjrs = simple !!! pas let potion === 3;
// triple =  teste l'égalité en type et contenu (sens stricte enfait )

// if(x===y) {
//     console.log('sont égaux')
// }else {
//     console.log('pas egaux')
// }

// double = c'est pas pareil, genre prend l'égalité sans prendre en compte le type , juste la valeur

if (x == y) {
  console.log("sont égaux");
} else {
  console.log("pas egaux");
}

//  ici malgré le fait que let y = a des guullemet entre le deux il dit que c'est "égaux alors que avec 3 egal c'et pas egaux , pcq enfait il teste l'égalité de valeurs sans prendre en compte le type"

//  || ou
//  && et

// si c'étais && il faut que toutes les conditions soient réunis  !
if (x < y || x > 1) {
  console.log("oui");
}

// *************Les fonctions ******************************

// il y aplusieurs facons de déclarer une focntion  , par exemple la vieille façon de le faire
function faireQuelqueChose() {
  console.log("je fais un truc");
  alert("calcul terminé");
  console.log(5 + 6);
}
// la on voit la fonction a une algorithle de choses a faire , un algorithme , une focntion c'est un peu comme une recette de cuisine on met tout puis ça se déclenche , on automatise quelque chose

// attention il faut imperativemnt appelelr la fonction pour qu'elle se joue !
faireQuelqueChose();

// fonction fléché
const addition = (a, b) => {
  console.log(a + b);
};
addition(4, 3);
addition(1254852, 54858595);
// l'importance des couleurs il sait que si sa fonction est pas affihé en bleu c qu'il y a un problème dans sa syntaxe( c biend 'avoir un bon thème )

// si tu vois = et une flcèhe dis toi bien que t'es face a une fonction, ya pas de secret c la répétion
// ya deux type de fonction qui fonctionne , ces fonctions font la meême chose juste la fonction fléché est pljus mdoerne , ya des developpeurs qui code de manière mdoerne qui utilisent cela et c vraiq u'il y a quelques eptites différences

// la portée des variables
// return ca permet de reoturner els choses ou de mettre fin a une fonction
function add2() {
  let num = 4;
  consol.log(num + 2);
  // voir sur icloud j'ai filmé
}
// console.log(num);   tu vois que en faisant consol log npour voir le contenu de num bah ils disent qu'ile st pas défini pq ? pcq elle a été déclarer dans la function et donc elle ne fonctionne que la par contre si tu déplace let num en dehors alors la ça va fonctionner

// attention tout ce docuement compte il lit tout ça avant d'executer ces dernière focntions
