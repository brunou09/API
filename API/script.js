document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const curiosidadeEl = document.getElementById('curiosidade');
    const imgGato = document.getElementById('gato-img'); 

    imgGato.addEventListener('animationend', () => {
        imgGato.classList.remove('girar');
    });

    async function buscarFatoGato() {
        imgGato.classList.add('girar');

        try {
            curiosidadeEl.textContent = 'Carregando...';
            
            const resposta = await fetch('https://catfact.ninja/fact');
            const dados = await resposta.json();
            const fato = dados.fact;

            curiosidadeEl.textContent = fato;

        } catch (erro) {
            console.error('Erro ao buscar curiosidade:', erro);
            curiosidadeEl.textContent = 'O gato mordeu os fios da rede. Tente novamente!';
        }
    }

    btn.addEventListener('click', buscarFatoGato);
});