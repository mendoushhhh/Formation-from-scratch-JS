// cours2 (interro) /30

const navbar = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  console.log(scrollY);

  if (window.scrollY > 200) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-50px";
  }
});

// 3/5

// const buttonUno = document.querySelector(".btn-1");
// const buttonDoss = document.querySelector(".btn-2");
// const response = document.querySelector("p");
// const bigContainer = document.querySelector(".questioncontainer");
// console.log(bigContainer);

// buttonUno.addEventListener("click", () => {
//   response.style.opacity = "1";
//   response.style.visibility = "visible";
//   response.style.background = "green";
//   response.style.transform = "translate(0px)";
//   response.style.transition = "0.6s ease";
  
// });

// buttonDoss.addEventListener("click", () => {
//   response.style.opacity = "1";
//   response.style.background = "red";
//   response.style.transform = "translate(0px)";
//   response.style.transition = "0.6s ease";
// });


// corrigé, en rajoutant une classe aussi 


// buttonUno.addEventListener("click", () => {
//   response.classList.add("show-response")
// })


// *****************************************


// bigContainer.addEventListener("mouseover", () => {
//   bigContainer.style.background = "pink";
// });

// bigContainer.addEventListener("mouseout", () => {
//   bigContainer.style.background = "blue";
// });

// bigContainer.addEventListener("click", () => {
//   bigContainer.style.borderRadius = "50px";
// });

// 5/5

const formulaire = document.querySelector("form");
const nom = document.querySelector('input[type="text"]');
const langages = document.querySelector("select");
const textContent = document.querySelector("form > div");

formulaire.addEventListener("click", (e) => {
  if (cgv.checked) {
    textContent.innerhtml = `
            <h3>Nom: ${nom} </h3>
            <h4> Langage favoris : ${langages} </h4>          `;
  } else {
    alert("veuillez accepter les conditions générales de vente");
  }
});

// 1/5

// corrigé 

// le text
const inputName = document.querySelector('input[type="text"]'); // Corrige le sélecteur d'input
// les options
const select = document.querySelector('select');
const form = document.querySelector(".form");

let contentText = "";
let langages = "";
const cgv = document.querySelector('#cgv'); // Assure-toi que tu sélectionnes la case à cocher


inputName.addEventListener('input', (e) => {

  contentText = e.target.value;

});


select.addEventListener('change', (e)  => {
     

     langages = e.target.value;
})


form.addEventListener("submit", (e) => {
e.preventDefault();
  
if(cgv.checked) {
  document.querySelector("form > div").innerHTML = `
  <h3> Nom: ${contentText} </h3>    
  <h4>langage favoris : ${langages} </h4>`
}else {
  alert('veuillez accepter les')
}


})



















// const boite = document.querySelector(".boite");

// setInterval(() => {}, 3000); // 3000 millisecondes = 3 secondes

// 0/5


// corrigé 

//  1) on déclare set interval )tu déclares une variable interval et tu lui assignes la valeur de setInterval( fonction JavaScript appelée setInterval, cette fonction va exécuter le bloc de code entre les accolades {} toutes les secondes (1000 millisecondes). .).setInterval renvoie un identifiant que tu stockes dans interval. Tu pourras utiliser cet identifiant plus tard pour arrêter la répétition avec clearInterval(interval) si besoin.

// let interval = setInterval(() => {
//   document.body.innerHTML += 
//   `
//    <div class = "box">

//       <h2> Nouvelle boite</h2>

//     </div>  
  
//   ` 
// } , 1000)

// // :mtn je veux arrêter l'ajout infini de ma boite box 
// document.body.addEventListener('click', (e) => {
 

//   clearInterval(interval);
// })









// // window.addEventListener('click', (e) => {
// //     e.target.remove();
// // })

// 5/5

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

// window.onload = () => {
//     window.open("https://www.tuifly.be/fr/mytui/", "_blank", "height=800px,width=800px");
// }

// applique style a plusieurs variables sans avoir a refaire tjrs declaration de variable

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.background = "yellow";
  });
});


let clavierLettre = document.querySelector('.ground');
let keyspress = document.querySelector('#key');
const audio = new Audio('./Enter.mp3');



document.addEventListener('keypress', (e) => {
    
   keyspress.textContent = e.key;
   audio.currentTime = 0;
   audio.play();
  
})






// window.addEventListener('mousemove', (e) => {

// })

// 1.5/5

// corrigé du mouse move(quand la souris te suit)

const mousemove = document.querySelector(".mouse");
console.log(mousemove);

window.addEventListener('mousemove', (e) => {

mousemove.style.left = e.pageX + "px";
 mousemove.style.top = e.pageY + "px"


})

//objectif : enfait ya la souris elle a des coordonnées et ya le rond et nous on veut donner au rond les coorodnées de la souris 

// 1) essentiel enfait la psoition absolute pcq avec position sbolute , l'element mouse (le rond) il a été retiré du flux normal du document et se position de façon indépndante (donc on peut le manipuler en quelque sorte ) il peut circuler librement mtn on va pouvoir lui injecter les propriété etc
// 2)e.pageY et e.pageX ce sont les coordonées en ;live actuelle de la souris dans la page   
// e.pagex c'est enfait la distance depuis le bord gauche de la page genre (reg vidéo)




const buttonDeus = document.querySelector('.btn-2');
const buttonUne =  document.querySelector('.btn-1');
let clickEvent = document.querySelector('.clicks')

buttonUne.addEventListener('click', () => {

let answer = prompt("Entrez votre nom");

clickEvent.innerHTML = `<h3> Voici la réponse: ${answer} </h3>`


})











// impression  interro1 : manque encore d'automatisme et de compréhesnion sur ceertaines aprticularité, 15/30 pour l'instant c'est encore moyen 




