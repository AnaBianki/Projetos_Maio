const produtos =[
    { nome:"Camiseta", detalhes: 
        {preco: 25.99, quantidade: 50 } },
        { nome: "Calça", detalhes: 
       { preco: 79.90, quantidade: 30} },
       { nome: "Tênis Esportivo", detalhes: 
        { preco: 199.90, quantidade: 20 } },
        { nome: "Boné", detalhes: 
            { preco: 39.90, quantidade: 60 } },
            { nome: "Jaqueta", detalhes:
                 {preco: 159.90, quantidade: 15 } },
                 { nome: "Meias (par)", detalhes: 
                    { preco: 9.90, quantidade: 100 } },
                    { nome: "Relógio", detalhes:
                        { preco: 299.90, quantidade: 10 } },
                        { nome: "Óculos de Sol", detalhes:
                            { preco: 89.90, quantidade: 25 }  },
                            { nome: "Cinto de Couro", detalhes:
                                { preco: 49.90, quantidade: 40 } },
                                { nome: "Mochila", detalhes:
                                    { preco: 120.00, quantidade: 18 } },                                
];
const listaProdutosElement = document.getElementById 
("listaProdutos");
const detalhesProdutoElement = document.getElementById
("detalhesProduto");
function mostrarDetalhes(produto) {
    listaProdutosElement.style.display = "none";
    detalhesProdutoElement.innerHTML = `
    <h2>Detalhes: ${produto.nome}</h2>
    <p>Preço: R$ ${produto.detalhes.preco.toFixed(2)}</p>
    <p>Quantidade: ${produto.detalhes.quantidade}</p>
    <button onclick="esconderDetalhes()">Voltar</button>
    `;
    detalhesProdutoElement.style.display = "block";
}
function esconderDetalhes() {
    detalhesProdutoElement.style.display = "none"
    listaProdutosElement.style.display = "block";
}
window.onload = function () {
    produtos.forEach(produto => {
        const itemLista = document.createElement("li");
        itemLista.textContent = produto.nome;
        itemLista.classList.add("item-produto");
        itemLista.onclick = () => mostrarDetalhes(produto);
        listaProdutosElement.appendChild(itemLista);
    });
};
