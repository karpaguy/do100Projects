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

// const playerInput = document.querySelector('#player-input');
// Não precisa, dá para pegar direto o text value.

const confirmBtn = document.querySelector('#confirm-btn')
const wordSlot = document.querySelector('.word-slot');
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


confirmBtn.addEventListener('click', () => {
    gameRow((document.querySelector('#player-input').value))
})


// Start and Row Functions
function gameStart() {
    rowWord = selectWord()
    wordSlot.textContent  = rowWord.word;
    // Texto → The word I command now is...
}
function gameRow(playerInput) {
   if(checkWord(playerInput)) {
    gameScore++;
    console.log(`Okay... Score: ${gameScore}`);
   }
   else {
    gameScore--;
    console.log(`Okay... Score: ${gameScore}`);
   }
   
   rowWord = selectWord()
   wordSlot.textContent  = rowWord.word;
   // Isso poderia virar uma função até... É usado duas vezes.

    // Texto → DAMN YOU! But how about... || SUFFER! Hou about...

}

gameStart()
console.log(console.log(rowWord.similiar))