import React, { useState } from "react";

const TrueFalseQuestion = ({ question }) => {
    const [answer, setAnswer] = useState([]);

    const [graded, setGraded] = useState(false);

    return (
        <div>
            <h3>
                {question.question}
                {graded && (
                    <p className="float-right">
                        {question.correct === answer && (
                            <i className="fas fa-check"></i>
                        )}
                        {question.correct !== answer && (
                            <i className="fas fa-times"></i>
                        )}
                    </p>
                )}
            </h3>
            <ul>
                {!graded && (
                    <>
                        <li className="list-group-item">
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        setAnswer("true");
                                    }}
                                    name={question._id}
                                />
                                True
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                <input
                                    type="radio"
                                    onClick={() => {
                                        setAnswer("false");
                                    }}
                                    name={question._id}
                                />
                                False
                            </label>
                        </li>
                    </>
                )}
                {graded && (
                    <>
                        <li
                            className={`list-group-item 
                        ${
                            question.correct === "true"
                                ? "list-group-item-success"
                                : "list-group-item-danger"
                        }`}
                        >
                            <label>
                                <input
                                    type="radio"
                                    checked={answer === "true"}
                                    name={question._id}
                                />
                                True
                            </label>
                            {question.correct === "true" && (
                                <i className="fas float-right fa-check"></i>
                            )}
                            {question.correct === "false" && (
                                <i className="fas float-right fa-check"></i>
                            )}
                        </li>
                        <li
                            className={`list-group-item 
                        ${
                            question.correct === "false"
                                ? "list-group-item-success"
                                : "list-group-item-danger"
                        }`}
                        >
                            <label>
                                <input
                                    type="radio"
                                    checked={answer === "false"}
                                    name={question._id}
                                />
                                False
                            </label>
                            {question.correct === "false" && (
                                <i className="fas float-right fa-check"></i>
                            )}
                            {question.correct === "true" && (
                                <i className="fas float-right fa-times"></i>
                            )}
                        </li>
                    </>
                )}
                <br />
                <button
                    className="btn btn-success"
                    onClick={() => {
                        setGraded(true);
                    }}
                >
                    Grade
                </button>
            </ul>
            <div className="mt-1">
                <p>Your answer: {answer}</p>
            </div>
        </div>
    );
};

export default TrueFalseQuestion;
