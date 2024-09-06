function pesquisar(){
    let section=document.getElementById("resultados-pesquisa");
let resultados="";
for(let dado of dados) {
    resultados +=`
    <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
            `;
}
section.innerHTML = resultados;
}
