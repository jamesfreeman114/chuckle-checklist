export const getAllJokes = () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}




export const saveJoke = async (userInput) => {

    const transientState = {
    text: userInput,
    told: false
}


    const postJoke = {
        method: "POST",
        headers: {
        "Content-Type": "application/json"    
        },
        body: JSON.stringify(transientState)
    }

   

    const response = await fetch(`http://localhost:8088/jokes`, postJoke)
}