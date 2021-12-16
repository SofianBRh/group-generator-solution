//fonction d'ajout d'un  participant



function addParticipant(event){
// j'empeche le fonctionnement par defaut du bouton pour eviter le refresh
event.preventDefault();

// je recupere le nom du participant 
const nameInputElt = document.getElementById('nameInput')
const participantName = nameInputElt.value.trim();


if(participantName === ''){
alert('le nom est obligatoire');
return
}

const participantElt = `
<li>${participantName}</li>

`; 
// je recupere l'element ul qui contien la liste des partcipants
const  participantListElt = document.getElementById("participantList");

// j'ajoute mon élément li a l'element ul 
participantListElt.innerHTML = participantListElt.innerHTML  + participantElt ;
// je vide l'input nameInput


}
// je recupere le formulaire d'ajout de nom
const  addNameForm = document.getElementById("addNameForm");
//quand on soumet le formulaire je veux que la focnction addparticipant soit apelle
addNameForm.addEventListener("submit" , addParticipant);