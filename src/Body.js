import React  from 'react';

function Body({data}) {
    return(
        <div id="locations">
            <h1 className="title" style={{paddingTop: '100px'}}>Places to Visit</h1>
            <section>
                {data.map(
                    function(item) {
                        const title = item.title;
                        const desc = item.desc;
                        const image = item.image;

                        return (
                            <div className="card">
                            <h1>{title}</h1>
                            <nav>
                                <img src={image} alt="" />
                                <div className="overlay">
                                    <div>{desc}</div>
                                </div>
                            </nav>
                            </div>
                        );
                    }
                )}
            </section>
        </div>
    )
}

export default Body;