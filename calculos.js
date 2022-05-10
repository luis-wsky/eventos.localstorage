/* Desenvolva aqui a rotina
Tornar a planilha de cálculos dinâmica com DOM Events. Ao clicar no
botão calcular efetuar os cálculos solicitados na página. */
/* Salvar os valores e cálculos no localStorage para quando a página
for carregada possamos recuperar estes valores e preencher
automaticamente os inputs.*/

/*Alterar o cálculo do botão calcular para que a cada vez que o
usuário digitar um valor e sair do input o formulário seja
automaticamente recalculado.*/
//capturar os inputs:
lerLocalStorage();

let valorBase = document.querySelector("#valor_base");
let valorTransporte = document.querySelector("#valor_transporte");
let valorAlimentacao = document.querySelector("#valor_alimentacao");
// total de receitas
let valorReceita = document.querySelector("#valor_receita");
// despesas / descontos
let valorAutomovel = document.querySelector("#valor_automovel");
let faltas = document.querySelector("#faltas");
//descontos
let valorDesconto = document.querySelector("#valor_descontos");
//total 
let valorTotal = document.querySelector("#valor_total");
// botão
let botaoCalcular = document.querySelector("#btn_calcular");
let listaInputPagina = document.getElementsByName("input");
//eventos
botaoCalcular.addEventListener("click", calcular);

for(let input of listaInputPagina){
    input.addEventListener("blur", calcular);
}
//cálculos
function calcular(){
    let totalReceitas = parseFloat(valorBase.value) + parseFloat(valorTransporte.value) + parseFloat(valorAlimentacao.value);
    valorReceita.value = totalReceitas; 
    let totalDescontos = parseFloat(valorAutomovel.value) + parseFloat(faltas.value);
    valorDesconto.value = totalDescontos;
    valorTotal.value = totalReceitas - totalDescontos;
    salvarLocalStorage();
}
function salvarLocalStorage(){
    //chave valor
    //atributo por id   
    //usar o value como valor para p localStorage
    let inputsPagina = document.getElementsByTagName("input");
    for(let input of inputsPagina){
        console.log(input)
        localStorage.setItem(input.id, input.value);
    }
}
//função de transporte do localstorage para o html
function lerLocalStorage(){
    let inputsPagina = document.getElementsByTagName("input");
    for(let input of inputsPagina){
        let valorLocalStorage = localStorage.getItem(input.id);
        input.value = valorLocalStorage;
    }
}
