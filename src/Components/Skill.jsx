import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div id='skill'>
            <h1 style={{margin:'5% 0 0 46%'}}>Skills</h1>
            <div className="flip-card-container" style={{ marginTop: '8%' }}>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Frontend Technologies</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">HTML</p>
                            <p className="title">CSS</p>
                            <p className="title">JAVASCRIPT</p>
                            <p className="title">REACT</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">Backend Technologies</p>
                        </div>
                        <div className="flip-card-back">
                            <p className="title">NODEJS</p>
                            <p className="title">ExpressJS</p>
                            <p className="title">MongoDB</p>
                            <p className="title">SQL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skill;
