//  étape 1déclaration de variable (le span n'est pas encorea ffciher dans le html), création d'unélement html attention c'est différent de queryselector
let counter = 0;
const bubbleMaker = () => {


    const bubble = document.createElement('span');


    // étape2 : ajout du span quelque part dans le body(appendchild , ajouter un enfant)
    
    document.body.appendChild(bubble);
    
    
    
    // étape3) ajout d'une class a la balise bubble
    
    bubble.classList.add("bubble");
    // étape 4) ajout du style a la balise bubble 
    
    
    
    // étape 5 ) maath random ,  on va randomiser la taille des bulles pcq la dans le style j'ai pas mis j'ai mis 0*0 tu vois height et width on veut chiffre aléeatoire entre 100et 300 on veut générer
    
    //  math.random enfait c'est soit 0 inclus soit 1 inclus ça génére un nombre entre 0 et 1 tu vois 
    // mtn a chaque fois que jenréactualise la page on voit un -e nouvelle bulle apparaitre elle est randomisé on a randomisé une seul bulle la enfiat
    
    
    
    // nombre aléatoire pour la hauteur et la largeur de la bulle 
    const size = Math.random() * 200 + 100 + "px";
    
    
    
    bubble.style.height = size;
    bubble.style.width = size;
    
    // nombre aléatoire pour la position genre horizontal sur l'axe des x et vertical sur l'axe des y 
    
    // bubble.style.top = Math.random() * 100 + 50 + "%";
    // bubble.style.left = Math.random() * 100 + "%";
    
    //  ou je peux mettre cela dans une variable aussi c pareil genre
    
    const bubbleTop = Math.random() * 200 + 100 + "px";
    const bubbleLeft =  Math.random() * 100 + "%"; 
    
    
    bubble.style.top = bubbleTop;
    bubble.style.left = bubbleLeft;
    
    
    
    
    
    // étape 6 tout se passe en css mtn faut faire avancer les bulles 
    
    // étape7 ) on lui donne une trajectoire 
    
    const plusMinus = Math.random() > 0.5 ? 1  : -1;
    
    // Ternaire : condition ? valeur_si_vrai : valeur_si_faux :
    // si 0.4 ? plus grand ou petit plus petit donc 
    
    
    bubble.style.setProperty("--left", Math.random() * 100 + 50 * plusMinus + "%");
    
    
    
    // en gros on attribue a la variable --left  cela Math.random() * 100 + 50 * plusMinus + "%");  ? et aussi Si tu avais essayé de faire tout cela directement dans les keyframes, ça n'aurait pas fonctionné correctement, car les @keyframes ne peuvent pas gérer des valeurs dynamiques ou aléatoires. Je vais t'expliquer pourquoi.
    // mtn c'est bon c'estr fait  je voudrais donc remove a chaque fois que je clique dessus
    // et le setproperty enfait ça seert a intégrer du cotnenu dans une variable css 
    // Les keyframes contrôlent le mouvement global (par exemple : flotter).
    // setProperty en JavaScript personnalise chaque bulle (par exemple : où elle commence, sa taille, sa couleur).  donc ici pour ça on dit bubble.style.setproperty et pas keyfram.style.setpropery
    
    
    
    
    // compteur pour que ça automatique
    
    bubble.addEventListener("click", () => {
        counter++;
    })

    setInterval(bubbleMaker, 2000);



}
