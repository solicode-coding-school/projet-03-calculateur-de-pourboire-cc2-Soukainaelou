function calculerPourboire5(){


    let montant = Number(document.getElementById ("montant").value);
    let personnes = Number(document.getElementById("personnes").value);
    let total_pourboire = montant * 5 / 100;
    let pourboire_personnes = total_pourboire / personnes;

    document.getElementById("resultat-total").innerText =
total_pourboire + "DH" ;

    document.getElementById("resultat-par-personne").innerText =
pourboire_personnes + "DH" ;

}

function calculerPourboire10(){
    let montant = Number(document.getElementById ("montant").value);
    let personnes = Number(document.getElementById("personnes").value);
    let total_pourboire = montant * 10 / 100;
    let pourboire_personnes = total_pourboire / personnes;

    document.getElementById("resultat-total").innerText =
total_pourboire + "DH" ;

    document.getElementById("resultat-par-personne").innerText =
pourboire_personnes + "DH" ;

}

function calculerPourboire15(){
    let montant = Number(document.getElementById ("montant").value);
    let personnes = Number(document.getElementById("personnes").value);
    let total_pourboire = montant * 15 / 100;
    let pourboire_personnes = total_pourboire / personnes;

    document.getElementById("resultat-total").innerText =
total_pourboire + "DH" ;

    document.getElementById("resultat-par-personne").innerText =
pourboire_personnes + "DH" ;

}

function calculerPourboire25(){
    let montant = Number(document.getElementById ("montant").value);
    let personnes = Number(document.getElementById("personnes").value);
    let total_pourboire = montant * 25 / 100;
    let pourboire_personnes = total_pourboire / personnes;

    document.getElementById("resultat-total").innerText =
total_pourboire + "DH" ;

    document.getElementById("resultat-par-personne").innerText =
pourboire_personnes + "DH" ;

}

function calculerPourboire50(){
    let montant = Number(document.getElementById ("montant").value);
    let personnes = Number(document.getElementById("personnes").value);
    let total_pourboire = montant * 50 / 100;
    let pourboire_personnes = total_pourboire / personnes;

    document.getElementById("resultat-total").innerText =
total_pourboire + "DH" ;

    document.getElementById("resultat-par-personne").innerText =
pourboire_personnes + "DH" ;

}


function validerFormulaire(){
    let montant =parseFloat(document.getElementById("montant").value);
    let personnes =parseInt(document.getElementById("personnes").value);
    let valide = true;

}

document.getElementById("error-montant").textContent = "";
    document.getElementById("error-personnes").textContent = "";


