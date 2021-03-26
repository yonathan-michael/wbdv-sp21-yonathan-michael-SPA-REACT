import React from "react";
import CourseRow from "./course-row";
import { Link } from "react-router-dom";

export default class CourseTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Owned By</th>
							<th>Last Modified</th>
							<th>
								<i className="fas fa-folder"></i>
								<i className="fas fa-sort-alpha-down"></i>
								<Link to="/courses/grid">
									<i className="fas fa-th"></i>
								</Link>
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.courses.map((course, ndx) => (
							<CourseRow
								key={ndx}
								deleteCourse={this.props.deleteCourse}
								updateCourse={this.props.updateCourse}
								course={course}
								title={course.title}
								lastModified={course.lastModified}
								owner={course.owner}
							/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
