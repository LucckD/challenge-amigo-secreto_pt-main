let listaDeAmigos = [];
let amigosSorteados = [];

inserirAmigos();

//esvaziar campo
function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
    campo.focus();
}

//insere os nomes em forma de lista
function inserirAmigos() {
    let campoAmigos = document.getElementById('nomesAmigos');
    campoAmigos.innerHTML = '';
    if (listaDeAmigos.length === 0) {
        campoAmigos.innerHTML = 'Nenhum amigo adicionado ainda.';
    } else {
        listaDeAmigos.forEach(amigo => {
            let novoItem = document.createElement('div');
            novoItem.textContent = amigo;
            campoAmigos.appendChild(novoItem);
        });
    }
}

//adiciona um nome a lista (função botão Adicionar) 
function adicionarAmigo() {
    let inputAmigo = document.querySelector('input').value.trim();

    //verificação básica
    if (inputAmigo.length < 3) {
        alert('Digite um nome válido com pelo menos 3 caracteres.');
    } else if (listaDeAmigos.includes(inputAmigo)) {
        alert('Este nome já foi adicionado. Insira um nome diferente.');
    } else {
        listaDeAmigos.push(inputAmigo);
        limparCampo();
        inserirAmigos();
    }
}

//gera um nome aleatório
function gerarNomeAleatorio() {
    if (listaDeAmigos.length === 0) return 'Erro: Lista vazia.';

    let nomeAleatorio;

    //cria uma lista de amigos restantes que ainda não foram sorteados
    let amigosRestantes = listaDeAmigos.filter(amigo => !amigosSorteados.includes(amigo));

    if (amigosRestantes.length === 0) return 'Todos os nomes já foram sorteados.';

    nomeAleatorio = amigosRestantes[Math.floor(Math.random() * amigosRestantes.length)];

    amigosSorteados.push(nomeAleatorio);
    return nomeAleatorio;
}

//sorteia aleatóriamente um nome da lista (função Sortear amigo)
function sortearAmigo() {
    if (listaDeAmigos.length < 4) {
        alert('Insira pelo menos 4 nomes.');
    } else if (amigosSorteados === 0) {
        alert('Todos sorteados.');
    } else {
        let resultadoSorteio = document.getElementById('resultado');
        let nomeSorteado = gerarNomeAleatorio();
        resultadoSorteio.innerHTML = `O nome sorteado foi: <span class="nome-sorteado">${nomeSorteado}</span>`;
    }
}

function direcionarJogo() {
    window.location.href = "https://jogo-delta-weld.vercel.app/";
}

//resolver o problema em que o nome sorteado foi: todos sorteados. Colocar somente a mensagem de "Todos sorteados".