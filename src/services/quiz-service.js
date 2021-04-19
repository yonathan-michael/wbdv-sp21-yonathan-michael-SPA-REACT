// const QUIZZES_URL = `http://localhost:3001/api/quizzes`;

const QUIZZES_URL = `https://quiz-server-01.herokuapp.com/api/quizzes`;

export const findAllQuizzes = () =>
	fetch(`${QUIZZES_URL}`).then((response) => response.json());

export const findAttemptsForQuiz = (quizId) =>
	fetch(
		`https://quiz-server-01.herokuapp.com/api/quizzes/${quizId}/attempts`
	).then((response) => response.json());

export const submitQuiz = (quizId, questions) => {
	fetch(
		`https://quiz-server-01.herokuapp.com/api/quizzes/${quizId}/attempts`,
		{
			method: "POST",
			body: JSON.stringify(questions),
			headers: {
				"content-type": "application/json",
			},
		}
	)
		.then((response) => response.json())
		.then((result) => console.log(result));
};

const api = {
	findAllQuizzes,
	submitQuiz,
	findAttemptsForQuiz,
};

export default api;
