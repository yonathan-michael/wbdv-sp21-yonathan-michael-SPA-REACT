import React from "react";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import CourseEditor from "./course-editor/course-editor";
import { Link, Route } from "react-router-dom";
import courseService, {
	findAllCourses,
	deleteCourse,
} from "../services/course-service";

class CourseManager extends React.Component {
	state = {
		courses: [],
	};

	courseName = React.createRef();

	updateCourse = (course) => {
		console.log(course);
		courseService.updateCourse(course._id, course).then((status) =>
			this.setState((prevState) => ({
				...prevState,
				courses: prevState.courses.map((c) =>
					c._id === course._id ? course : c
				),
			}))
		);
	};

	componentDidMount = () =>
		findAllCourses().then((courses) => this.setState({ courses }));

	addCourse = () => {
		const newCourse = {
			title: this.courseName.current.value,
			owner: "me",
			lastModified: "1/01/2021",
		};
		courseService.createCourse(newCourse).then((course) =>
			this.setState((prevState) => ({
				...prevState,
				courses: [...prevState.courses, course],
			}))
		);
	};

	deleteCourse = (courseToDelete) => {
		courseService.deleteCourse(courseToDelete._id).then((status) => {
			this.setState((prevState) => ({
				...prevState,
				courses: prevState.courses.filter(
					(course) => course !== courseToDelete
				),
			}));
		});
	};

	render() {
		return (
			<div>
				<div class="row">
					<div class="col-11">
						<h3>Course Manager</h3>
					</div>
					<div class="col-1">
						<Link to="/">
							<i className="fas fa-2x fa-home float-right"></i>
						</Link>
					</div>
				</div>

				<div class="row">
					<div class="col-10">
						<input
							type="text"
							class="form-control"
							placeholder="Course Name"
							ref={this.courseName}
						></input>
					</div>
					<div class="col-2">
						<button onClick={this.addCourse}>
							<i className="fas fa-plus"></i>
						</button>
					</div>
				</div>

				<Route path="/courses/table" exact={true}>
					<CourseTable
						updateCourse={this.updateCourse}
						deleteCourse={this.deleteCourse}
						courses={this.state.courses}
					/>
				</Route>
				<Route path="/courses/grid" exact={true}>
					<CourseGrid
						updateCourse={this.updateCourse}
						deleteCourse={this.deleteCourse}
						courses={this.state.courses}
					/>
				</Route>
				<Route
					path={[
						"/courses/:layout/edit/:courseId",
						"/courses/:layout/edit/:courseId/:moduleId",
						"/courses/:layout/edit/:courseId/:moduleId/:lessonId",
						"/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId",
						"/courses/:layout/edit/:courseId/:moduleId/:lessonId/:topicId/:widgetId",
					]}
					exact={true}
					render={(props) => <CourseEditor {...props} />}
				></Route>
			</div>
		);
	}
}

export default CourseManager;
