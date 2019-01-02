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
    //resolvendo com if

    // if ($heart.classList.contains("-active")){
    //     $heart.classList.remove("-active");
    // }
    // else{
    //     $heart.classList.add("-active");
    // }

    //resolvendo com toggle - muito mais feliz iuhuuuu
    $heart.classList.toggle("-active")
}

//evento da estrela

