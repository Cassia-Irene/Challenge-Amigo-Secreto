let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome !== '' && !amigos.includes(nome)) {
        amigos.push(nome);
        
        atualizarLista();

        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(nome => {
        let listaDeNomes = document.createElement('li');
        listaDeNomes.textContent = nome;
        lista.appendChild(listaDeNomes);
    });
}

function sortearAmigo() {
    if (amigos.length > 1) {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    } else {
        alert('Adicione pelo menos dois nomes para sortear!');
    }
}

function reiniciarLista() {
    amigos = [];
    atualizarLista();
    document.getElementById('resultado').textContent = '';
}