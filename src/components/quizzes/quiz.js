import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionService from "../../services/questions-service";
import EditableQuestion from "./question";

const Quiz = () => {
    const { quizId } = useParams();

    const [Questions, setQuestions] = useState([]);

    useEffect(() => {
        QuestionService.findQuestionsForQuiz(quizId).then((Questions) => {
            setQuestions(Questions);
        });
    }, []);

    return (
        <div className="container mt-5">
            <h3>Quiz</h3>
            <ul>
                {Questions.map((question) => {
                    return (
                        <li>
                            <EditableQuestion question={question} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Quiz;
