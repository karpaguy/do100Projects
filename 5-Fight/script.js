const wordList = [
    {
        id: 1,
        word: "flask",
        similiar: ["bottle", "cup", "kettle", "bucket", "mug", "glass"]
    },
    {
        id: 2,
        word: "finger",
        similiar: ["hand"]
    },
]

const confirmBtn = document.querySelector('#confirm-btn')
const wordSlot = document.querySelector('.word-slot');
const scoreboard = document.querySelector('.scoreboard');
const enemyPhrase = document.querySelector('.enemy-phrase')

let gameScore = 0;
let rowWord;

// Game Functions
function selectWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
function checkWord(playerInput) {
    if (rowWord['similiar'].find(item => item === playerInput)) {
        return true;
    }
    return false;
    // COLOCAR EM OPERADOR TERNÁRIO, TALVEZ ATÉ MESMO LÁ DENTRO DE gameRow();

}

// Start and Row Functions
function gameStart() {
    rowWord = selectWord()
    wordSlot.textContent  = rowWord.word;
    scoreboard.textContent = `Score → ${gameScore}`;
    // Texto → The word I command now is...
}
function gameRow(playerInput) {
    // checkWord(playerInput) ? () => { enemyPhrase.textContent = "DAMN YOU! But how about... "; gameScore++ } : () => { enemyPhrase.textContent = "SUFFER! Now, how about... "; gameScore-- }
    // Didn't work like that.
    if (checkWord(playerInput)) {
        enemyPhrase.textContent = "DAMN YOU! But how about... ";
        gameScore++;
    } else {
        enemyPhrase.textContent = "SUFFER! Now, how about... ";;
        gameScore--;
    }

    rowWord = selectWord()
    wordSlot.textContent  = rowWord.word;
    scoreboard.textContent = `Score → ${gameScore}`;
}

confirmBtn.addEventListener('click', () => {


    gameRow((document.querySelector('#player-input').value))
})

gameStart()

/* TODO
• Confirm through enter;
• The last word showed won't right after being shown.
• Turn wordList external.
• Make a fun battle log.
*/