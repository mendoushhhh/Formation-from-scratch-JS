// étape 3 : après avoir fait le css

const target = document.getElementById("target");
//  le getelemntbyid a une meilleur performance avec id que queryselector 53min

let array = ["développeur", "photographe", "créatif"];

// on va devoir injecter donc , ce qu'il va falloir s'imagienr c'est l'injection de ce mot "développeur", puis l'autre puis l'autre !!

target.textContent = array[0][1];
// je te passe array numéro 0 , tu void qu'l injecte le développeur , si je lui avait dit autre il aurait, si je lui avait i jecter 1 il aurait injecter le é etc etc on peut se balader la dedans

// mtn ilf audrait faire en sorte que la création de elttre se fasse de façon automatique

const createLetter = () => {
  const letter = document.createElement("span");
  target.app;
};

// const createLetter = () => {
//     const letter = document.createElement('span');
//     target.appendChild(letter);
//     //  on dit que ce span est l'enfant de target

//     letter.textContent = array[wordIndex][letterIndex];
// // on lui dit tu démarre a wordindex genre word idex il est juste en haut dans la variable array dévelppeur, photographe, créatif, et letterindex = 0 aussi

// };

createLetter();

// // setInterval il est pas parfait mais bon
// setInterval(() => {
//     letterIndex++;
//     createLetter();
//     // vu que dans la focntion on va fair eplusiurs lignes faut la mettre comme ceci entre crochet

//     // mtn on devait dire quand ce mot la par exemple developpeur, sa length est u bout bah on passe au mot suvant donc onfati wordIndex +1 et enfait lui il préfère le setTimeout  et hop après il arrête de se jouer , sachez que c quna dmême mieux pusique en réalité si on le emt dans une fonction on va pouvoir fairede la recurciviter cad qu'on peut avoir une fonction qui 'appelle elle même

// }, 200);

// const loop = () => {

//     setTimeout(() => {
//         if(wordIndex >= array.length){
//             wordIndex = 0;
//             letterIndex = 0;
//             loop;
//         }
//        else if(letterIndex < array[wordIndex].length) {
//              // 1:01 a   revoir
//              createLetter();
//              letterIndex++;
//              loop();

//         }else {
//             wordIndex++;
//             letterIndex = 0;
//             setTimeout(() => {
//                 loop();

//             }, 2800);
//         }

//         },60);
//     };
//     loop();

// Méthode string********************************

// methode c'est une fonction à laquelle on a accès, elle est d"ja codé et on y a accès terrible

let string = "javasacript est un langage orienté objet ";

// tout ce qu'il montre ici ça peut être très pratique a certains moment en fait
// console.log(typeof "42");
// // 1:10-1:12 typeof , eval, parseInt

// console.log(eval(parseInt("1") + 2));
// console.log(isNan(string));

// console.log(string2.length);
// console.log(string2.indexOf(("langage")); Retourne  - 1 s'il ne le connait pas

// let newString = string2.slice(2);

// // console.log(string2[string2.length - 1]);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string.replace("Javascript", "PHP"));

// Méthode Numbers**************************

// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// donc faut comprendre que ça ça peut $être très pratique ppur récupérer des chiffres dans une chaine de caractères

// Math. (après je balance toutes les méthodes acollé a cette objet)

// // console.log(Math.PI);
// console.log(Mathround(4.5));
// arrondir au bas c flooor
console.log(Math.floor(4.9));
// arrondir au plus haut
console.log(Math.ceil(4.1));
// toutes ces méthode c pour arrondire
// moyen mémotechnique , fleur c au plus bas et ceil , ciel c au plus haut
console.log(Math.pow(2, 7));
console.log(Math.sqrt(16));

// console.log(Math.random() * 50);
console.log(Math.floor(Math.random() * 50));

// si ya une méthode a retenir pour les chiffres j'aurais dis celle-ci

let array3 = ["javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// let newArray = [...array3, ...array4];

// console.log(newArray);

// console.log(array3.join);
// console.log(array3.join('&&&&&&'));

// très pratique toutes ces méthodes
// console.log(array3.slice(1));
// console.log(newArray.slice(3, 5));

// 1:35 pour voir tout cela

// console.log(array3.indexOf("Python"));

// array3.forEach((langauges) => console.log(languages));

// console.log(array3.every((language) => language == "Php"));
// // c pour dire le every est ce que dans chacun de ces élement ya cet élement p
// console.log(array3.some((language) => language == "Php"));

// // enfait le shifrt va enlever le premier index du tableau et puis on garde le reste hein ,
// let shift = array3.shift();
// console.log(array3);

// dernier élement c'est pop , donc ça retire le dernier élement

// console.log(array3.pop());

// méthode splice

const restArray = array3.splice(1, 1, "C++");
// j'aimerais que tu rajoutes c++ a notre tableau, et si je dis log moi resteArray bah il va justa gardr php pq cq php est situé ici  si j'avais dit  1:46
console.log(array3);

// le reste array va juste garder php

// c'est plus des choses enfait qu'on utilisent quand on a vert besoin on fait des recherches sur google stakcoverflow , onf ait une recherche sur google sur stackoverflow

// Important *************************************
// (enfin les choses vraiment importante)
// chose très importante dans la manipulation de array,

// reduce

let arrayNumber = [4, 74, 28, 12, 1];

// console.log(arrayNumber.reduce(x, y) => x + y);

// push: une des manipualtion les plus importante
arrayNumber.push("coucou");
arrayNumber.push(17);
console.log(arrayNumber);

// 1:50
//  c'esg pour traitr les données d'un tableau ces méthodes
// Filter, sort , Map(si on connait ces  3 methodes si on sait les utiliser on va être très très puissant en js, très très fort )
// filter = ça permet de filtrer , garder que certain élements d'un tableau
// sort ça permet de trier , du plus petit au plus grand du plus grand au plus petit

// Map la plus importante , ça permet de lister les choses de maper les choses , c'est un peu comme un foreach mais en mieux , fin en tout cas quand on traite les objets et tableaux

// console.log(arrayNumber.filter(number => number > 10));
// tu vas me garder que les number qui sont supérieur a 10

// 1:52

// 1:54
// console.log(arrayNumber.sort(a, b) => a - b);
// la on a classer du plus grand au plus petit si c'étais bb - a du plus petit au plus grand

// Retenez bien la méthdoe sort , très pratique , très utile après biensur la on a montrez une fois on a le principe il faut un peud e rpatique pour mettre cela en place avec nos propres bouts de code et tt si onest vrmt nouveau en js , sachez que c pas tant barbare que cela , sahe aue cpas tant barbe que ça on retrouve souvent la même façon de faire , on retrouve souvent la même façon de faire c'est a dire on nomme soit mon tableau soit mon obejt on lui applique la methode voir 1:54 très bien dit !!

// 1:56-1:59

//  la formation d'un map 2:02

// document.body.innerHTML = arrayNumber.map((number) => '<li>${number} </li>').join("");

// // logique du map , se balader dans un objet et même mettre de la logique d'affichage (êxtremement +filtrer des élements du plus grand au plus petit
// // puissant)afficher un map à l'écran  sur des objets c'est bcp plus puissant les données ligne 2:01-2:0   à revoir absolument !!!
// document.body.innerHTML =  data.map(user) =>
// '
// <div><h2>${user}</h2> </div>

// '
// )

// cette logique la est êxtremement précieuse on peut se la garder de côté !!!!!

// Mise en pratique du cours maintenant  !!!!********

// (aller sur password maker )

// Les Dates ****************************************

// 2:48
// c'est un peu particulier els dates :
// 1)format js basique2) texttemp3)isostring

// Date classique

let date = new Date();
// format qu'on renonctre pas si souvent que ça en js

// console.log(date);

// 2)Timestamp,
//  c'est le nombre de seconde qui se sont écoulé entre le 1er janvier 1970 et mtn c un chiffre assez enorme

let timestamp = Date.parse(date);
console.log(timestamp);
// voila le nombre de secondes la en milisecondes depuis 1970 qui se sont écoulé, les 3 derniers chiffres ce sont des millisecondes

// parse ça permet de transformer une date javascript en texte , donc il faut qu'a l'intéreiur de parse on dise par exemple date(parse est une méthode qui apaprtient a l'objet date)

// 3) 3eme format de date très répandu  - isoString

console.log(date.toISOString());

// ps: cette focntion est écrite différenemment comme ça tu sais des fois il l'utilise celle citsb

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-Fr", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

// c'est une méthode tu peux mettre les langues que tu veux l'heure que tu veux etc etc !!!, enfait elle transforme la langue du rendu de la date et ensuite on lui dit comment on la veut on lui dit genre tiens les années je les veux en numérique , le mois en long , et le jour en numérique vu qu'il sqait que c une date française il sait qu'il va devoir mettre le jour a l'année tu vois 

return newDate;

}

console.log(dateParser(date));
console.log(dateParser(timestamp));
console.log(dateParser(iso));


// :il recommande de faire l'exercice sur els dates voir en dessous de la vidéo:  fais le projet , le petit exercice de date 



// Destructuring ************************************
// ça permet enfait d'isoler les données !! puis après tu peux même les organiser(mettre dans l'ordre) 
// destructurer enfait , on va surement voir cela dans du code , ça veut juste dire  je vais créer une variable qui s'appelle destVar genre : const destVar = moreData.destVar; et elle sera équivalente a moreData.destVar et donc pour éviter d'écrire tout cela bah on se le met entre accolade et on a pas besoin ensuite de le mettre a coté reg 
// const {destVar} = moreData


// 3:00
Let moreData = {
    destVar: ["Element 1", "Element 2"],
}
const { destVar} = moreData;

let array5 = {70, 80, 90};
console.log(array5[0]);
console.log(array5[1]);
console.log(array5[2]);
// 70,80,90

// mtn regarde on peut déstructurer par exemple

let array5 = {70, 80, 90};
let {x, y, z} = array5;
// console.log(x, y, z);
// ou on peut les mettre comme ça séparement hein reagarde 
console.log(x);
console.log(y);
console.log(z);


// mtn on pourrait utiliser ne pas utiliser la méthode d'avant la tolocaledestring 3:04-3:10 pour faire clea pour un truc du code qu'on a déja fait 

console.log(iso);
const dateDestructuring = (chaine) => {
 let newDate = chaine.split('T') [0];
//  console.log(newDate);
//  avec split la je dis partout ou tu as un tiret tu casses le truc
 newDate.split("-")
  
};
// console.log(dateDestructuring(iso));








 


