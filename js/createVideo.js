import { connectAPI } from "./connectAPI.js"

const form = document.querySelector("[data-formulario]")

async function createVideo(e){
    e.preventDefault()

    const img = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const title = document.querySelector("[data-titulo]").value
    const description = Math.floor(Math.random() * 10).toString()

    try{
        await connectAPI.createVideo(title, description, url, img)
    
        window.location.href = "../pages/envio-concluido.html"
    } catch (e) {
        alert(e)
    }
}

form.addEventListener('submit', e => createVideo(e))