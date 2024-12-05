// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navbar = document.querySelector("nav");
const popup = document.querySelector(".pop-up")
// pour le boolean 
let playOnce = true;



// évenement numéro 1 :

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
    // en react on esst généralement obliger de faire getelementbyId
  } else {
    navbar.style.height = "90px";
  }
  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
// la scrollvalue je vais lui mettrre un pourcentage genre quand tu as tel pourcentage de scroll tu fais ça, exemple t'es a 20% de scroll de la page complète tu fais cela, donc valeur initial/ par la valeur global et on a le pourcentage, 
// la valeur globale du body ça s'appelle document.body.offsetheight la jai la taille totale du body donc tout ls evenments ne marcheraient plus de la même façon
// console.log(document.body.offsetHeight);
// console.log((window.scrollY + window.innerHeight) / document.body.offsetHeight);
// remarque quand tu fais cela et que tu vas tout en bas t'arrive pas a 100% mais a genre 0.66 donc 66% pq ? voir note avec hashtag #offsetheight (voir la vidéo)
// ensuite on met cela dans une variable , dans une boite
// Image 

if(scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";

}
// enfait en faisant cela one st bcp plus précis en mettant un pourcentage !!!!!!!


 
// popup
    if(scrollValue > 0.85 && playOnce) {
        
        
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
        
        // on pourra plus  jamais revenir sur cette condition pcq le playOnce est sur false mtn
    // }else {
    //     popup.style.transform = "translateX(400px)";
    //     popup.style.opacity = 0;

    //     // le problème c'est que nous on veutque la popup on la voit plus jamais jamais genre tu vois donc à ce moment la ce qu'ul faut faire c'est boolean 
        
    // }
    




});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 350) {
//     imgImprovise.style.opacity = 1;
//     imgImprovise.style.transform = "translateX(0)";
//   }


// });  voir juste en haut 








closeBtn.addEventListener("click", () => {
      
    popup.style.transform = "translateX(400px)";
    popup.style.opacity = 0;

})



// corrigé 


//  il faut parler en pourcentage il dit a ce moment la pcq en fait il prend en compte le responsive 
// valeurglobale du body !!! c avec offsetHeight, la j'ai la taille totale du body en faisant cela

// le niveau de scroll n'est pas le même en fonction de la taille de l'écran , a bien prendre en compte cela c pour ça qu'il faut mettre une scroll value à mettre la ou il y a la navbar


// console.log(document.body.offsetHeight);
