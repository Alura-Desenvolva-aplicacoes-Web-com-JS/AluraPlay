import { connectAPI } from "./connectAPI.js";
import buildCard from "./showVideos.js";

async function searchVideo(e){
    e.preventDefault()
    const dataSearch = document.querySelector("[data-pesquisa]").value
    const search = await connectAPI.searchVideo(dataSearch)

    const list = document.querySelector("[data-lista]")

    while(list.firstChild){
        list.removeChild(list.firstChild)
    }

    search.forEach(element => list.appendChild(buildCard(element.titulo, element.descricao, element.url, element.imagem)))
}

const btnSearch = document.querySelector("[data-btn-pesquisa]")
btnSearch.addEventListener("click", e => searchVideo(e))