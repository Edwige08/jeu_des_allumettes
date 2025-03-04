console.log('Hello ! 👩')

// LES VARIABLES : --------------------------
    // Les boutons :
const startButton = document.querySelector('#start-button');
const validButton = document.querySelector('#valid-button');
const resetButton = document.querySelector('#reset-button');
    // Les zones de texte :
const remaningMatches = document.querySelector('#remaining-matches');
const wrongNumber = document.querySelector('#wrong-number');
const victoryDiv = document.querySelector('#victory');
    // Les sections :
const playerPage = document.querySelector('#player-page')
const gamePage = document.querySelector('#game-page');
    // Les input :
const howManyPlayers = document.querySelector('#number-of-players');
    // Autres : 
let numberOfMatches = 50;
let numberOfPlayers = 1;

// LES FONCTIONS : --------------------------
    // Fonction qui retire les allumettes :
const removeMatch = (MatchesToRemove) => {
    if (MatchesToRemove > 6) {
        wrongNumber.innerText = `Tu ne peux pas retirer ${MatchesToRemove} allumettes. Choisis un autre nombre.`;
    } else if (MatchesToRemove > numberOfMatches) {
        wrongNumber.innerText = `Tu ne peux pas retirer ${MatchesToRemove} allumettes car il n'en reste que ${numberOfMatches}. Choisis un autre nombre.`;
    } else if (MatchesToRemove < 0) {
        wrongNumber.innerText = `Bien essayé, mais tu ne peux pas retirer un nombre négatif d'allumettes !`;
    } else {
        numberOfMatches -= MatchesToRemove;
        wrongNumber.innerText = "";
        remaningMatches.innerText = `Nombre d'allumettes restantes : ${numberOfMatches}.`;
    }
}

    // Fonction qui teste si partie terminée :
const didIWin = () => {
    if (numberOfMatches == 0) {
        victoryDiv.style.display = 'grid';
    }
}

// LES EVENT LISTENERS : --------------------
startButton.addEventListener('click', () => {
    numberOfPlayers = howManyPlayers.value;
})

validButton.addEventListener('click', () => {
    const MatchesToRemove = document.querySelector('#matches-to-remove').value;
    removeMatch(MatchesToRemove);
    didIWin();
})

resetButton.addEventListener('click', () => {
    victoryDiv.style.display = 'none';
    document.querySelector('#matches-to-remove').value = "";
    numberOfMatches = 50;
    remaningMatches.innerText = `Nombre d'allumettes restantes : ${numberOfMatches}.`;
})