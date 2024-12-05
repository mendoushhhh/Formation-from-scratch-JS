// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// étape 2 on récupère les classes pour pouvoir appliquer less evenements mousemove dessus

// ******* mon code a moi ici

// const littleMouse = document.getElementById("mouse");
// console.log(littleMouse);

// const mediumMouse = document.getElementById("medium-circle");
// const bigMouse = document.getElementById("big-circle");
// const titrePrincipal = document.querySelector("h1");
// console.log(titrePrincipal);

// window.addEventListener('mousemove', (e) => {
//     littleMouse.style.left = e.pageX + "px";
//     littleMouse.style.top = e.pageY + "px";

//     // tu vas me passer la posotiond e la souris sur l'axe des x et y
// })

// window.addEventListener('mousemove', (e) => {
//     mediumMouse.style.left = e.pageX + "px";
//     mediumMouse.style.top = e.pageY + "px";
// })
// window.addEventListener('mousemove', (e) => {
//     bigMouse.style.left = e.pageX + "px";
//     bigMouse.style.top = e.pageY + "px";
// })

// ********* la correction du prof from scratch

// window.addEventListener("mousemove", (e) => {
//   mouse.style.left = e.pageX + "px";
//   mouse.style.top = e.pageY + "px";

//   mediumCircle.style.left = e.pageX + "px";
//   mediumCircle.style.top = e.pageY + "px";

//   bigCircle.style.left = e.pageX + "px";
//   bigCircle.style.top = e.pageY + "px";

// });

// **************** mtn le prof dit on aurait pu faire plus rapidement !!!!
const mouses = document.querySelectorAll(".cercle");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((cercle) => {
    cercle.style.top = e.y + "px";
    cercle.style.left = e.x + "px";
  });
});


// ça aide si il y aurait eu 20 cercle la on aurait du faire 20 bour de code a chaque fois alors que la non même pas

