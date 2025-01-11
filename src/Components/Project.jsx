import React from "react";
import "./Project.css";
const Project = () => {
    return (
        <div id='project'>
            <h1 style={{ textAlign: 'center', marginTop: '10%' }}>My Projects</h1>
            <div className="card-container">
                <div className="card" onClick="cardClicked(1)">
                    <h2>MCQ Generator</h2>
                    <p>
                        MCQ Generator is a web application that automatically generates multiple-choice questions based on user input.
                    </p>
                    <a href="#">
                        <button className="cssbuttons-io">
                            <span
                            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Code</span
                            >
                        </button>
                    </a>


                </div>
                <div className="card" onClick="cardClicked(2)">
                    <h2>CCRStream</h2>
                    <p>
                        A movie website where you can watch your favorite movie and save to my favorite section.
                    </p>
                    <a href="#">
                        <button className="cssbuttons-io">
                            <span
                            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Code</span
                            >
                        </button>
                    </a>

                    {/* <a href="https://ccrstream.netlify.app/">
                    <button className="ui-btn">
                    <span>
                        Button 
                    </span>
                    </button>
                    </a> */}
                   
                    


                </div>
                <div className="card" onClick="cardClicked(3)">
                    <h2>ToDo List</h2>
                    <p>
                        A to-do list is a simple, yet powerful tool for organizing tasks and managing time efficiently. It helps prioritize and track activities, ensuring that important tasks are completed on schedule.
                    </p>
                    <a href="#">
                        <button className="cssbuttons-io">
                            <span
                            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Code</span
                            >
                        </button>
                    </a>
                </div>
                <div className="card" onClick="cardClicked(4)">
                    <h2>Registration Form</h2>
                    <p>A form which is use to take information and stores in database using backend programming language java.</p>
                    <a href="#">
                        <button className="cssbuttons-io">
                            <span
                            ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                Code</span
                            >
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
