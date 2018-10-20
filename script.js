const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaNoticia(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
  const respostaDaBusca = new XMLHttpRequest(); 
  respostaDaBusca.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaNoticia()}&page=2&sort=oldest&api-key=eee3824179d548e2a74d3e68c8149b59`)
  respostaDaBusca.onload = carregaPostComNoticias;
  respostaDaBusca.onerror = erro;
  respostaDaBusca.send();


}

function carregaPostComNoticias(){
  listaNoticias = JSON.parse(this.responseText)['response'] ['docs'];
  exibePosts();

}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-gif"> ${listaNoticias.map(noticias => `
        <div class="gif">
          <p> ${noticias.headline.main} </p>
        </div>
        `).join("")}
      </div>`;
}
  


