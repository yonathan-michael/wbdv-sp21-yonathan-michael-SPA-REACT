import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionService from "../../services/questions-service";
import QuizService from "../../services/quiz-service";
import EditableQuestion from "./question";

const Quiz = () => {
    const { quizId } = useParams();

    const [Questions, setQuestions] = useState([]);

    const [graded, setGraded] = useState(false);

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
                            <EditableQuestion
                                graded={graded}
                                setGraded={setGraded}
                                question={question}
                            />
                        </li>
                    );
                })}
            </ul>
            <button
                className="btn btn-success"
                onClick={() => {
                    setGraded(true);
                    QuizService.submitQuiz(quizId, Questions);
                    console.log(Questions);
                }}
            >
                Submit
            </button>
        </div>
    );
};

export default Quiz;
