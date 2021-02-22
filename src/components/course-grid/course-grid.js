import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./course-card";

// Implement Course Card
const CourseGrid = ({ courses, deleteCourse, updateCourse }) => (
	<div>
		<Link to="/courses/table">
			<i className="fas fa-2x fa-list float-right"></i>
		</Link>
		<div className="row">
			{courses.map((course) => (
				<CourseCard
					key={course._id}
					deleteCourse={deleteCourse}
					updateCourse={updateCourse}
					course={course}
					title={course.title}
					lastModified={course.lastModified}
					owner={course.owner}
				/>
			))}
		</div>
	</div>
);

export default CourseGrid;
