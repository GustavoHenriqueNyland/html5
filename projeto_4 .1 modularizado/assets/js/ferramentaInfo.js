import { lista } from "./seletores.js";
import ferramentas from "./ferramentas.js";

export function ferramentaInfo(ferramentaIdInfo, idPoster) {
  const verInfo = ferramentas.find((info) => info.title === ferramentaIdInfo);
  var idPosterImage;
  if (idPoster == 1) {
    idPosterImage = verInfo.poster_1;
  }
  if (idPoster == 2) {
    idPosterImage = verInfo.poster_2;
  }
  if (idPoster == 3) {
    idPosterImage = verInfo.poster_3;
  }
  if (idPoster == 4) {
    idPosterImage = verInfo.poster_4;
  }
  let infoList = "";
  infoList += `
                <div class="lbox">
                    <div class="info_navegar">
                        <div class="navegarFechar">
                            <a href="#" fechaImagem = "fechar" class="btn" id="close">X</a>
                            <div class = "tituloInfo">Ferramenta número: ${verInfo.title}</div>
                        </div>
                        <div class="navegar">
                            <a href="#" voltaImagem = "menos" class="btn" id="prev">&#171;</a>
                            <a href="#" avancaImagem = "mais" class="btn" id="next">&#187;</a> 
                        </div>  
                    </div>
                    <div class="box_info">
                        ${verInfo.info}</h1>                    
                    </div>   
                    <div class="box_img">
                        <img src="${idPosterImage}" alt="" class="img_size"> 
                    </div>
                </div>
                `;
  lista.innerHTML = infoList;
}
