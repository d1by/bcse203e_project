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
                    <a href="#about">About Me</a>
                </nav>
            </header>
            <div className="fullscreen-title">
                <h1 className="title">Discover the World</h1>
                <h2 className="subtitle">Holiday Locations</h2>
                <center>
                <img src="https://static.vecteezy.com/system/resources/previews/009/394/201/non_2x/plane-flying-around-the-world-clipart-design-illustration-free-png.png" alt=""/>
                </center>
            </div>
        </div>
    )
}

export default Header;