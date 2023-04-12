import { numeroFerramentas, lista, pesquisar } from "./seletores.js";


export function atualizaLista(ferramentas){
    pesquisar.innerHTML = "";
    let list = '';
    if (ferramentas.length <= 0) {
        list += `<div id="no-ferramentas">Nenhum produto disponível</div>`;
    } else {
        ferramentas.forEach((ferramentas, index) => {
            list += `
                <div class="ferramentas">
                ${ferramentas.title} 
                    <div class="ferramentas-image">
                      <img src="${ferramentas.poster_1}" alt="">
                    </div>
                     <a href="#">
                         <div class="ferramentas-button" saibaMais="${ferramentas.title}">
                             SAIBA MAIS
                         </div>
                     </a>
                </div>
            `;
        });
    }
    lista.innerHTML = list;
}

// atualizaLista( ferramentas);
export function atualizaQuantidade(ferramentas) {
    const totalferramentas = ferramentas.length;
    numeroFerramentas.innerHTML =
        totalferramentas > 0
            ? `${totalferramentas} Ferramentas disponíveis`
            : (numeroFerramentas.innerHTMl = '0 ferramentas disponíveis');
}

// atualizaQuantidade(ferramentas);
export function atualizaListaEquantidade(ferramentas) {
    atualizaQuantidade(ferramentas);
    atualizaLista(ferramentas);
}
