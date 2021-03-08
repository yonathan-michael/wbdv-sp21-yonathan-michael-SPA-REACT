import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseRow = ({
	course,
	lastModified,
	owner,
	deleteCourse,
	updateCourse,
	title,
}) => {
	const [editing, setEditing] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const saveTitle = () => {
		setEditing(false);
		const newCourse = {
			...course,
			title: newTitle,
		};
		updateCourse(newCourse);
	};

	return (
		<tr>
			<td>
				{!editing && (
					<Link to={`/courses/editor/${course._id}`}>{title}</Link>
				)}
				{editing && (
					<input
						onChange={(e) => setNewTitle(e.target.value)}
						value={newTitle}
						className="form-control"
					/>
				)}
			</td>
			<td>{owner}</td>
			<td>{lastModified}</td>
			<td>
				<i
					onClick={() => deleteCourse(course)}
					className="fas fa-trash"
				></i>

				{editing && (
					<i onClick={() => saveTitle()} className="fas fa-check"></i>
				)}

				{!editing && (
					<i
						onClick={() => setEditing(true)}
						className="fas fa-edit"
					></i>
				)}
			</td>
		</tr>
	);
};

export default CourseRow;
