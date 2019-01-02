/* Passos no código...
1 -Ter a janela
2 - Ter o html na mão
3 - Pegar o coração
4 - Pegar o clique no coração
5 - No momento do clique, mostar um texto na tela
*/


// evento do coração
const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick);

function handleClick(){
    console.log("ae");
}


//evento do botão add ao carinho
const $carrinho = window.document.querySelector(".-second");
$carrinho.addEventListener("click", changingText);

//criando função para alterar o texto
function changingText(){
    window.document.querySelector(".-car").textContent="Carrinho (11)";
}