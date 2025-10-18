import { useState } from "react"
import { saveJoke } from "./services/jokeService"
import "./App.css"

export const App = () => {

  const [userInput, setUserInput] = useState([])
 

  return ( <div className="app-container" >
              <div className="app-heading">
                <h1 className="app-heading-text">Chuckle Checklist</h1>
                <div className="joke-add-form">
                  <h2>Add Joke</h2>
                      <input
                        className="joke-input"
                        type="text"
                        placeholder="New One Liner"
                        onChange={(event) => {
                            setUserInput(event.target.value)
                            // What's the value of event?
                          }}
                      />
                      <button
                        className="joke-input-submit"
                        placeholder="Add"
                        onClick={() => {saveJoke(userInput)}}
                       >Add</button>

                     
                </div>
              </div>
          </div>
  
  )

  
}
