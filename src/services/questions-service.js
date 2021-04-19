// const QUIZZES_URL = `http://localhost:3001/api/quizzes`;

const QUIZZES_URL = `https://quiz-server-01.herokuapp.com/api/quizzes`;

export const findQuestionsForQuiz = (qid) => {
	return fetch(`${QUIZZES_URL}/${qid}/questions`).then((response) =>
		response.json()
	);
};

export default {
	findQuestionsForQuiz,
};
