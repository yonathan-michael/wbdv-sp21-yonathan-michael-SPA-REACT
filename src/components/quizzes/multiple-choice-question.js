import React, { useState } from "react";

const MultipleChoiceQuestion = ({ question, graded, setGraded }) => {
    const [answer, setAnswer] = useState([]);

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
                {graded &&
                    question.choices.map((choice) => {
                        return (
                            <li
                                className={`list-group-item 
                        ${
                            question.correct === choice
                                ? "list-group-item-success"
                                : "list-group-item-danger"
                        }`}
                            >
                                <label>
                                    <input
                                        checked={answer === choice}
                                        type="radio"
                                        name={question._id}
                                    />
                                    {choice}
                                </label>
                                {question.correct === choice && (
                                    <i className="fas fa-check float-right"></i>
                                )}
                                {question.correct !== choice && (
                                    <i className="fas fa-times float-right"></i>
                                )}
                            </li>
                        );
                    })}
                {!graded &&
                    question.choices.map((choice) => {
                        return (
                            <li className={`list-group-item `}>
                                <label>
                                    <input
                                        onClick={() => {
                                            setAnswer(choice);
                                            question.answer = answer;
                                        }}
                                        type="radio"
                                        name={question._id}
                                    />
                                    {choice}
                                </label>
                            </li>
                        );
                    })}
                <br />
            </ul>
            <div className="mt-1">
                <p>Your answer: {answer}</p>
            </div>
        </div>
    );
};

export default MultipleChoiceQuestion;
