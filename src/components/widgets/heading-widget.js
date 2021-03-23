import React, { useState } from "react";

const HeadingWidget = ({
	widget,
	updateWidget,
	deleteWidget,
	to,
	editing,
	setEditing,
}) => {
	const [cachedWidget, setWidget] = useState(widget);

	return (
		<>
			{editing && (
				<>
					<i
						onClick={() => {
							setEditing(false);
							updateWidget(cachedWidget);
						}}
						className="fas fa-check fa-2x float-right"
					></i>
					{/*<i onClick={() => deleteWidget(item)} className="fas fa-times"></i>*/}
					<input
						className="form-control"
						onChange={(e) =>
							setWidget({
								...cachedWidget,
								text: e.target.value,
							})
						}
						value={cachedWidget.text}
					/>
					<br />
					<select
						className="form-control"
						onChange={(e) =>
							setWidget({
								...cachedWidget,
								size: parseInt(e.target.value),
							})
						}
						value={cachedWidget.size}
					>
						<option value={1}>Heading 1</option>
						<option value={2}>Heading 2</option>
						<option value={3}>Heading 3</option>
						<option value={4}>Heading 4</option>
						<option value={5}>Heading 5</option>
						<option value={6}>Heading 6</option>
					</select>
				</>
			)}
			{!editing && (
				<>
					{widget.size === 1 && <h1>{widget.text}</h1>}
					{widget.size === 2 && <h2>{widget.text}</h2>}
					{widget.size === 3 && <h3>{widget.text}</h3>}
					{widget.size === 4 && <h4>{widget.text}</h4>}
					{widget.size === 5 && <h5>{widget.text}</h5>}
					{widget.size === 6 && <h6>{widget.text}</h6>}
				</>
			)}
		</>
	);
};

export default HeadingWidget;
