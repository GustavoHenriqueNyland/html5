import ferramentas from "./ferramentas.js";
import {lista} from "./seletores.js"
import { atualizaListaEquantidade, atualizaQuantidade } from "./atualiza.js";

export function digitandoPesquisa(event) {
    const pesquisando = event.target.value;
    const ferramentasEncontradas = filtropesquisaferramentas(pesquisando); 
    ferramentasEncontradas.length > 0 ? atualizaListaEquantidade(ferramentasEncontradas) : (lista.innerHTML = `<div id="no-ferramentas">Nenhuma ferramenta encontrada</div>`), atualizaQuantidade(ferramentasEncontradas);
}

function filtropesquisaferramentas(pesquisando) {
  return ferramentas.filter((ferramenta) => {return ferramenta.title.toLowerCase().includes(pesquisando.toLowerCase());  });
}


