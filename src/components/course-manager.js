import React from "react";
import CourseTable from "./course-table/course-table";
import CourseGrid from "./course-grid/course-grid";
import { Link, Route } from "react-router-dom";
import courseService, {
	findAllCourses,
	deleteCourse,
} from "../services/course-service";

export default class CourseManager extends React.Component {
	state = {
		courses: [],
	};

	courseName = React.createRef();

	componentDidMount() {
		courseService
			.findAllCourses()
			.then((courses) => this.setState({ courses }));
	}

	updateCourse = (course) => {
		courseService.updateCourse(course._id, course).then((status) => {
			this.setState((prevState) => {
				let nextState = { ...prevState };
				nextState.courses = prevState.courses.map((c) => {
					if (c._id === course._id) {
						return course;
					} else {
						return c;
					}
				});
				return nextState;
			});
		});
	};

	deleteCourse = (course) => {
		courseService.deleteCourse(course._id).then((status) => {
			this.setState((prevState) => ({
				courses: prevState.courses.filter((c) => c._id !== course._id),
			}));
		});
	};

	addCourse = () => {
		const newCourse = {
			title: this.courseName.current.value,
			owner: "me",
			lastModified: "1/01/2021",
		};
		courseService.createCourse(newCourse).then((actualCourse) => {
			this.state.courses.push(actualCourse);
			this.setState(this.state);
		});
	};

	render() {
		return (
			<div>
				<div class="container-fluid">
					<div class="row">
						<div class="col-1">
							<button>
								<i className="fas fa-bars"></i>
							</button>
						</div>
						<div class="col-9">
							<input
								type="text"
								class="form-control"
								placeholder="Course Name"
								ref={this.courseName}
							></input>
						</div>
						<div class="col-1">
							<button onClick={this.addCourse}>
								<i className="fas fa-plus"></i>
							</button>
						</div>
						<div class="col-1">
							<Link to="/">
								<i className="fas fa-2x fa-home float-right"></i>
							</Link>
						</div>
					</div>
				</div>

				{/*<Route path="/courses/table" component={CourseTable}/>*/}
				<Route path="/courses/table" exact={true}>
					<CourseTable
						updateCourse={this.updateCourse}
						deleteCourse={this.deleteCourse}
						courses={this.state.courses}
					/>
				</Route>
				{/*<Route path="/courses/grid" component={CourseGrid}/>*/}
				<Route path="/courses/grid" exact={true}>
					<CourseGrid
						updateCourse={this.updateCourse}
						deleteCourse={this.deleteCourse}
						courses={this.state.courses}
					/>
				</Route>
				{/*<CourseTable courses={this.state.courses}/>*/}
				{/*<CourseGrid courses={this.state.courses}/>*/}
			</div>
		);
	}
}
