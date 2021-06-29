var botaoIncrementa = document.querySelector(".btn-incrementa");

var botaoDecrementa = document.querySelector(".btn-decrementa");


botaoDecrementa.addEventListener('click', decrementa)
botaoIncrementa.addEventListener('click', incrementa)

function incrementa() 
{
    
    var item = botaoIncrementa.closest('.item');

    var input = item.querySelector('.quantidade');
    input.value++;
    
    var preco = pegaPrecoItem(item);
    adicionaAoTotal(preco);

}

function decrementa() 
{
    var item = botaoIncrementa.closest('.item');

    var input = item.querySelector('.quantidade');
    input.value--;
    
    var preco = pegaPrecoItem(item);
    adicionaAoTotal(-preco);

}

function pegaPrecoItem(item)
{
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

function adicionaAoTotal(valor)
{
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}