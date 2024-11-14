import React, { useState } from "react";

const RenderJokes = ({ id, joke, rating, onHandleDeletebtn }) => {
    return (
        <div>
            <div>
                <p>{joke}</p>
                <p>{rating}</p>
                <button onClick={() => onHandleDeletebtn(id)}></button>
            </div>
        </div>
    );
};

export default RenderJokes;
