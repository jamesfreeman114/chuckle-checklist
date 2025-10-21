import { useState, useEffect } from "react"
import { saveJoke, getAllJokes, editJoke, deleteJoke } from "./services/jokeService"
import stevePic from "./assets/steve.png"

import "./App.css"

export const App = () => {

  const [allJokes , setAllJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [userInput, setUserInput] = useState([])

  const updateJokes = () => {getAllJokes()
                            .then((jokeArr) => {
                            setAllJokes(jokeArr)})}


  
  useEffect(() => {
    getAllJokes().then((jokeArray) => {
      setAllJokes(jokeArray)
      console.log("jokes set!")
    })}, [])
  
  useEffect(() => {
    const told = allJokes.filter(joke => joke.told === true)
    const untold = allJokes.filter(joke => joke.told === false)

    setToldJokes(told)
    setUntoldJokes(untold)
    
  }, [allJokes])


  return ( <div className="app-container" >
              <div className="app-heading">
                <div className="app-heading-circle">
                  <img className="app-logo" src={stevePic} alt="Good job Steve" />
                </div>
                <h1 className="app-heading-text">Chuckle Checklist</h1>
                </div>
                
                  <h2>Add Joke</h2>
                  <div className="joke-add-form">
                      <input
                        className="joke-input"
                        type="text"
                        placeholder="New One Liner"
                        value={userInput}
                        onChange={(event) => {
                            setUserInput(event.target.value)
                            // What's the value of event?
                          }}
                      />
                      <button
                        className="joke-input-submit"
                        placeholder="Add"
                        onClick={ async () => {
                          await saveJoke(userInput)
                          updateJokes()
                          setUserInput("")
                        }}
                       >Add</button>

                     
                </div>
                <div className="joke-lists-container">
                  <div className="joke-list-container">
                    <h2>Told <span className="told-count"> {toldJokes.length}</span></h2>
                    {toldJokes.map( joke => {
                    return (
                    <li className="joke-list-item" key={joke.id}>
                      <p className="joke-list-item-text">{joke.text}</p>
                      <div>
                        <button
                          className="joke-list-action-toggle"
                          onClick ={ async () => {
                            joke.told = !joke.told
                            await editJoke(joke)
                            updateJokes()}}
                        ><i className="fa-regular fa-face-smile" />
                        </button>
                        <button
                          className="joke-list-action-delete"
                          onClick ={ async () => {
                            await deleteJoke(joke)
                            updateJokes()}}
                        ><i className="fa-solid fa-trash-can" />
                        </button>
                      </div> 
                    </li>
                    )})}

                  </div>
                  <div className="joke-list-container">
                    <h2>Untold<span className="untold-count"> {untoldJokes.length}</span></h2>
                    {untoldJokes.map( joke => {
                    return (
                    <li className="joke-list-item" key={joke.id}>
                      <p className="joke-list-item-text">{joke.text}</p>
                      <div>
                        <button
                          className = "joke-list-action-toggle"
                          onClick ={ async () => {
                            joke.told = !joke.told
                            await editJoke(joke)
                            updateJokes()}}
                        ><i className="fa-regular fa-face-meh" />
                        </button>
                        <button
                          className="joke-list-action-delete"
                          onClick ={ async () => {
                            await deleteJoke(joke)
                            updateJokes()}}
                        ><i className="fa-solid fa-trash-can" />
                        </button>
                      </div> 
                    </li>
                    )})}

                  </div>
                  

                    
                  
                  
                </div>
              
          </div>
  
  )

  
}
