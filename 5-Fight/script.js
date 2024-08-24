const attackBtn = document.querySelector('#attack');
const shieldBtn = document.querySelector('#shield');

const enemy = {
    Life: 100,
    Damage: 20,
    Attack_time: 2,
};
const player = {
    Life: 30,
    Damage: 20,
    Shield: false,
};

let roundTimer = 0;

function turnPlayer(action) {
    // The PLAYER will no longer be protect at start of HIS turn.
    player["Shield"] = false;
    switch(action) {
        case "Attack": 
            enemy["Life"] -= player["Damage"];
            break;
        case "Shield": 
            player["Shield"] = true;
            break;
    }
}
function turnEnemy() {
    // Turn this into a ternary operator later.
    if (player["Shield"] === false && (roundTimer % enemy["Attack_time"]) == 0 ) 
        {
            player["Life"] -= enemy["Damage"]
        }
};
function combatRound(action){
    roundTimer++
    console.log(`Turn === ${roundTimer}`);
    turnPlayer(action);
    turnEnemy();
    console.log(`Player Life = ${player.Life} || Enemy Life = ${enemy.Life}`);
};

attackBtn.addEventListener('click', () => combatRound("Attack"))
shieldBtn.addEventListener('click', () => combatRound("Shield"))
