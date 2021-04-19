import React, { useState, useEffect } from "react";
import QuizService from "../../services/quiz-service";
import QuizAttempts from "./QuizAttempts";
import { Link, useParams } from "react-router-dom";

const Quizzes = ({}) => {
	const { courseId } = useParams();

	const [QuizList, setQuizList] = useState([]);

	useEffect(() => {
		QuizService.findAllQuizzes().then((QuizList) => setQuizList(QuizList));
	}, []);

	return (
		<div className="container">
			<h1>Quizzes</h1>
			<ul>
				{QuizList.map((quiz) => {
					return (
						<Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
							<li>
								<h2>{quiz.title}</h2>
							</li>
							<QuizAttempts quizId={quiz._id} />
						</Link>
					);
				})}
			</ul>
		</div>
	);
};

export default Quizzes;
