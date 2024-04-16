import React from "react";

function SuggestLoc() {
    return (
        <div id="suggest">
            <h3 className="title">Suggest a location</h3>
            <form className="suggestForm">
                <textarea
                    rows="4"
                    cols="50"
                ></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SuggestLoc;