let png = document.querySelector('.imagem')
let png2 = document.querySelector('.imagem2')

let counting = [];
let total = 0;
png.addEventListener('click', () => {
    counting.push(1)
    console.log(counting)
})

png2.addEventListener('click', () => {
    for (let i = 0; i < counting.length; i++) {
        total += counting[i];
    }
    console.log(total)
});


