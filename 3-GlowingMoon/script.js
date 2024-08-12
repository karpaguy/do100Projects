let curioArr = [
    "The most widely accepted theory about the origin of the Moon is that it formed after a giant impact between Earth and a Mars-sized body called Theia, around 4.5 billion years ago. Even so, the Moon is very young!", 
    "The temperature on the Moon's surface varies drastically, from about 127°C during the lunar day to -173°C during the lunar night, due to the lack of an atmosphere to regulate the heat. ", 
    "The Moon is in synchronous rotation with Earth, which means we always see the same side of it. The opposite side, called the 'far side' of the Moon, was first observed in 1959 by the Soviet mission Luna 3."
];

console.log('Curiosities obtained with ChatGPT, thanks GPT :D. Also, hi for you looking at the code or the console.')

const moon = document.querySelector('.moon');
const curio = document.querySelector('.curio');

let oldQuoteIndex = 0;
moon.addEventListener('click', () => {
    do {
        newQuoteIndex = Math.floor(Math.random() * curioArr.length);
        // console.log(`OldNum = ${oldQuoteIndex} | NewNum = ${newQuoteIndex}`) DEBUG
    } while (oldQuoteIndex == newQuoteIndex);
    oldQuoteIndex = newQuoteIndex;
    curio.innerText = curioArr[newQuoteIndex];
})

/* TODO → Dar uma transição para as curiosidades quando alterar de frase.

• Seria maneiro conseguir dar uma cor aleatória para o texto, usando um array de cores ou algo assim. */