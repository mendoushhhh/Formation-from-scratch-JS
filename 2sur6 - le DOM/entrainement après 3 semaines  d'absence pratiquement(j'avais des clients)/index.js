/* training  1) test mouseenter, mouseout , click, navbar effect  27/11/24  */

const buttonUno = document.getElementById("btn-1");
const buttonDosso = document.getElementById("btn-2");
const responseRevel = document.querySelector("p");
const divContainer = document.querySelector(".click-event");
const navbar = document.querySelector("nav"); // Assure-toi que tu sélectionnes correctement la navbar

console.log(navbar);

console.log(divContainer);

console.log(buttonUno);
console.log(buttonDosso);
console.log(responseRevel);

buttonUno.addEventListener("click", () => {
  responseRevel.classList.add("show-response");
});

buttonDosso.addEventListener("click", () => {
  responseRevel.classList.add("show-wrong");
});

divContainer.addEventListener("click", () => {
  divContainer.classList.toggle("click-Venent"); // Retire le point "."
});

// -------------------------------

divContainer.addEventListener("mouseenter", () => {
  divContainer.style.background = "red";
});

divContainer.addEventListener("mouseout", () => {
  divContainer.style.background = "pink";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    // Utilise window.scrollY pour obtenir la position du défilement
    navbar.style.top = "0"; // Affiche la navbar en haut
  } else {
    navbar.style.top = "-70px"; // Cache la navbar en la déplaçant vers le haut
  }
});

// training 2 mousemove, mousedown ,mouseup, keypress, load , ********************

const mouseMouve = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMouve.style.left = e.pageX + "px";
  mouseMouve.style.top = e.pageY + "px";
  // on injecte enfait a mousemove les donnée en temps réelle de la souris piour ça ça suit !
});

window.addEventListener("mouseup", () => {
  mouseMouve.style.transform = "scale(2) translate(-50%, -50%)";
  mouseMouve.style.border = "2px solid teal";
});

window.addEventListener("mousedown", () => {
  mouseMouve.style.transform = "scale(5) translate(-50%, -50%)";
});

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// les evenment sur la tocuhe clavier c souvent avec document fin la partie la plus haute
document.addEventListener("keypress", (e) => {
  console.log(e.key);
  // ça fonctionne mtn on va récupérer ces données
  key.textContent = e.key;

  //   if (e.key === "j") {

  //     keypressContainer.style.background = "pink";

  //   }

  ring();
});

function ring() {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
}

// l'enroule supprimer tout ce que tu touches et aussi (promprt entrez votre nom), propagation 

// promport mettre du texte la , introduire son nom sa réponse quand tu clqiue sur le bouton
const buttton = document.querySelector("#btn-1");
const buttton2 = document.querySelector("#btn-2");

buttton.addEventListener("click", () => {
  let answer = prompt("Entrez votre Nom");

  divContainer.innerHTML = `<h3> Voici le nom: ${answer}`;
});

buttton2.addEventListener("click", () => {
  let answer = prompt("Entrez votre prénom");

  divContainer.innerHTML = `<h3>Voici le prénom: ${answer}`;
});


// propagation





