import React, { useState, useEffect } from "react";
import QuizService from "../../services/quiz-service";

const QuizAttempts = ({ quizId }) => {
    const [Attempts, setAttempts] = useState([]);

    useEffect(() => {
        QuizService.findAttemptsForQuiz(quizId).then((Attempts) =>
            setAttempts(Attempts)
        );
    }, []);

    return (
        <ul>
            {Attempts.map((attempt, index) => {
                return (
                    <h6>
                        {" "}
                        Attempt {index + 1}: Score: {attempt.score}{" "}
                    </h6>
                );
            })}
        </ul>
    );
};

export default QuizAttempts;
