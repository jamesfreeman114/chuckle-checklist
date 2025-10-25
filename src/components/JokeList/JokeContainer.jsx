import { Joke } from "./Joke"

export const JokeContainer = ( {toldJokes, untoldJokes, updateJokes}) => {
    return (
        <div className="joke-lists-container">
            <div className="joke-list-container">
                <h2>Told <span className="told-count"> {toldJokes.length}</span></h2>
                {toldJokes.map((joke) => {
                    return < Joke
                        joke={joke}
                        key={joke.id}
                        updateJokes={updateJokes} />
                })}
            </div>
            <div className="joke-list-container">
                <h2>Untold<span className="untold-count"> {untoldJokes.length}</span></h2>
                {untoldJokes.map(joke => {
                    return < Joke
                        joke={joke}
                        key={joke.id}
                        updateJokes={updateJokes} />
                })}
            </div>
        </div>
    )
}