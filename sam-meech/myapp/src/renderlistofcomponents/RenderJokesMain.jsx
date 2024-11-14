import React, { useState } from "react";
import RenderJokes from "./RenderJokes";
const RenderJokesMain = () => {
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
        },
        {
            id: 3,
            joke: "I used to be addicted to soap, but Im clean now",
            rating: 4
        }
    ];
    const [jokeList, setJokeList] = useState(initialJokes);
    const handleDetelebtn = id => {
        const newJokes = jokeList.filter(joke => joke.id === id);
        setJokeList(newJokes);
    };
    return (
        <div>
            {initialJokes.map(({ id, joke, rating }) => (
                <RenderJokes key={id} joke={joke} rating={rating} onHandleDeletebtn={handleDetelebtn} id={id} />
            ))}
        </div>
    );
};

export default RenderJokesMain;
