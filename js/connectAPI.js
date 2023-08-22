async function videoLists(){
    const connection = await fetch('http://localhost:3000/videos')
    const cvtConnection = await connection.json()

    return cvtConnection
}

async function createVideo(title, description, url, img){
    const connection = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: `${description} mil visualizações`,
            url: url,
            img: img
        })
    })
    
    if(!connectAPI.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }

    const cvtConnection = await connection.json()
    
    return cvtConnection
}

async function searchVideo(searchTerm){
    const connectAPI = await fetch(`http://localhost:3000/videos?q=${searchTerm}`)
    const cvtConnection = await connectAPI.json()

    return cvtConnection
}

export const connectAPI = {
    videoLists, createVideo, searchVideo
}