import "./App.css";
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import { BrowserRouter, Route } from "react-router-dom";
import Quizzes from "./components/quizzes/quizzes";
import Quiz from "./components/quizzes/quiz";
import Home from "./components/home";

function App() {
	return (
		<BrowserRouter>
			<div className="container-fluid">
				<Route path="/" exact={true} component={Home} />
				<Route path="/courses" component={CourseManager} />
				<Route
					path="/editor"
					exact={true}
					render={(props) => <CourseEditor {...props} />}
				/>
				<Route path="/courses/:courseId/quizzes" exact={true}>
					<Quizzes />
				</Route>
				<Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
					<Quiz />
				</Route>
			</div>
		</BrowserRouter>
	);
}

export default App;
