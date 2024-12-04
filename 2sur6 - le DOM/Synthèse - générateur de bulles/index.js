// // etape14

// const counterDisplay = document.querySelector('h3');
// // ce counter display on aimerait lui injecter un compteur

// let counter = 0;
// // quand est ce qu'ion fait evoluer le compteur , quand une bulle est cliquer et avant qu'elle soit remove on incremente de 1  a chque fois
// // // bubble.addEventListener('click', () => {
// //     counter++;
// //     console.log(counter);

// // //     bubble.remove();
// // //  })

// // mtn il nous reste a injecter ce chiffre a counter

// // bubble.addEventListener('click', () => {
// //    counter++;
// //    console.log(counter);
// //   counterDisplay.textContent  = counter;
// // //   on injecte la valeur de counter au h3 .text content ousique on écris du texte a l'interieur du h3
// //      bubble.remove();
// //   })

// // en gros c'est un générateur de bulles avec toutes sortes de bulles avec des tailles différentes etc et qui compte les bulles qu'on explose (manipulation du dom), on va créer des bulles avec tailes diffrentes et direction différents et toute tendance a monter et on va faire en sorte ue ces bulles aille tout en haut(on varevoir pleins de chose de ce qu'on a fais)

// // :création de la logiqure d'une seul bubble ---------
// const bubbleMaker = () => {

//     //  étape 1 on se créer d'abord une bulle toute seul puis ensuite on essaiera de les faire venir en nombre



//     const bubble = document.createElement('span');
//     // on peut injecter des balises avec innerhtml bah en réalité avec createlement aussi  !
//     // etape4) on voudrais ajouter mtn cette classe , remove c pour enlever, toggle pour la mettre si elle y est pas et le span a mtn une lasse bubble et la on voit qu'on a rajouter une class a span




//     bubble.classList.add("bubble")

//     // etape5: on va randomiser la taille des bulles pcq tu vois la au début sur le fichier html tu vois 0*0 et on veut produire un chiffre alatoire entre 100 et 300  a chaque foi que je réactuzalise a page le chiffre change

//     const size = Math.random() * 200 + 100 + "px";

//     bubble.style.height = size;
//     bubble.style.width = size;
//     // console.log(size);
//     // attention les virgules c'est rien (genre ya bcp de chiffres après la virgule mais bon ça va en css c tolérer )
//     // on pourrait dire que vu que t'es un élement en absolute (dans sac lasse) pas on pourrait dire en left tu est la et du coup on aurait un positionnement aléatoire
//     // la c'est au niveau de la hauteur et on cherche un pourentage donc on dit fois  100(1% , 2 % et) (et on veut qu'elle soit assez bas même si on la voix pas au rechargement de la page c rien)
//     bubble.style.top = Math.random() * 100 + 50 + "%";
//     // etape on fait sur la left mtn

//     bubble.style.left = Math.random() * 100 + "%";
//     // pcq elle est censer aller de bas en haut c mieux comme ça

//     // :etape8 :(voir explciation css)
//     const plusMinus = Math.random() > 0.5 ? 1 : -1;
//     bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%")
//     // attention: jamais oublier els unités genre px et pourcentage

//     // étape2)
//     // la on veut injecter ce span quelque part
//     document.body.appendChild(bubble);
//     // ça veut dire le body tu as un enfant et c le bubble:(donc va voir dans le body ça s'est ajouter)

//     // étape10) maintenant qu'on a vérifier que tout fonctionnait ici (la logique de la bulle fonctionne) c'est comme ça u'on fait en général une fonction que la logique fonctionne bien on peut se la mettre dans une fois qu'elle fonctionne upp on peut se la mettre cette logique dans une fonction que je flèche voir vidéo ,

// // bubble.remove();
// // la elle a meme pas le temps d'apparaitre elle se supprimer direct

// setTimeout(() => {

//     bubble.remove();

// },8000)
// // dans 8 secondes , tu crées tout ce qui est en haut et dans 8 seonces vue quon avait mis 8 secondes bah tu vas t'auto détruire

// bubble.addEventListener('click', () => {

//     counter++;
//     counterDisplay.textContent = counter;
//     // on injecte la valeur de counter a counter display(le h3)
//     bubble.remove();
//  })

// };

// setInterval(bubbleMaker, 3000);

// etape 11) enfait il a compris que ça va un peu trop vers la droite , il aimerais que les bulles partent sur la gauche il faudrait leur donner une left négative et randomiser le fait que le chiffre soit positif soit negatif

// :ce qu'il vine t de faire la ça s'appelle alors tu renvoie 1 sinon tu renvoies -1 c'est comme un if else enfait et donc enfait ce qu'on va faire c'est plusminus c'est soit 1 soit -1 une fois sur deux  puisque mathrandom va tomber une fois sur deux en dessous de 0.5 donc on va multiplier ce résultat la   bubble.style.setProperty('--left', Math.random() * 100 + "%") par plusMinus et donc si on fait fois -1  a un chiffre , bah il chnage pas mais ild evient négatif et donc c'est comme ça qu'on va réussir a avoir cette effet  (rajoute ces deux trucs dans la fonction fléché juste en haut) avec ça le resultat sera bcp plus hmpgène sur l'apparaition des bulles donc notre const+minus aura soit 1 soit -1

// etape12 : on va avoir des problèmes pcq on injectait des choses sur le dom a aune allure frénéique donc la ce qu'on pourrait faire c'est supprimer des bulles 'Comment supprimer les bulles"
// donc tjrs dans notre fonciton quand on va créer une bulle on pourrait lui dire après un certain temps je voudrais que tu le supprime fai le teste bubble.remove

// **********on doit mtn créer plusieurs bulles-----

// la logique d'une seul bulle fonctionne(étape 10,...)

// ****  etape 13 quand je clique mtn sur les bulles je voudrais qu'elle disparaissent
// bubble.addEvenlistener('click', () => {
//     bubble.remove();

// }) ajoute le dans la fonction

// ********Création d'un compteur (nombres de bulles qu'on arrive a shooter ) - on va se shooer un h3 dans le body, j'aimerais que le h3 comptabilise le nombre de bulle qu'elle explose

//********************************************* */ Révision interro du 07-11 (générateur de bulles)
let counter = 0;
const bubbleMaker = () => {
  // 1)je me créer une bulle solo(o  se concentre sur une bulle) : on créer une balise span et on donne sa valeur a la variable bubble

  const bubble = document.createElement("span");

  // 2)on in jecte cette élement dans le body

  document.body.appendChild(bubble);
  // appendchild ça signifie "ajouter un enfant"

  // etape3 : on voudrait ajouter une classe a la balise buble mtn

  bubble.classList.add("bubble");

  // etape4 :span0x0 on lui rajoute du style mtn en css

  // etape5) on randomise la taille de la bulle ?on veut générer des choss aléatoire (hauteur, largeur, top et left aléatoire)

  // math.random() : ça généère un nombre aléatoire entre 0 et 1
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  // après si tu veux bien t'assurer que les tailles top et left sonr bie é-généré tiu peux déclarer une variable ouis fzie console.log

  // pas besoin de mettre de taille enfait tu 'las déja ici on change cela aléatoirement fin a chque fechargement de page
  //  a partir de la tu vois a chaque rechargement ça va a gauche a droite etc

  // etape6) mtn on vetu faire l'effet genre ça monte de ba en haut bah la c'est dans le css(avec animation et keyframe :)

  // etape7) mtn enfait tu vois la bulle elle mpnte oke alétoirement  a chqiue position left etc mais mtn on veut lui donner une trajectoire
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty(
    "--left",
    Math.random() * 100 + 50 * plusMinus + "%"
  );

  // etape8:mtn que la logique fonctionne on peut la mettre dans une fonction puis on la paramètre en automatique comme ça t'auras pas besoin de recharger a chaque fois , t'auras toutes les x secondes des bulles qui s'ajouteront et monteront mais attention une fois mise la logique dans la fonction a ce moment elle va pas se jouer toute seul

 // Logique du compteur
 const counterDisplay = document.querySelector("h3");

 // Ajouter un événement de clic à la bulle
 bubble.addEventListener("click", () => {
   counter++; // Incrémenter le compteur
   console.log(counter);  // Afficher le compteur dans la console
   counterDisplay.textContent = counter;  // Mettre à jour l'affichage du compteur
   bubble.remove();  // Supprimer la bulle après le clic
 });
};

setInterval(bubbleMaker, 2000);

// mtn c'est bon c'estr fait  je voudrais donc remove a chaque fois que je clique dessus
// et le setproperty enfait ça seert a intégrer du cotnenu dans une variable css 
// Les keyframes contrôlent le mouvement global (par exemple : flotter).
// setProperty en JavaScript personnalise chaque bulle (par exemple : où elle commence, sa taille, sa couleur).  donc ici pour ça on dit bubble.style.setproperty et pas keyfram.style.setpropery


 