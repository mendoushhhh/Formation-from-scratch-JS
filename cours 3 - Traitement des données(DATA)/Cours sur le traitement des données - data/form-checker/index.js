// étape10: Enovie du formulaire 
const form = document.querySelector("form");
// on se place la ou on déclare nos variables , const form okay
// ensuite va au bout du code c la dernière étape

//  il veut tous els pointer, étape 2)  js on importe
const  inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
// : ça c une autre manière de selectioner 
// Etape8)on va faire la progresseBar:  déja on va la pointer cette progressebar puis on va en ligne 80 la passwordchecker
const progressBar = document.getElementById('progress-bar');


console.log(inputs);
//  on voit qu'on a nodelist de nos 4 élements donc c'est bien ça fonctionne on les a bien séléctionner





// ETAPE7)* voir en bas la note, enfait avec cette fonction on va faire quand même pas mal d'économies

const erroDisplay = (tag, message, valid) => {
    const container = document.querySelector(".pseudo-container");
    const span = document.querySelector(".pseudo-container > span");
    // le span en fait c'est pour l'erreur
    //  enfait a chaque fois qu'on va appelelr cette fonction on va pointer un élement sur le DOM voir 3:56 ensuite on met la logique 

    if(!valid) {
        container.classList.add('error');
        span.textContent = message;
    }else  {
        container.classList.remove('error');
        span.textContent = message;
    }
    
}

const pseudoChecker = (value) => {
    if(value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay("pseudo", "le pseudo doit faire entre 3 et 20 caractères");
    } else if(!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        erroDisplay(
            "pseudo",
            "le pseudo ne doit pas contenir de caractères spéciaux"
        );
        
    }else  {
        errorDisplay("pseudo", "", true)
    }
}

const emailChecker = (value) => {
    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay('email', "le mail n'est pas valide");
    }else {
        errorDisplay('email', "", true);
        email = value;
    }
}















// etape4 ) j'zimerais moi que si on travaille sur l'input de type pseudo qu'on délenche une fonction qui contrôle ce pseudo  on en créer 4
// const pseudoChecker = (value) => {
//     console.log(value);
    
// }voir le corrige

const emailChecker = (value) => {
    console.log(value);
    
}

// étape8 suite apès l'avoir identifier on va controler ce password(cette focntion)
const passwordChecker = (value) => {
    if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )){

         // c'est pour s'assurer que le mot de passe fonctionne
    console.log("test");
    // si ça ne te fait plus log de test ça veut dire qu'on ne rentre plus dan cette condition , genre si tu rentres un carctère spéciale mais si jamais on rentrre dans cette condition il faut générer l'affichage de l'erreur 
    erroDisplay("password", "Minimum de 8 caractères, une majuscule , un chiffre et un caractère spécial");
    }else if (value.length < 12){
        //  la progressbarblue elle st a 67% sinon injectera l'autre 
        progressBar.classList.add('progressBlue');
        erroDisplay('password', "", true);
        password = value;
        //  montre la sécurité maximal lorsqu'il y a plus de 12 caractères
    }
   
    
}



// etape9 suite confirmer le passworchecker il nous reste a faire cela , on compare ce qui a été tapé dans password la varibale password et ce qui a été tapé la dedans e.target.value 4:14
const confirmChecker = (value) => {
    if (value !== password) {
        errorDisplay('confirm', "les mots de passe ne correspondent pas");
        confirmPass = false;

        
    }else {
        errorDisplay('confirm',"", true)
        confirmPass = true;
    }
    
};
// :la dernière foncition ça sera la fonction pour confirmer le mot de passe , faudra juste comparer ce qu' y a écrit dans confirm et dans celui du haut




// étape3 on ajoute un écouteur d'evenments pour chaque input sélectionner
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        console.log(e.target.value);
        // teste ça
        //  quand j'éecris sur pseudo , email , password confirm , on vient de créer 4 eventlisteenr la en 3 lignes haah 

        // etape5) on pourrait via un switch essayer de voir selon le .target.id il nous produit l'input dans lequel on évolue, on peut chosiir une autre méthode mais lui il aime bien switch ça fait les choses propres haha
        // :le role de switch c'est de tester la valeur de .target.id exemple ici si jamais tu tomes sur pseudo he bien j'aimerias que tu me joue pseuoChecker
        switch(e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
                case "email":
                    emailChecker(e.target.value);
                    break
                    case "password":
                        passwordChecker(e.target.value)
                        break
                        case"confirm":
                        confirmChecker(e.target.value);
                        break;
                        default:
                        nul;
                        // le switch il faut tjrs lui mettre un cas par défaut donc ici par défaut tu lui renvoie null 3:45

                        // :la logique de contrôle est ici genre au début on créer des fonctions lign9 , on déclare des variable ligne2 et derrière bah selon ce que  l'utilisateur fait on envoie le checker par exemple  donc ce qu'il faut comprendre c'est que ces fonctions  avoir esoin d'analyser quelque chose 

                        // étape 6 voir ce qu'il se passe quand on tape dans l'inout pseudo apr exemp;eetc                 pseudoChecker(e.target.value);
                        //  donc tu dis ça enfait voir en haut je te passe en paramètre e.aterget .value voir 3:46 a 3:47  , on tous cette logique la enfait de récupérer la valeur de 'linput et de se lancer une logique donc comme on a fait avec pseudo checker onf ait avec les autres 3:48 -3:49
                        // on va pouvoir dans chacune de ces  cecker, fonction analyser un peu ce qu'il s'est fait 

                        // etape 7) partie qui va suivre one st pas obliger de la reocpier c juste pour nous montrer le cheminement et pq on va faire certaines choses après , mise en place de la logique du pseudo checker , pour checker le pseudo et pq on va faire d'une façon différente 3:49-3:55  en réalité IL CONSEILLE DE PROCEDE DIFFEREMMENT PCQ ON DOIT PAS REPETER CETTE LOGIQUE TOUT LE TEMPS ? DONC IL FAUT SE CODER UNE FONCTION QUI VA PRENDRE TOUTE LA LOGIQUE DE L4AFFICHAGE DES ERREURS ET ELLE VA PRENDRE 3 PARAM7TRES  VOIT EN HAUT 

                }
        
    })
})



//  conseil pour cette exo va voir le corrigé pcq la c chaud haha


// etape10 suite  4:21

form.addEventListener('submit', (e) => {
    console.log("test");
    // tu comrpend qu'en faisant ça quand on teste si je soumet le formulaire le test on l'a entreperçu une fraction de secondes car vous savez que le formulaire change de page automatiquement c comme ça en html, les anvigatreus web sont codé pour que quand on valide un formulaire ça change de page mais nous avec js on s'en fout on peut tout faire donc il faut se prémunir contre ce comportmeent par défaut 
    e.preventDefault();
    // donc la mtn ya rien qui check on peut l'envoyer directement

    if(pseudo && email && password && confirmPass) {
        // on a pas mis de ou mais de et pcq ilf aut bien que toutes ces conditions soient rempli !!
// : on va envoyer cette data a un serveur ou une api tu vois donc on met cela dans un objet , c souvent comme ça on regroupe tout dans un objet et on envoie 
        const data = {
                    pseudo: pseudo,
                    email: email,
                    password: password,

        };
        console.log(data);


    inputs.forEach((input) => input.value = "")


        
        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Inscription validée")

    }else {
        alert("Veuillez remplir correctement les champs");
    }

    //  il veut nous apprendre un truc maintenant qu'il nous a pas encore appris  : -->  4:24:30-4:25:10 
// étape 11
    //  ya un autre truc qui dérange c que les inputs ne se vident pas après avoir été envoyé si on veut qu'ils se videent he bien il va falloir après envoyer la data donc tu fais bah ça , ça va nous vider nos 4 inputs en une seul ligne grace a la puissance du foreach 
    // inputs.forEach((input) => input.value = "")

    // étape 12 en envoyant les input il n'a pas vider la bare de progression haha on va y arriver, donc faut simplement retirer la classe 


    progressBar.classList = "";
    // ça sert donc a remove


    //  c'est vraiment dure un peu 

    // il conseille à la fin :  suivre des cours c bien, mais coder par sois même c'est la qu'on apprend le plus on va dire c bien pour avoir des bases recopier ce que els gens font mais derrière vous devez paf voud même réaliser des choses et c'est comme ça qu'on aura une courbe de progression incroyable
    
})