// Rappel des types de données

let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //type undefined
// revoir cela il aavit dit qqch d'interressant  avec undefined et null sjais plus


// Révision 10-12------------------------------------
//  en gros il disait que tu demandes quelque chose qui n'a pas été définit tout simplement on a rien attribuer a maVariable tu vois
// typeof ça sert a voir le type de  variable, exemple : 

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof maVariable);






// Tableaux ****************************************************

let array = ["Bordeaux", "Toulouse", "Nantes"];
console.log(array);
// : la length c'est le nombre d'élement qu'il y a dans le tableau

// un tableau de 3 élement

// console.log(array);
// ya tjrs un décalage pusiquond émarre au numéro 0

// mn si je te dis qu'ilf aut que je fasse apparaitre que toulouse dans mon console.log

// console.log(array[2]);
// console.log(array[1]); c toulouse , si tu met 0  c bordeaux


// a retenir: dans un objet on met des accolades et dans un tableau on met des crochets

// et si je veux afficher la lettre du pays gernre

// console.log(array[0] [3]); tu as donc ici la lettre d de Bordeaux


// révision 10-12(sans regarder)--------------------

let parray = [ "Bruxelles", "Liège", "Bastogne","Limbourg", "Charleroi","Evere","Schaerbeek"];
console.log(parray);

console.log(parray[0] [0]);


// pour info array signifie tableau en anglais














// conseil très important : c'est pas obligatoire de tout retenir , ce quie st important c'est de savoir ou retrouvz les informations c'est une organsiation qu'ond éveloppe a force de développer des choses mais ne cherchezz pas a retenir ça erait bête et par exemple cela ici les tablaux etc c'esst quelque chose que vous alle retenir naturellement connaitre a force de les faire

let array2 = ["Bordeaux", [24,11,18,22,24,22,203,66,6587], true, [1, 2], { nom: "Denis" }];
// enfait les objets ont pas jsute des accolades mais aussi un index  ici c'est nom , a chque partie de l'objet il y a un index ,c'est comment on va appelelr cette espace de stockage

console.log(array2[1] [5]);


// console.log(array2[3] [1]); 




// Les objets*******************************************

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

console.log(objet);

// ici tu vosi tjrs index et valeur , index valeur  et c classé par odre alphabetique dans le console.log

// console.log(objet);
// je voudrais afficher l'age de mon utilisateur







// révision 10-12---------------------------------------

console.log(objet.technos [2] [2]);
objet.adresse = "25 rue des loisirs";

console.log(objet);
// u vois que t'as ajouter la rue 


// autre exemple

let pulsarMateriaux = {
  pseudo:"antoine",
  age: 44,
  loisirs:["foot", "lutte", "jogging", "natation","hockey"],
  adresse: "rue des vantouses n°23"
}
console.log(pulsarMateriaux);

console.log(pulsarMateriaux.loisirs [2] [6]);

// je veux écraser et remplacer un contenu de l'objet exemple adresse différente

pulsarMateriaux.adresse = "rue des  4 lignes 36";
console.log(pulsarMateriaux);
// pas oublier de mettre a jour l'objet !!!


let purpose = [
  {
    pseudo: "marie",
    age:55,
    technos:["js", "php", "python"],
    admin: false,
  },
  {
    pseudo:"arnaud",
    age:35,
    technos: ["html", "css", "angular"],
    admin:false,
    },

    {
      pseudo:"pascal",
      age:33,
      technos:["java","python","javascript"],
      admin:true,
    }




]

















console.log(objet.technos[1] [2]);



// console.log(objet.age);

// si ej voulais afficher els technos, la one st a l'entrée d'un array  et si je voulais afficher juste javascript objet.techno le 0  et si je voulais afficher le a de javascript le premier tu fais [1]
// console.log(objet.technos[0] [1]);

// on veut ajouter une nouvelle ligne tu fais objet.

// objet.adresse = "22 rue du code"

// mais si t'avais dis objet.age ala place d'adresse bah age aurait ecraser cela parla valeur précédente
//  en js on peit changer un boolean en number puis le rechanger etc, y inclkure des tabkeaux dans de tabeaux etc a l'infini  , js c'est ça que les gens repproches c'est qu'il est bcp trop permissif

// on va se faire une base de données d'utilisateur*******************************************

// on va faire encore deux autre objet mais dans un tableau
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  // la c le premier objet
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];






// on va tjrs trouver , c souvent qu'on va trouver des données en js quasimenttt le temps

// ici devant nous on appelle cela donc une base de donnée , et on part d'un taleau , un tebleau avec 3 objets a l'inteieur
// on peut se balader avec un point mtn vu qu'on est dans un objet
console.log(data[2].technos[0][1]);









// ******************** Les structures de contrôle***********************

// ce sont des moyens de contrôler les choses enfait , elles sont paq toutes forcément utile donc on passera vite dessus

if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + "  est plus âgé que " + data[1].pseudo);
} else {
  // valeur si faux
}




// révision******************************************

if(data[1].age < data[2].age) {
  console.log(data[1].pseudo + " est plus jeune que " + data[2].pseudo);
  
}else {
  alert("nulll");
}









// en terme de syntaxte tu peux écrire aussi , les accolades en js ça veut dire j'ai plusieurs lignes a mettre tu vois si t'en a qu'une seul t pas obliger de mettre les accolades
// exemple

// if (valeur a tester )  valeur si vrai
// ou if(valeur à tester)
//     valeur si vrai
// else
//  valeur si faux

// ou
// valeur à tester ? si vrai : si faux

// while

let w = 0;

while (w < 10) {
  w++;
  console.log(w);
}

// regarde dans la console tu vas voir et comprendre , on l'utilise pas si souvent que ça pcq pour le prof la boucle for est bcp plus forte que le while

// do while , ça se réprésente comment :

let d = 0;

do {
    d++;
    console.log(d);

}while(d < 5 )

// genre tu me fais ça tant que d n'est pas égale a 5

//  les boucle for(les 2types )*****************************************
// la boucle for est bcp plus forte que while !!! pour ça il s'en sert pas bcp le while


//  quelque chose de bcp bcp bcp plus utile c'est les boucle for et il a souvent vu cela dans du code
//  c lui il a mis une variable et inventé le nom const , ça veut dire que dans data la chaque élement individuellement je vais 'lappeller user et lui il va faire  tourner le tableau et à chaque tours on pourrait lui donner une logique
// 1) on met le nom d'une variable, user ou autre , pour retrouver 
// 2) of data: genre dans data dans ma base de donnée chaque élement individuellement je vais 'lappeller user, ligne 195
// 3) donc on va faire tourner le tableau de notre utiliitauer et a chaque tour in lui donne une logique 
// for (const user of data) {
//   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;

//   // ici on va faire une logique d'fichae au lieud 'afficher tjrs dans la console on va ajouter dans le body
//   // voir 33min
// }



// Révision-----------------------------------------

for (const poire of data) {

document.body.innerHTML += `<li>${poire.age} ans - ${poire.pseudo}  </li>`;
document.body.innerHTML += `<h4>Technos maitrisés:  ${poire.technos}</h4>`;

}
















// cette boucle est pas mal utilisé hein mais moi j'utilise ça le plus :
// ça veut dire i tu pars de 0
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i]);
  // on vient de chercher nos 3 élements

  document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}
// length == la longueur
// 36min-45
// on déclare la valeur de i en gros jusque ou on boucle , genre tant que i n'est pas a 3 bah tu continues d'exécuter ta boucle , on incrémente donc i si la condition 2 n'est pas remplie
// la boucle for une fois qu'on la maitrise on pourra faire blindé de choses

// pour le switch ***********************************************

// étape1) je voudrais  rajouter une evenmeent sur le body au click

// document.body.addEventListener("click", (e) => {
//   // savoir sur quoi j'ai cliqué
//   console.log(e.target);
//   // la balsie c un objet donc tu peux faire .id :
//   console.log(e.target.id);
//   // // mtn je voudraiq genre quand je cliquesur js le fond devient jaune , quand je clique la le fond devant comme ça etc etc

//   // if (e.target.id === "javascript") {
//   //   document.body.style.background = "yellow";
//   //   document.body.style.color = "black"

//   // }
//   // if (e.target.id === "php") {
//   //   document.body.style.background = "red";
//   //   document.body.style.color = "white"
//   // }
//   // if (e.target.id === "python") {
//   //   document.body.style.background = "blue";
//   //   document.body.style.color = "pink"
//   // }

//   // // la j'ai juste 3 élements , en réalité on pourrait se récupérer ça dans un switch

//   switch (e.target.id) {
//     case "javascript":
//       document.body.style.background = "yellow";
//       break;

//     case "php":
//       document.body.style.background = "violet";
//       break;
//     case "python":
//       document.body.style.background = "blue";
//       break;
//     default:
//       null;
//   }
// // regarde mtn quand tu clique c terribleeeeee 
//   // on comprend ces structures de contrôle en les pratiquant
// });


// révision 11-12-----------------------------------


// je vais le refaire sans regarder , genre une fois normal et une fois avec le switch vu ue c'est ça le sujet du cours

document.addEventListener('click', (e) => {

 console.log(e.target.id);

//  if(e.target.id === "javascript") {

//        document.body.style.background = "red";

//  }
//  if(e.target.id === "php") {

//   document.body.style.background = "blue";

// }
// if(e.target.id === "python") {

//   document.body.style.background = "pink";

// }

// mtn si je met cela dans une switch


switch(e.target.id) {
  case "javascript":
  document.body.style.background = "blue";
  break

  case "php":
    document.body.style.background = "red";
    break

    case "python":
      document.body.style.background = "pink"
      document.body.style.color = "white"
      break

    default:
      null
// la je dis genre sinon ne fait rien
  

}
 


})














// 45min-


// *************Cas pratique 1)  pas mal de choses interessantes dans la manipulation de données 



// c'est a 3:10 cela t'as chabouler quelques enroules enfait mais à l'aise c 'est rien 
// les Datasets*************************************
// il faut savoir que c qqch qu'il a faillit présenter dans la aprtie sur la manipulation du Dom mais faut savoir que la frontière entre la manipulation du DOM et de données est assez fine hein donc ya des élements que je vous donne que j'aurais très bien pu donner dans la manipualtion du dom et inversément


// ce sont des donnéesquo'n peut mettre dans des balises , balise c en quelque sorte des objets

const h3js = document.getElementById("javascript");
console.log(h3js.id);
// :on va voir que c'est une balise  et elle a un id  , on peut dire h3js.id on obtient que javascript h3js.class on obtient que sa classe
// on pourrait avoir besoin de mettre des données , de la dara dans ce balises si on veut pas utiliser l'id admettons qu cette id on l'utilise pour autre chose alors on fait dataset, tu vas sur html et tu rajoutes data-qqch (normalement c'étias dans l'autre fichier j'ai copier coller l'hrml bref tu te débrouilleras )


// donc la mtn on fait 
// console.log(h3js.dataset);
// tu demandes de t'affiher tous les dataset que possède cette balise(voir3:14)
console.log(h3js.dataset.lang);
//  one st rentré dans objet pq objet ?pcq accolade , pcq on a un index : qqch , tableau ya jaamis ça !!!

// mtn tiens on va se selectionner tous nos h3 

const h3 = document.querySelectorAll("h3");

// pour chacun d'eux j'aimerais que tu me fasses un consol.log

// h3.forEach((language) => console.log(language.dataset.lang)
// );


// les Regex***************************************
// Ce sont des expressions régulières ça nous permet de tester des choses tester des chaines de caractères et voir si elels correspondent par exemple typiquement un email on sait qu'ul doit pas contenir de caractères spéciaux a apart els tirets de lq touch 6 et touch8, il peut contenir des chiffres oui, un arobase , ilf aut qu'il ait un nom de domaine et puis derière un point com .fr fin faut pas qu'il ait un charabia comme ça super long derrière
// elle est pas méga utlisé la méthode search pour ça que je vous la dit rapidement  

let mail = "from_sratch33@gmail.com";
console.log(mail.search(/from/));
//  elle est pas megautilisé la méthode search pour ça il la dit rapidement
// console.log(mail.search(/from/, "de"));
// on teste si l'expression régulière elle match avec la chaine de caractère qu'on a passer ici 
// console.log(mail);

// console.log(mail.match(/[zug]));
// console.log(mail.match(/[12]/));


// parfois quand tu demande a un utilisagteur de mettee au moins un caractère spécial au moins une majuscule dans leur mot de apsse he bien justement  avec une regex qu'on peut controler cela qu'on peut controler que tout correspond donc en faisant comme ça je cherche si les lettres zug (z u ou g figurent dans le mail let mail e, haut)

// si on voulait tous les chifffres on ferait 
// la enfait on check si ya un chiffre et oui ya un 3 ça marche
console.log(mail.match(/\d/));
// je veux que tu matches toutes les elttres , dès qu'il y a une lettre c bon ça marche 

console.log(mail.match(/[a-z]/));
// null ça rtourne false et ces trucs la qu'on voit ça return true



// il a une feuillecheat cheatography regular expression ou il voit tous ça

// comment contrôler un mail, <w tus les caractères chiffres ou lettre (word ça comprend aussi les chiffres)

// console.log(mail.match(/[\w_-]+@[\w-]/));
// 3:25revoir ici c chiant haha-3:29 
// interessant de savoir comprendre les regex après t'es pas obliger des les mémoriser tu viis tant que ça marche même si tu comrpend pas vrmt hahaha en gros c ça qu'il entrain de nous dire 3:28revois :)))


let separator = 265264849;
// 3:30 enfait lui même il trouve des codes etc haha  et il dit que clele qu'on fait les gens sont plus fiable en générale croyez moi 3:30




// form checker 










