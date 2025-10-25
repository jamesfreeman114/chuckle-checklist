export const SearchBar = ( {saveJoke, updateJokes, setUserInput, userInput}) => {
    return (
       
         <div className="joke-add-form">
            <h2>Add Joke</h2>
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
                onClick={async () => {
                  await saveJoke(userInput)
                  updateJokes()
                  setUserInput("")
                }}
              >Add</button>
        
              
        
            </div>
        

    )
}