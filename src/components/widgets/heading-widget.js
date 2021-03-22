import React, { useState } from "react";

const HeadingWidget = ({ widget, updateWidget, deleteWidget, to }) => {
	const [editing, setEditing] = useState(false);
	const [cachedWidget, setWidget] = useState(widget);

	return (
		<div>
			{widget.size === 1 && <h1>{widget.text}</h1>}
			{widget.size === 2 && <h2>{widget.text}</h2>}
			{widget.size === 3 && <h3>{widget.text}</h3>}
			{widget.size === 4 && <h4>{widget.text}</h4>}
			{widget.size === 5 && <h5>{widget.text}</h5>}
			{widget.size === 6 && <h6>{widget.text}</h6>}

			<i onClick={() => setEditing(true)} className="fas fa-cog"></i>

			{editing && (
				<div>
					<input
						onChange={(e) =>
							setWidget((widget) => ({
								...cachedWidget,
								text: e.target.value,
							}))
						}
						value={cachedWidget.text}
						className="form-control"
					/>
					<select
						onChange={(e) =>
							setWidget((widget) => ({
								...cachedWidget,
								size: parseInt(e.target.value),
							}))
						}
						value={cachedWidget.size}
						className="form-control"
					>
						<option value={1}>Heading 1</option>
						<option value={2}>Heading 2</option>
						<option value={3}>Heading 3</option>
						<option value={4}>Heading 4</option>
						<option value={5}>Heading 5</option>
						<option value={6}>Heading 6</option>
					</select>
					<i
						onClick={() => {
							setEditing(false);
							updateWidget(cachedWidget);
						}}
						className="fas fa-check"
					></i>
					<i
						onClick={() => deleteWidget(cachedWidget)}
						className="fas fa-times"
					></i>
				</div>
			)}
		</div>
	);
};

export default HeadingWidget;
