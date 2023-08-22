async function videoLists(){
    const connection = await fetch('http://localhost:3000/videos')
    const cvtConnection = await connection.json()

    return cvtConnection
}

async function createVideo(titulo, descricao, url, imagem){
    const connection = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const cvtConnection = await connection.json()
    
    return cvtConnection
}

export const connectAPI = {
    videoLists, createVideo
}