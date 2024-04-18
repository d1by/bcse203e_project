import React, { useState } from 'react';

function RandomCard({ data }) {
    const [index, setIndex] = useState(Math.floor(Math.random() * data.length));

    function pickCard() {
        const newIndex = Math.floor(Math.random() * data.length);
        setIndex(newIndex);
    }

    const card = data[index];

    const { title, desc, image } = card;

    return (
        <div id="random">
            <h1 class="title" style={{paddingTop: '100px'}}>Pick a random location</h1>
            <center>
                <div className="card">
                    <h1>{title}</h1>
                    <nav>
                        <img src={image} alt="" />
                        <div className="overlay">
                            <div>{desc}</div>
                        </div>
                    </nav>
                    <button onClick={pickCard}>Re-roll</button>
                </div>
            </center>
        </div>
    );
}

export default RandomCard;