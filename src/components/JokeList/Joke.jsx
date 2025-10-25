import { editJoke, deleteJoke } from "../../services/jokeService"

export const Joke = ( {joke, updateJokes} ) => {
    return (
        <li className="joke-list-item" key={joke.id}>
            <p className="joke-list-item-text">{joke.text}</p>
            <div>
                <button
                    className="joke-list-action-toggle"
                    onClick={async () => {
                        joke.told = !joke.told
                        await editJoke(joke)
                        updateJokes()
                    }}
                ><i className="fa-regular fa-face-smile" />
                </button>
                <button
                    className="joke-list-action-delete"
                    onClick={async () => {
                        await deleteJoke(joke)
                        updateJokes()
                    }}
                ><i className="fa-solid fa-trash-can" />
                </button>
            </div>
        </li>

    )
}