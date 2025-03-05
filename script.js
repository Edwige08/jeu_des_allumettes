console.log('Hello ! 👩')

// LES VARIABLES : --------------------------
// Les boutons :
const startButton = document.querySelector('#start-button');
const validButton = document.querySelector('#valid-button');
const resetButton = document.querySelector('#reset-button');
// Les zones de texte :
const remaningMatches = document.querySelector('#remaining-matches');
const playerName = document.querySelector('#player-name');
const wrongNumber = document.querySelector('#wrong-number');
const congratulationsText = document.querySelector('#congratulations');
// Les sections :
const welcomePage = document.querySelector('#welcome-page');
const numberOfPlayersPage = document.querySelector('#number-of-player-page');
const playerPage = document.querySelector('#player-page')
const gamePage = document.querySelector('#game-page');
const victoryDiv = document.querySelector('#victory');
// Les input :
const howManyPlayers = document.querySelector('#number-of-players');
// Autres : 
let numberOfMatches = 50;
let numberOfPlayers = 1;
let player = 1;

// LES FONCTIONS : --------------------------
    // Fonction qui change le joueur :
const nextPlayer = () => {
    if (player == numberOfPlayers) {
        player = 1;
    } else {
        player++;
    }
}

// Fonction qui retire les allumettes :
const removeMatch = (MatchesToRemove) => {
    if (MatchesToRemove > 6 || MatchesToRemove == 0) {
        wrongNumber.innerText = `Tu ne peux pas retirer ${MatchesToRemove} allumettes. Choisis un autre nombre.`;
        return false;
    } else if (MatchesToRemove > numberOfMatches) {
        wrongNumber.innerText = `Tu ne peux pas retirer ${MatchesToRemove} allumettes car il n'en reste que ${numberOfMatches}. Choisis un autre nombre.`;
        return false;
    } else if (MatchesToRemove < 0) {
        wrongNumber.innerText = `Bien essayé, mais tu ne peux pas retirer un nombre négatif d'allumettes !`;
        return false;
    } else {
        numberOfMatches -= MatchesToRemove;
        wrongNumber.innerText = "";
        remaningMatches.innerText = `Nombre d'allumettes restantes : ${numberOfMatches}.`;
        return true;
    }
}

// Fonction qui teste si partie terminée :
const didIWin = () => {
    if (numberOfMatches == 0) {
        victoryDiv.style.display = 'flex';
        gamePage.style.display = "none";
        congratulationsText.innerText = `BRAVO Joueur n°${player} ! Tu as gagné ! 🎉`;
        playerPage.style.display = "none";
        howManyPlayers.value = "";
    }
}

// LES EVENT LISTENERS : --------------------
startButton.addEventListener('click', () => {
    numberOfPlayers = howManyPlayers.value;
    console.log("Nombre de joueurs : " + numberOfPlayers);
    numberOfPlayersPage.style.display = "none";
    playerPage.style.display = "block";
    gamePage.style.display = "block";
    playerName.innerText = "Joueur n°1,";
})

validButton.addEventListener('click', () => {
    const MatchesToRemove = document.querySelector('#matches-to-remove').value;
    if (MatchesToRemove == "") {
        MatchesToRemove.focus()
    } else {
        if (removeMatch(MatchesToRemove) && numberOfMatches != 0) {
            nextPlayer();
            console.log(player)
        }
        didIWin();
        playerName.innerText = `Joueur n°${player},`

    }
})

resetButton.addEventListener('click', () => {
    victoryDiv.style.display = 'none';
    numberOfPlayersPage.style.display = "block";
    playerPage.style.display = "none";
    gamePage.style.display = "none";
    document.querySelector('#matches-to-remove').value = "";
    numberOfMatches = 50;
    let player = 1;
    numberOfPlayers = "";
    remaningMatches.innerText = `Nombre d'allumettes restantes : ${numberOfMatches}.`;
})