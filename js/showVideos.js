import { connectAPI } from "./connectAPI.js"

const list = document.querySelector("[data-lista]")

export default function buildCard(title, description, url, img){
    const video = document.createElement('li')
    video.className = "videos__item"
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${img}" alt="logo canal alura">
    <h3>${title}</h3>
    <p>${description}</p>
</div>`

    return video
}

async function listVideo(){
    const listAPI = await connectAPI.videoLists()
    listAPI.forEach(element => list.appendChild(buildCard(element.titulo, element.descricao, element.url, element.imagem)))

}

listVideo()