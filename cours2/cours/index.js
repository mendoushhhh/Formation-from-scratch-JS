// // SELECTEURS

// pointer une class avec la methode queryselector( c un selecteur css)
// document.querySelector("h4").style.background ="yellow";

// const baliseHtml = document.querySelector("h4");
// console.log(baliseHtml);

// baliseHtml.style.background = "yellow"
// savoir ce truc ça facilite genre il a fait des petires explications au début

//  *************Click Event***********************

// PARTIE 1 -----------------------------
// j'aimerias pointer la div click event

const questionContainer = document.querySelector(".click-event");

// mtn que notr élemetn est pointé on peut lui rajouté du style ( avec onsole log on a bien vérifier que ça touche cela ) on change son style

// premier paramètre c l'evenement en question (ça peut etre click , scroll ,input , submit yen a plein plein plein  et ensuite soit on code une focntion un peu plus haut en tt lettree soit on balance une focntion fléché  )
questionContainer.addEventListener("click", () => {
  //    questionContainer.style.borderRadius = "150px";
  //    questionContainer.style.background = "red";
  //    questionContainer.style.border = "3px solid teal";
  //    au lieu de faire comme en haut la en commentaire si on a plus d'un élement stylisé alors on va lui injecter une classe enfait et lui ijecter la classe que t'as créer en cssstyle (on ajoute en css la balise )

  questionContainer.classList.toggle("question-click");
});
// je dois réactiver , fin enelevr les parenthèse si je veux que ça fonction juste ici en haut enleve et ça fonctionenra

// Attention pq on a mis le point a click-event et pas a question click ?

// on est pas dans un selectuer css enfait pcq on lui a dit avant classList donc pas besoin de lui dire le point tu vois

// PARTIE 2 ------------------------------

//  il dit que ya deux manière d'importer pour electionner un element du html ya queryselector et get elementbyid , en term de performance oure c'est légerement plus fort pcq il sait iméditatment qu'il va devoir trouver sur le dom un id donc vu qu'il cherche un id on a plus besoin de lui donner un hashtag

// attention getelemntbyid c que pour les id en vrai

// objectif: on aimerait faire apparaitre lorsque je clique sur un des boutons berne ou zurich le <p> pcq la il est en hidden pour l'instant
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

// premier paramètre c le type d'evenement : type d'evenemtn : scroll, input submit et deuxieme paeamètre c une fonction qu'est ce que tu fis auans on te clique dessus ? :
btn1.addEventListener("click", () => {
  //  révéler le p au clique
  // reponse.style.visibility = "visible";
  reponse.classList.add("show-response");
  reponse.style.background = "green";
});
btn2.addEventListener("click", () => {
  //  révéler le p au clique
  // reponse.style.visibility = "visible";

  // on pourrait se coder une class qui révèle la reponse au lieu de faire tjrs plein de ligne la on fait tout le style en css, autant ajouter une class css avec pleins de truc quoi  de style
  reponse.classList.add("show-response");
  reponse.style.background = "red";
});

//  attention en ajoutant des class des fois ça amrche pas pcq ya des ordres de riorités en css alors des fois ça marche pas ....

// revoir entre 1:00 et 1:01

// les priorités en css ------
// {<div> > #id > .class > baliseHTML}

// Mouse Events(pleins de petits truc savec la souris) -----------------------------------

// Objectif: le but ça va être de créer un petit cercle qui va nous suivre partout (comme on le voit partout sur la souris )

// étape2 : on doit l'importer ici en js après avoir fait le style
const mousemove = document.querySelector(".mousemove");

// on a vu l'objet document , he bien en réalité ya l'objet window c'est encore l'objet au dessus , c'est window c'est lévenement au dessus de document

// a chause fois que la souris bouge j'aimerais que tu fasses quelque chose , vous créez un évenement vous loggez
// window.addEventListener("mousemove", (e) => {
//   // console.log(e.target);
//   // tu vois qeu chaque mouvement de la souris déclenche un console log
//   // a chaque fois que l'evenement mousemove se produti sur le dom ou window jsp j'aimerais que tu lui injecte du style
//   mousemove.style.left = e.pageX + "px";
//   // tu remarques que t'es centré par rapport au point haut a gauche , nous on veut etre centrer en son centre donc dans le style
//   mousemove.style.top = e.pageY + "px";
// });
// tu vois le rond qui suit la souris a bug un peu pcq le pc y doit blinde taffer pour ça , ça lag
// ça récupère toutes les données de l'evenement  et donc quand tu met le e la bah tas tes données , te dit ou était la souris etc etc
// vous inquietez pas on a tout le temps d'etre bon dessus

// quand on descend la souris il se produit cette evenement(console.log pour voir)
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
// autre eveneemnt possible de faire avec la souris
//   ça fonctionne pas fieu ....REVOIR

// on a un problème pcq en injectant le transforme scale on vient d'écrire par dessus le transform trasnlete (voir sur le style.mousemove, donc la première ilv a l'écraser et va écrire a la place scale2 et donc faut penser a rappeller translate(-25%, -25%))

// window.addEventListener("mouseup", () => {
//   mousemove.style.transform = "scale(2) translate(-50%, -50%)";
//   mousemove.style.border = "2px solid teal";
// });

// mouse quand on survole

// questionContainer.addEventListener("mouseenter", () => {
//   questionContainer.style.background = "rgba(0,0,0,0.6";
// });
// // ya aussi mouseleave mais il le trouve un peu buggé donc la il coneil le mouseout !
// // quand la souris sort de quesion container je veux que tu me fasse un console.log ce qui est bien a la différence du hover c que le style est différent quand on rentre et uand on sort aussi tandis qu'avec le hover c juste quand on est hover quoi
// // on peut faire 3 style  1) stylr de base2) quand on se met dessus 3) quand on sort du truc
// questionContainer.addEventListener("mouseout", () => {
//   questionContainer.style.background = "pink";
// });

// reponse.addEventListener("mouseover", () => {
//   reponse.style.transform = "rotate(2deg)";
// });
// fonctionne pas ici (voir1h29)

// ------------------Keypress event-----------------

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
// les evenemebnts sur la tocuhe en générale ça se fait sur document, si on veut declencher un evenemnt quand une tocuhe est appuyer, donc on pointe d'abord le doucment l'element le plus haut comme si c'étais html enfait celui qui englobait tout
// keypress c le nom qu'on a donné a l'evenement
// document.addEventListener('keypress', () => {
//   console.log('yes')
//   // TESTE MTN TOUCHE SUR TOUTES LES TOCUHES DE TON CLAVIER ! et mtn on va recuperer ces donnés
// })

// le e peut donner ce qu'ron veut canard ce que tu veux pingouin, pourr, prout haha
// document.addEventListener("keypress", (e) => {
//   console.log(e.key)
// })
// après si on se promène dans les données de cette evenemnts

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  //  voir sur tes notes tu peux ajputer des trucs et tt
  //  if (e.key === "j") {
  //   keypressContainer.style.background = "pink";

  //  }else if

  ring();
});
// en générale pour des fonctions , evenements faut rester end essous de 40lignes

// Comment ajouter un son en javascript ? *********
// :d'abord on se créer une focntion
// quand j'appellerai ma variable audio ça ira dans ma variable audio
const ring = () => {
  // je cree une varibale qui est un  new audioc'est a dire que la je ferai référence  a un objet de javascript  qui a été codé dans le code source our faire de l'audio , pq on sait que c un new ? cq c rare de faire new sur autre chose que sur les objet et pcq la première lettre est majuscule
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};
// entre 1:45 et 1:50
// tu vois c notre imagination, on peut vrmt tout faire

// Scroll Event -------------------------------------
// quand tu as scroller un certain nombre de pixels , sort moi la navbar !

const nav = document.querySelector("nav");
// la balsie nav n'est attribuer qu'a un seule lement sur le dom donc pas obliger de poitner , de donnr un id ou une class mais si t'as un p ou autre alors donne lui une class ou id sinon ça risque de poser problème

// etape 2 : poser un evenement sur le scroll
// window.addEventListener("scroll", (e) => {
//   console.log(e);

//   if(window.scrollY > 120) {
//     nav.style.top = 0;
//   }
// })

// reg :pour voir l'evenement duscroll c e

// voir la valeur du scroll
window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ----------------Evenements sur les formulaires

//  le mieux c de selectionner pa class id ou autre mais la on va toestr tt on est dans un corps
// step4

const form = document.querySelector("form");
console.log(form);
// cette evnement ça va dire , yes ça a été soumis
form.addEventListener("submit", (e) => {
  // il faut mtn récupérer l'evenement et appliquer methode , en faisant ça enfait sur les formulaires il va falloir aussi mettre un e.preventdefault, pcq cette methode notre evenement se prémunis contre le comprotmeent par défaut du navigateur , on annule enfait ce changement de page
  e.preventDefault();
  console.log(cgv.checked);
  // cgv j'ai trouve cela en allant reg l'id en html
  if (cgv.checked) {
    // affiche le contenue des variables

    // etape5 si je check tout et que ej valide je voudrais mettre tout le contenu dedans dans la div vide sur html , on va aller se la chercher j'ai envie que dans la balise form t'ailles me cherche son seul enfant qui s'appelle div et on peut la déclarer comme ça pas obliger de déclarer nos variables dans une balise comme la
    // const nav = document.querySelector("nav"); et tu nous affiche end essous el contenu du formulaire si cgv sont accepter voir 2:22 je pointe ma balsie et je lui injecte de l'innerhtml, non seuelemnt on lui ajoute du texte mais en plus on lui ajoute des balises pour ça c'est innerhtml et pas text.content et la on met ${le résultat de ce qui était taper dans le formulaire}
    document.querySelector(
      "form > div"
    ).innerHTML = `<h3>Pseudo : ${pseudo}</h3>
<h4>Langage préféré : ${language}</h4>`;
    // si j'vaais texcontent regarde sur ton tel comme ça serait , il aurait simplement injecter injecter les balises EXTREMEMENT PRATIQUE , très très très pratique ça c qqch qu'on va afire très souvent
  } else {
    alert("Veuillez accepter les CGV");
  }
  // il faudrait s'assurer que les cgv soit coché avant de de valider le formulaire qu'on puisse pas faire valider si ça c pas coché
});
// aussi on a pas besoin de déclarer de variable pour une checkbox js connait l'id et aussi pour les buttons meme pas besoin de déclarerl'id cgv

const inputName = document.querySelector('input[type="text"]');
// etape3) on va stocker ce qui est taper alors , on va se créer une boite ,
let pseudo = "";
// voir telephone pour la partie 3
// etape4 )le select de type , on veut un evenment sur notre input select

const select = document.querySelector("select");
// ensuite on lui colle un evenlsitenr et eventuellement se stocker le langage favoris de notre utilisateur donc on créer un let language
let language = "";
// donc on aimerais bien récupéerer l'option que notre utilisateur a sélectionner
select.addEventListener("input", (e) => {
  // console.log(e);
  // mtn on va encore plus en détail teste ça
  // console.log(e.target.value);
  // mtn on va se stocker cela dans une boite à l'extérieur , he bien on le emt dans une variable
  language = e.target.value;
  // une fois qu'on a fait cela on interroge dans la console meme , moi j'ai cliqué sur javascript et je vois ils me disent elle contient javascript
});

// 1)on teste : si je me met sur mon bouton la ça met blindé de yes uand j'écris
// inputName.addEventListener('input', () => {
//  console.log("yes!")
// })
// 2)on se récupère tjrs ces data

// 1)on teste : si je me met sur mon bouton la ça met blindé de yes uand j'écris(tout ce que ça a déclenché)
// va dans target -->  --> trois petits points --> value
inputName.addEventListener("input", (e) => {
  // etape2
  //  console.log(e.target.value)

  // etape 3:
  pseudo = e.target.value;
  // 1ere manière de faire
  // console.log(pseudo)

  // LES INPUTS C EST TJRS LA MEME LOGIQUE (react etc etc)
  // 2eme manière de faire : interroger sur la console(voir video note)

  //  on l'utilise absolument partout et tout le temps et mtn on sait ce qui est taper dans l'input, on sait mtn ce qui est taper dans l'input en temps réel
});

// :etape4 quand on remplis le formulaire et quo'n appuie sur valdier tout se perd ..pq pcq de base un formulaire ça change page quand on valide  et ça on veut pas avec javascript  donc
// step 1:selectionner le formulaire voir en haut

// -------------- Load event
// l'avanatge c'est qu'il se déclenche une foid que toute la page a été chargé , ça c'est pas mal pcq si tas des logiques ou des choses qui pompes pas mal d'énergie (  tt le temps le script se lis end ernier pcq c qd meme long a lire etc c tjrs mieux d'afficher un petit rendu css pd qu'il attend et donc en fin de chargement la priorité c'est html css  mais en css on peut quand même mettre des sortes de priorité une fois que le docuement est chargé comme ça on s'évite d'avoir des problèmes de performance donc ça peut être une bonne pratique   )
// si on veut mettre des choses dans la page au démarrage on peut els mettre dans un eventlistener load :)
// pour montrer il est parti dans network puis slow3g pour bien montrer que c lent et puis ça apparait jpense, enfait une fois que tout est affiche genre(le css ) il log le contenu quril y a dans le load event  maisle fichier est méga léger c super petit tu vois , si tu veux appelelr des foncitons au dmarrage de la page tu peux mettre ça

window.addEventListener("load", () => {
  console.log("Document Chargé !");
});

// ---------------ForEach(pour chacun d'eux)
// on a 3 boites qui ont 3 boxe si on voulait s"éléectionner tous ces éleementon va aps créer une variable pour chachune maisis on pourrait dire
// si tu veux que 5-6 boutons sur une meme page aie le meme comportment(5 -6 eventlistenrer la ) tu vas pas le faire pour cahcun d'eux a chaque fois mais t'as la propriété foreach
// const boxes  = document.getElementsByClassName("box"); (au tout début quand il a comencé cette artie il a déclaré ça en variable et finalement il dit que getelement by clasname il l'utilise jaamis et donc il a redéclaré juste en bas ) , par expérience il n'utilise que le queryselector all et l'autre ila  des prolbèmes

const boxes = document.querySelectorAll(".box");
console.log(boxes);
// boxes.addEventListener('click', () => console.log('test'));
// ça ne fonctionne pas pcq on peut pas ajouter un eventlisterer sur trois élement d'abord , pour ça qu'il faut faire un forEach
// :mes boxes oour chacune d'elles je vais els appelelr box(en rouge en bas la dntre parenthèse dans laformule)
boxes.forEach((box) => {
  // boxe représente chaque bxoes individuellement, la on peut faire le addevenelistener, les 3 boites mtn ont une logique d'eventlistener au clique, un evenlistenr pour 3 element au clique va teste voir 2:36;45
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

// 2:39:00 mise a jour de dingue concernant getElementById en fait revois, si on va très loin en js et qu'ond evra faire du angular ou react alors la faudra faire getelmentbyid donc qd meêm aps oublié mais pour js ici faudra plus faire

// ----------- plusieurs addeventlistners
// addevenlistener vs onclick

// document.body.onclick = function () {
//   console.log("Click !");
// }

// ou même comme ça tu peux écrire cette fonction ou comme en haut function()
// document.body.onclick = () => {
//   console.log("Click !");
// };

// :très répandu et fonctionne très bien malgré que l'autre  malgré que le addevnelistener est qd meme recommandé mais cette émthode fonctionne
// mais querls sont ses défauts enfait par rapport , en utilisant cette émthode on ne peut pas propager deux fois le meme évenement sur une balise  alors que sur l'event listner oui

// ses défauts et qualité, comparé a addevenlistner

// document.body.onclick = () => {
//   console.log("click");
// };

// va sur console tu vas voir quand tu clique sur body terrible mais siu tu veux refaire un dexuième comportement en refaiant ça reg : c que le deuxieme evenement uie st déclaré , il écrase en quelque sorte le premier évenement
// document.body.onclick = () => {
//   console.log("scrol");
// };

//- on peut aussi mettre le onclick en htmk haah voir 2:43:30, ,aussi il est compris par les navigateurs , les très vieux navigateurs qui supporte pas addevenlisteners ne , babbels permet de  compiler son code js pour tous les js quand tu fais un projet professionnel , tu compiles ton code c conseillé a la fin

// astuce : tu selectionne le texte , alt + flèche haut ou bas 2:48
// bubbling    (pour déclencher a la fin , de base 'levenlistner est parametré en mode bubling )
document.body.addEventListener(
  "click",
  () => {
    console.log("click1 !");
  },
  false
);

// // usecapture( si on a envie en use capture qui se déclenche imméditament , hé bien on peut mettre un 3 eme rgument 1ere argument) façon de faire : ici le click 2)  la fonction() => {
//   console.log("click1 !") 3ème argument) false (en bubbling tu met de base sur false  mais si le use capture tu veux alors tu met true )
// })
document.body.addEventListener(
  "click",
  () => {
    console.log("click2 !");
  },
  true
);

// reg le résultt en console , normalement tu devrais console log le 2 puis le 1 , ce sont des notions très tehniques voir 2:50 le resultats et va voir le document qui explique cel vanillaJS (gomakethings) le fait de mettre true ça déclenche l'evenement plus tot

// ---------Stoppropagation--------------------
// ---------- méthodes pour gérer un peu mieux les évenements, il y a d'autres méthodes qui permettent d'arreter la propagtation d'unevenement , parfois on a envie de créer un évenement au clique   par exemple sur une division mais on voudrait pas que tous els évenements au clique par exemple sur une division mais on voudrait pas que tous les évenemnts au clique  qui soient addosser sur le body sur la window se déclenche aussi on voudrait juste que l'element sur le clqiue du div se déclenhce et que els autres ne se déclehcen pas , fin s'arrête

questionContainer.addEventListener("click", (e) => {
  alert("test !");
  // je vais clqiuer sur le questioncontainerça va délcencher cette evenment et ça va nous faire une laert le problème c que clique 2 et clique 1 aussi se sont déclenché reg
  // ça veut dire l'evenement du clique je veux aps que tu l'utilise ailleurs , reg le click 2  a quane même marché pcq le sgope propagation il a pas eu le temps de le lire encore , la force de ce youthapture le fait de mettre true a la fin en revanche le click 1 non ne s'est pas déclench&é car on a stopé la propagation
  e.stopPropagation();
});

// attention : toutes ces méthodes si il les donne c pcq c'est que ça va te servir

// removeEventListener
//  il ya une méthode quie existe , une méthode tout comme addevenlistenr exite ya une methode qui existe removeEvenlistener , ila  ajamsi eu l'occasion de le faire dans ses créations , dans ses sites

// ------------------------------------------------
// Dernier chapitre important avant d'attaquer le générateur de bulle, (voir le shéma), en réalité le bom c'est l'objet window( la fenêtre)
// jusqu'a mtn on a vu le DOM ensuite on a le BOM et le javascript (on verra ça dans la p3)
// le BOM c'est quand même la aprtie la moins important , pcq le javascript a droite pour manipuler les données et le dOM c'est quand même le plus important

//  -------------------------------------------
// BOM
//  le bom contient l'objet window , il contient bcp de chsoes
// pour savoir la hauteur de notre fenêtree tu vois ça apparait 400 puisavec la console si tu réduis alfene^tre bah tu vois c plus eptit
// console.log(window.innerHeight)
// // pour savoir ou on en est sur le scroll niveau vetrtical
// console.log(window.scrollY);
// ourvir une popup en js + , tu peux rediriger vers un forumalire d'inscripiton
// window.open('https://www.google.fr/', "cours js", "height =600, width=800")
// window.close() tu vas dans la console et tu tapes ça stv fermer la fenetre popup qui est apparu
// c'est pour fermer la fenêtre , si tu veux impressionner des gens en société
// + tu autorises  fenêtres popup

// Evenements addosé a window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt (ça emt une réponse) , ça ouvre un dossier
// btn1.addEventListener('click', () => {
//   prompt('Entrez votre nom')
// })
// la comme ça on peut remplir le petit formulaire mais ou peut on voir la réponse afficher, pour sotcoker ce qu'il avait , fin la réponse donner

btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");

  //  questionContainer.innerHTML = "<h3> Bravo" + answer + "</h3>";
  // turemarques que en faisant ça tu écrase les ficheirs et cela apparait si tu veux pas écraser les fichiers derrière toi bah juste met un + genre reg
  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

// compte a rebours , timer--------------------------
// méthode importante
// autre settimeout
// setTimeout(() => {
//   // logique a éxécuter

// }, 'temps en milli seconde avant de célencher ');
// :enfait tu entres un temps en miliseconde 2000 = 2sec
// ya deux paramètre dans un timeout 1) la logique a éxecuter(la fonction quoi fléché ou l'autre et tu m'ajoutes ça dans deux secondes)

setTimeout(() => {
  //  logique a éxécuter
  questionContainer.style.borderRadius = "300px";
  // ce bout de  code la de setimout jusqua  }, tu me l'execute dans 2 sec , dis toi c comme un timer un compte a rebours , ça sert a déclencher les choses a rebours
}, "temps en milli seconde avant de célencher ");

// Setinterval --------------------------------------
// methode tout aussi importante

// setInterval(() => {
// document.body.innerHTML +=
//  `<div class= 'box'>

//     <h2>Nouvelle Boite ! </h2>

//   </div>`
// // parznthèse ici tu vois si tu met entre guillemet normal bah tu peux pas indenter mais  situ met les guillemet de la touche 7 la oui ``, en gros on va i njecter setinner html  toutes les une seconde au body et la tu peux créer des boucles infiny , des choses très puissante , le défaut c'est que ça s'arréte jamais hahah et faut savoir qu'on peut aussi en ajouter trsè très vite et pas loin de faie pété le navigateur l'ordi y chauffe direct

// // comment l'arrêter  ? cette intervalle ?
// // en 1)le déclarant dans une variable a coté de setinterval tu met let interval alors donc vasy  et donc let intervalk va avoir en lui toute le setintervall et 2) on l'arrête on va lui addoser un evenement quand on te lcique dessus le body n'importe ou j'aimerais juste que tu m'arrete le setinterval
// // }, 1000)

// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class= 'box'>

//     <h2>Nouvelle Boite ! </h2>

//   </div>`;
// }, 1000);
document.body.addEventListener("click", (e) => {
  e.target.remove();
  // hahaahahahah

  clearInterval(interval);
  // :j'ai tesetr quand je clqiue ça s'arrete
  // après stv savoir ce que tu tocuhes quand tu cliques , tu récupère l'evenement ici  tu met un e dans le entre parenthèse + console log de e.target et ça enlève l'lement surlequel je clique haha
});

// location ------------------------

// /le lien exacte ou vous êtes, on peut le décomposer enfait en exactement ce qu'on recherche
// console.log(location.href);
// console.log(location.host);
// // l'host, ona jusre ke nomd e l'host genre 127.455.54
// console.log(location.pathname);
// console.log(location.href);
// location.replace("https://www.lequipe.fr/") il envoie vers l'equipe le site, il ya plein d'objets qu'on peut faire

// window.onload = () => {
//   location.href = "https://x.com/?lang=fr";
//   // tu vois ça affcihe d'abord le site puis ça renvoie sur twitter
// }

//il recommande de suivre benjamin code  !! il fait le même genre de truc que lui terrible terriuble

// Navigator-------------------------------------

console.log(navigator.userAgent);
// ça peut servir pour avoir des informations sur votre utilisateur mais surtout navigator a un avantage c'est qu'il peut nous montrer la localisation, il peut nous localiser
// voir le lien de la documentation https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
// et dans cette doc ya des bouts de code tout fait pour obtenir la localisation de votre utilisateur et en mode prod , tu peux aussi choisir de localiser ton site dans un lieu précis , tu peux voir tiens qu'est ce qu'il donne mon site si jss localiser en chine , si tu vas dans loation au pluriel tu peux te localiser a berlin , lodnres  moscou san francisco  i tu copies colle ya moyen e te localiser , après ya deja des api qui font cela très bien
// paramètre --> locations

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// c'est comme ça que font ubereats etc pour savoir ou vous êtes
//  c'est plus précis avec un telephone la avec ordi ou modem
// hsitory----------------------------------------

console.log(history);
// window.history.back();
// history.go(-2)

// -------------------------------------------------
// SetProperty
// on termine la manipualtion du bOM avec quelque chose qui est très interessant et qu'on va pouvoir utiliser dans le générteur de bulle après, c'est le set property
// donc va d'abord rajouter du style a la nav nav::after
// tu vois ya un élement blanc qui est sorti mtn , nous on aimerait qu'il survole la navbarqu'il suive la souris qu'ils e balade avec la souris, on va me dire faut lui faire un evenelnt sur le mouse mouve comme avec le cerle toute a lheure , he bien non pq ? pcq l'after on pourrait pas le sélectionner , ça nous poserait des problèmes pour le sélectionner

// reg si j'eesaye de selectionenr lafter
// const after =document.querySelector("nav::after");

// console.log(after);
// ça met null
// le selecteur de l'after ne fonctionne pas  donc comment est ce quon pourrait lui injecter du top et de la left si on ne peut pas sélectionner cette élement la en js ?
// solution on pourrait mettre des variables directement ici  dans le css !!!!! left var et top var

// SetProperty
// 1) windowe je tajoute un evenement c le mousemove , cad quand la soruis bouge je veux qu tu récupère l'evenement de la souris cad ou est est ce u'elle est quand on navigue etc
window.addEventListener("mousemove", (e) => {
  // On met à jour la variable CSS --x avec la position horizontale de la souris
  console.log(e);
  // ernière étape )quand on survole la nav on voit layer x et layer e , si on veut que la souris nous suive partout mais pour ce genre d'effet la il faut utiliser layer x et layer y ! et donc on voit que notre element en after accompagne la souris terrible
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--x", e.layerX + "px");
});
