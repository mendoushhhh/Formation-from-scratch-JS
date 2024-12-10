const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "^$µù=:;*/§!çàé&";
const rangeValue = document.getElementByID("password-length");


// petite astuce 2:26-2:26:30

// const generatePassword = () => {

// }
// il veut l'écrire a l'ancienne mais dit toi que c exactement pareil que des fonctiosn fléchés pour s'ahbituer aux deux pcq c exactement pareil que les fonctions fléchés 
// 1)
function generatePassword() {
//  2:25-2:30 ya unt ruc interessant pas besoin d'importer le id la jsp plus rreagrde +un conseil 
    // étape 4
    console.log("je génère un mot de passe");
    let data =[];
    
    if(lowercase.checked)data.push(...dataLowercase)
    if(uppercase.checked)data.push(...dataUppercase);
    if(numbers.checked)data.push(...dataNumbers);
    if(symbols.checked)data.push(...dataSymbols);
    

    // le petit problème number is not defined !!!2:29-2:47 j'ai rien compris
    console.log(data.floor[Math.random()]);

    
}
// 2
generateButton.addEventListener("click", () => {
    console.log("test");
    
});
// ou tu peux dire comme ça je veux que tu me joue generatepasword quand ont e clique dessus

generateButton.addEventListener("click", generatePassword)

// 3 donc la logique , est bonne !! la logique pour générer le password  donc on se créer des données d, va falloir l'incrémdnter d'un certain nombre de choses , on va se stocker dans des tablaux toutes les données possible si on écrit en majuscule toutes les données possible si on écrit en majuscule etc etc etc(tout en haut)

// minute 2:47 : on a vu pas mal de choses interessantes notamment la boucle for ça permet d'enumérer autant de fois q'uon en a besoin pcq le rangevalue énumere autant de fois que cette valeur le emande, on arrive a géénrer des choses en fonction de ce qui est demandé, c'est ça la magie de js plein de petites choses qu'il faut pratiquer






