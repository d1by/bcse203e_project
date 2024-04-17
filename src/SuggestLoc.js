import React, { useState, useEffect } from 'react';
import data from './data';

function SuggestLoc() {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(obj) {
        obj.preventDefault();

        const newCard = {
            title: title,
            desc: desc,
            image: image
        };

        data.push(newCard);

        setTitle('');
        setDesc('');
        setImage('');

        setSubmitted(true);

        setTimeout(function() {
            setSubmitted(false);
        }, 1000);
    }

    function handleTitleChange(obj) {
        setTitle(obj.target.value);
    }

    function handleDescChange(obj) {
        setDesc(obj.target.value);
    }

    function handleImageChange(obj) {
        setImage(obj.target.value);
    }

    return (
        <div id="suggest">
            <h3 className="title" style={{paddingTop: '100px'}}>Suggest a location</h3>
            <form className="suggestForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <br />
                <textarea
                    placeholder="Description"
                    rows="4"
                    cols="50"
                    value={desc}
                    onChange={handleDescChange}
                    style={{ height: '3rem' }}
                ></textarea>
                <br />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={handleImageChange}
                />
                <br />
                <button type="submit">{submitted ? 'Thank you! ' : 'Submit'}</button>
            </form>
            <center>
                <div className="card">
                    <h1>{title}</h1>
                    <nav>
                        <img src={image} alt="" />
                        <div className="overlay">
                            <div>{desc}</div>
                        </div>
                    </nav>
                </div>
            </center>
        </div>
    );
}

export default SuggestLoc;
