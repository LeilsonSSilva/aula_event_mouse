let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};


function atualizarSubtotal(){
  quantidadeSubtotal.innerText = `${subtotalInfo.quantidade} itens`
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
  
}

atualizarSubtotal()



// Capturar elementos do DOM

let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let quantidadeProduto01 = document.getElementById("quantidade-produto-01");
let valorProduto01 = 11.66




// Declarar as funções

function adicionarUm(){

  // Manipular o INPUT de produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

  // Manipular a QUANTIDADE no subtotal
  subtotalInfo.quantidade += 1;

  // Manipular o VALOR no subtotal
  subtotalInfo.valor = subtotalInfo.valor + valorProduto01

  // Atualizando a quantidade no subtotal
  atualizarSubtotal()
}


// Definir o(s) evento(os)

btnAdicionarProduto01.addEventListener("click", adicionarUm);
