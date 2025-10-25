export const getAllJokes = () => {
    return fetch(`http://localhost:8088/jokes`).then(res => res.json())
}

export const editJoke = async (joke) => {
    return fetch(`http://localhost:8088/jokes/${joke.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(joke)
    })



}

export const deleteJoke = async (joke) => {
    return fetch(`http://localhost:8088/jokes/${joke.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(joke)

    })
}



export const saveJoke = async (userInput) => {
  await fetch('http://localhost:8088/jokes', {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json'
     },
    body: JSON.stringify({ 
        text: userInput, 
        told: false })
  })
}

