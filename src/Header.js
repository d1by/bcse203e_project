import React from 'react';

function Header(){
    return(
        <div>
            <header>
                <nav className="navBar">
                    <a href="/">Home</a>
                    <span>|</span>
                    <a href="#locations">Locations</a>
                    <span>|</span>
                    <a href="#suggest">Suggestions</a>
                    <span>|</span>
                    <a href="#random">Random Location</a>
                    <span>|</span>
                    <a href="#about">About Me</a>
                </nav>
            </header>
            <div className="fullscreen-title">
                <h1 className="title">Discover the World</h1>
                <h2 className="subtitle">Holiday Locations</h2>
                <center>
                {/* <img src="https://static.vecteezy.com/system/resources/previews/009/394/201/non_2x/plane-flying-around-the-world-clipart-design-illustration-free-png.png" alt=""/> */}
                {/* <img src="https://media1.giphy.com/media/eN4AxQLFu8gM96uvXd/giphy.gif?cid=6c09b952g04qgcp7whnnsgfs4aynaiv1nnixnbuiaj6baox3&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt=""/> */}
                <img src="https://i.pinimg.com/originals/87/1e/a0/871ea056e0e1b4f5464df090fc623a52.gif" alt="" style={{width: '500px', height: 'auto' }}/>
                </center>
            </div>
        </div>
    )
}

export default Header;