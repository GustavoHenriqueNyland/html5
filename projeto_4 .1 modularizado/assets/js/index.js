import ferramentas from "./ferramentas.js";
import {atualizaListaEquantidade } from "./atualiza.js";
import {pesquisar} from "./seletores.js"
import {ferramentaInfo} from "./ferramentaInfo.js";
import {digitandoPesquisa} from "./pesquisar.js";

pesquisar.addEventListener('keyup', digitandoPesquisa );

var aux = '';
var navegaImagem = 1;

document.body.addEventListener('click', function (event) {
    event.preventDefault();
    const ferramentaIdInfo = event.target.getAttribute('saibaMais');
    const btnRecuar = event.target.getAttribute('voltaImagem');
    const btnAvancar = event.target.getAttribute('avancaImagem');
    const btnFechar = event.target.getAttribute('fechaImagem')
    if (ferramentaIdInfo != null) {
        aux = ferramentaIdInfo;
    }
    if (ferramentaIdInfo) {
        ferramentaInfo(ferramentaIdInfo, 1);
    }
    if (btnRecuar) {
        navegaImagem--;
        if (navegaImagem < 1) {
            navegaImagem = 4;
        }
        ferramentaInfo(aux, navegaImagem);
    }
    if (btnAvancar) {
        navegaImagem++;
        if (navegaImagem > 4) {
            navegaImagem = 1;
        }
        ferramentaInfo(aux, navegaImagem);
    }
    if (btnFechar) {
        atualizaListaEquantidade(ferramentas);
        pesquisar.value = "";
    }
});
atualizaListaEquantidade(ferramentas);

