

const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
const contadorHtml = document.getElementById('contador-itens');
const listaCarrinho = document.getElementById('lista-carrinho');
const valorTotalHtml = document.getElementById('valor-total');

// Elementos para abrir e fechar o carrinho
const abrirCarrinho = document.getElementById('abrir-carrinho');
const fecharCarrinho = document.getElementById('fechar-carrinho');
const sidebarCarrinho = document.getElementById('sidebar-carrinho');

let totalNoCarrinho = 0;
let valorTotal = 0;
// Abrir carrinho
if (abrirCarrinho && sidebarCarrinho) {
    abrirCarrinho.addEventListener('click', () => {
        sidebarCarrinho.classList.remove('carrinho-oculto');
        sidebarCarrinho.classList.add('carrinho-aberto');
    });
}

// Fechar carrinho
if (fecharCarrinho && sidebarCarrinho) {
    fecharCarrinho.addEventListener('click', () => {
        sidebarCarrinho.classList.remove('carrinho-aberto');
        sidebarCarrinho.classList.add('carrinho-oculto');
    });
}

// Adicionar produtos
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const nomeProduto = botao.dataset.nome;
        const precoProduto = Number(botao.dataset.preco);

        if (!nomeProduto || !Number.isFinite(precoProduto)) {
            alert('Erro: confira o nome e o preço deste produto no HTML.');
            return;
        }

        // Criar item
        const novoItem = document.createElement('li');
        novoItem.classList.add('item-carrinho');

        const textoItem = document.createElement('span');
        textoItem.textContent =
            `${nomeProduto} - R$ ${precoProduto.toFixed(2).replace('.', ',')}`;

        // Botão para remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = '❌';
        botaoRemover.type = 'button';
        botaoRemover.classList.add('btn-remover');
        botaoRemover.title = 'Remover item do carrinho';

        botaoRemover.addEventListener('click', () => {
            totalNoCarrinho--;
            valorTotal -= precoProduto;

            // Evitar pequenas diferenças de arredondamento
            valorTotal = Math.max(0, Math.round(valorTotal * 100) / 100);

            contadorHtml.innerText = totalNoCarrinho;
            valorTotalHtml.innerText =
                valorTotal.toFixed(2).replace('.', ',');

            novoItem.remove();
        });

        novoItem.appendChild(textoItem);
        novoItem.appendChild(botaoRemover);
        listaCarrinho.appendChild(novoItem);

        // Atualizar contador e total
        totalNoCarrinho++;
        valorTotal += precoProduto;
        valorTotal = Math.round(valorTotal * 100) / 100;

        contadorHtml.innerText = totalNoCarrinho;
        valorTotalHtml.innerText =
            valorTotal.toFixed(2).replace('.', ',');
    });
});
