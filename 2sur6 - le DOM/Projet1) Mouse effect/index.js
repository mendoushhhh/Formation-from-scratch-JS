// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// étape 2 on récupère les classes pour pouvoir appliquer less evenements mousemove dessus

const littleMouse = document.querySelector(".mouse");
console.log(littleMouse);

const mediumMouse = document.querySelector(".medium-circle");
const bigMouse = document.querySelector(".big-circle");
const titrePrincipal = document.querySelector("h1");
console.log(titrePrincipal);




window.addEventListener('mousemove', (e) => {
    littleMouse.style.left = e.pageX + "px";
    littleMouse.style.top = e.pageY + "px";
})

window.addEventListener('mousemove', (e) => {
    mediumMouse.style.left = e.pageX + "px";
    mediumMouse.style.top = e.pageY + "px";
})
window.addEventListener('mousemove', (e) => {
    bigMouse.style.left = e.pageX + "px";
    bigMouse.style.top = e.pageY + "px";
})







