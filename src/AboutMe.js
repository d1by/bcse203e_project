import React from 'react';

function AboutMe() {
    return (
        <div id="about">
            <h1 className="title" style={{paddingTop: '100px'}}>About Me</h1>
            <section>
                <div className="card" style={{width: 'auto' }}>
                    <table className="subtitle">
                        <tbody>
                            <tr>
                                <td className="category">Name</td>
                                <td className="value">Dibyanshu Mohapatra</td>
                            </tr>
                            <tr>
                                <td className="category">Major</td>
                                <td className="value">Computer Science and Technology</td>
                            </tr>
                            <tr>
                                <td className="category">Graduation Year</td>
                                <td className="value">2026</td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td className="category">Contact me:</td>
                                <td className="value">dibyanshu.mohapatra2022@vitstudent.ac.in</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
