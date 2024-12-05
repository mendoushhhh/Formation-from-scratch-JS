// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)





// let lastScrollY = window.scrollY; // Variable pour stocker le niveau de défilement précédent
// console.log(lastScrollY);


// // ça c'est le scroll enfait en direct genre a chaque fois que tu scroll l'evenement s'appliqur et tu as le scroll en direct tandiq que end ehors de la fonction window c'est le scroll pas en direct
// window.addEventListener("scroll", (e) => {
// const currentScrollY = window.scrollY;

// console.log(currentScrollY);
//   lastScrollY = currentScrollY;
//   console.log(lastScrollY);
    
//   if (window.scrollY > 0) {
//     navbar.style.top = "-60px";
//   }else if (currentScrollY < lastScrollY){
      
//     navbar.style.top = "0";


//   }


  


  
  
// });

let lastScrollY = window.scrollY; // Variable pour stocker le niveau de défilement précédent


window.addEventListener("scroll", () => {
  

  if (window.scrollY > lastScrollY) {
    // Défilement vers le bas : masquer la barre de navigation
    navbar.style.top = "-60px";
  } else if (window.scrollY < lastScrollY) {
    // Défilement vers le haut : afficher la barre de navigation
    navbar.style.top = "0";
  }

  // Mise à jour de la valeur précédente après comparaison
  lastScrollY = window.scrollY;



// en gros on réi jecte a chaque fois la veleur précédente c'est ça qu'il faut retenir 
  
});




