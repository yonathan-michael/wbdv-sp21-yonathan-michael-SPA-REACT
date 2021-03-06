import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, deleteCourse, updateCourse, key }) => {
	const [editing, setEditing] = useState(false);
	const [title, setTitle] = useState(course.title);

	const saveCourse = () => {
		setEditing(false);
		const newCourse = {
			...course,
			title: title,
		};
		updateCourse(newCourse);
	};

	return (
		<div className="card" style={{ width: "18rem", margin: "15px" }}>
			<img
				src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				{!editing && (
					<Link to={`/courses/grid/edit/${course._id}`}>
						{course.title}
					</Link>
				)}
				{editing && (
					<input
						onChange={(event) => setTitle(event.target.value)}
						value={title}
						className="form-control"
					/>
				)}
				<p className="card-text">Course Description</p>
				<div class="row justify-content-end">
					<div class="col-auto">
						<i
							onClick={() => deleteCourse(course)}
							className="fas fa-trash"
						></i>
						{editing && (
							<i
								onClick={() => saveCourse()}
								className="fas fa-check"
							></i>
						)}
						{!editing && (
							<i
								onClick={() => setEditing(true)}
								className="fas fa-edit"
							></i>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
