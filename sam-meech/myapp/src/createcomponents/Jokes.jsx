// import React from "react";

const Jokes = ({ joke, rating, deletebtn, id }) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? "⭐" : "☆";
    }

    return (
        <div>
            <p>{joke}</p>
            <p>{stars}</p>
            <button onClick={() => deletebtn(id)}>Delete</button>
        </div>
    );
};

export default Jokes;
