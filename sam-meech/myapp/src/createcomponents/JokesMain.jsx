import { useState } from "react";
import Jokes from "./Jokes";

const JokesMain = () => {
    const initialJokes = [
        {
            id: 1,
            joke: "I used to be a banker, but then I lost interest",
            rating: 3
        },
        {
            id: 2,
            joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            rating: 4
        }
    ];

    const [jokesList, setJokesList] = useState(initialJokes);

    const handleDeletebtn = id => {
        const newJokesList = jokesList.filter(joke => joke.id !== id);
        setJokesList(newJokesList);
    };

    return (
        <div>
            {jokesList.map(({ id, joke, rating }) => (
                <Jokes key={id} id={id} joke={joke} rating={rating} deletebtn={handleDeletebtn} />
            ))}
        </div>
    );
};

export default JokesMain;
