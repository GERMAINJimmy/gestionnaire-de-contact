class Contacts
{
    constructor(prenom, nom)
    {
        this.prenom = prenom;
        this.nom = nom;
    }
    
}

const Listedecontacts = [];

Listedecontacts.push(new Contacts("Carole", "Lévisse"));
Listedecontacts.push(new Contacts("Melodie", "Nelsonne"));

let option = "";

while(option !== 0)
    {
        console.log("Bienvenue dans le gestionnaire des contacts !");
        console.log("1 : Lister les contacts");
        console.log("2 : Ajouter un contact");
        console.log("0 : Quitter");
        
        option = Number(prompt("choississez une option :"));
        
        if (option === 1)
            {
                console.log("Voici la liste de tous vos contacts !");
                
                for (let i = 0; i < Listedecontacts.length; i++) 
                {                    
                    console.log(Listedecontacts[i]);
                } 
            }
        if (option === 2)
            {
                let Nouveaunom = String(prompt("Saisissez le nom du nouveau contact !"));
                let Nouveauprenom = String(prompt("Saisissez le prenom du nouveau contact !"));
                
                Listedecontacts.push(new Contacts(Nouveauprenom, Nouveaunom));
                
                console.log("Le contact a bien été rajouté au gestionnaire !");
            }
    }
console.log("Au revoir !");