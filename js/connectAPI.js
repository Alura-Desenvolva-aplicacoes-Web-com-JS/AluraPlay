async function videoLists(){
    const connection = await fetch('http://localhost:3000/videos')
    const cvtConnection = await connection.json()

    return cvtConnection
}

export const connectAPI = {
    videoLists
}