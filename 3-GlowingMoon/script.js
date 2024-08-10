let curioArr = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde illum, molestiae nostrum nemo similique distinctio autem itaque doloremque? Repellat expedita numquam fugit repellendus enim, minus unde eos ut accusamus.", 
    "Lorem IPSODMA dolor sit amet consectetur adipisicing elit. EuASDm unde illum, MASOS nostrum nemo similique distinctio autem itaASDque doloremque? Repellat expedita numquam fugit repellendus enimASDASDAQ, minus unde eos ut accusamus.", 
    "Lorem LOREM LOREM sitLOREM consectetur adipisicingLOREM elit. Eum unde illum, molestiae nostrum nemo similique distinctio autem itaque doloremque? Repellat expedita numquam fugit repellendus enim, minus unde eos ut accusamus."
];

const moon = document.querySelector('.moon');
const curio = document.querySelector('.curio');

moon.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * curioArr.length);
    curio.innerText = curioArr[randomNum];
})

/* TODO → Adicionar algumas curiosidades de verdade e dar uma transição para elas quando alterar de frase.

• Não repetir a mesma frase quando apertar a Lua.
• Seria maneiro conseguir dar uma cor aleatória para o texto, usando um array de cores ou algo assim. */