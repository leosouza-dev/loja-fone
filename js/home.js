//evento do botão add ao carinho
const $second = window.document.querySelector(".-second");
$second.addEventListener("click", changingText);

let valorInicial = 10;

//criando função para alterar o texto
function changingText(){
    // valorInicial++;
    // window.document.querySelector(".-car").textContent = "Carrinho (" + ++valorInicial + ")";

    window.document.querySelector(".-car").textContent = `Carrinho (${++valorInicial})`; //template string - es6
}