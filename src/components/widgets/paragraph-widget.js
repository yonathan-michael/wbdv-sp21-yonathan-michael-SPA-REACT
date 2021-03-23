import React, { useState } from "react";

const ParagraphWidget = ({ widget, editing, setEditing, updateWidget }) => {
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
					<textarea
						className="form-control"
						onChange={(e) =>
							setWidget({
								...cachedWidget,
								text: e.target.value,
							})
						}
						value={cachedWidget.text}
					></textarea>
				</>
			)}
			{!editing && <p>{widget.text}</p>}
		</>
	);
};

export default ParagraphWidget;
