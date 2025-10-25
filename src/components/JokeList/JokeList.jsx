import { useState, useEffect } from "react"
import { getAllJokes, saveJoke } from "../../services/jokeService"
import { SearchBar } from "./SearchBar"
import { Heading } from "./Heading"
import { JokeContainer } from "./JokeContainer"
import "./JokeList.css"


export const JokeList = () => {
    const [allJokes, setAllJokes] = useState([])
    const [toldJokes, setToldJokes] = useState([])
    const [untoldJokes, setUntoldJokes] = useState([])
    const [userInput, setUserInput] = useState([])

    const updateJokes = () => {
        getAllJokes()
            .then((jokeArr) => {
                setAllJokes(jokeArr)
            })
    }

    useEffect(() => {
        getAllJokes().then((jokeArray) => {
            setAllJokes(jokeArray)
            console.log("jokes set!")
        })
    }, [])

    useEffect(() => {
        const told = allJokes.filter(joke => joke.told === true)
        const untold = allJokes.filter(joke => joke.told === false)

        setToldJokes(told)
        setUntoldJokes(untold)

    }, [allJokes])


    return (
    
    <div className="app-container" >

        < Heading />
        
        < SearchBar
            saveJoke={saveJoke}
            updateJokes={updateJokes}
            setUserInput={setUserInput}
            userInput={userInput}
        />

        < JokeContainer 
            toldJokes={toldJokes}
            untoldJokes={untoldJokes}
            updateJokes={updateJokes}        
        />

        
    </div>
    )
}