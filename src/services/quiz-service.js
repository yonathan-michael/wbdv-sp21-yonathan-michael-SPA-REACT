const QUIZZES_URL = `http://localhost:3001/api/quizzes`;

export const findAllQuizzes = () =>
	fetch(`${QUIZZES_URL}`).then((response) => response.json());

const api = {
	findAllQuizzes,
};

export default api;
