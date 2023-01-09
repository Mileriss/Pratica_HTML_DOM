//Atribuindo a coleção a uma constante
const colecao = document.getElementsByTagName("p")

//Exemplo 1
//Vai alterar a cor da fonte
colecao[1].style.color = "purple"

//Exemplo 2
//Alterando a cor de fundo
colecao[2].style.backgroundColor = "gold"

//Exemplo 3
//Vai alterar o texto que será exibido
colecao[3].innerHTML = "Exemplo com texto alterado"

//Exemplo 4
//Vai adicionar uma borda verde
colecao[4].style.border = "2px solid green"

//Exemplo 5
//Vai alterar o tamanho da fonte
colecao[5].style.fontSize = "40px"

//Exemplo geral
//Vai adicionar um background preto para todos os elementos dentro da coleção
// for(x = 0;x<colecao.length;x++){
//     colecao[x].style.backgroundColor = "black"
// }