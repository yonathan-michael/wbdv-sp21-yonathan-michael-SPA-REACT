import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import { useParams } from "react-router-dom";
import WidgetService from "../../services/widget-service";

const WidgetList = ({
	mywidgets = [],
	createWidget,
	findWidgetsForTopic,
	deleteWidget,
	updateWidget,
}) => {
	const { courseId, moduleId, lessonId, topicId, layout } = useParams();
	const [editingWidget, setEditingWidget] = useState({});
	useEffect(() => {
		if (topicId !== "undefined" && typeof topicId !== "undefined") {
			console.log("hello");
			findWidgetsForTopic(topicId);
		}
	}, [topicId]);
	return (
		<div>
			<i
				onClick={() => createWidget(topicId)}
				className="fas fa-plus float-right fa-2x"
			></i>
			<h1>Widget List</h1>

			<ul className="list-group">
				{mywidgets.map((widget) => (
					<li className="list-group-item" key={widget.id}>
						{editingWidget.id === widget.id && (
							<>
								<select
									className="form-control"
									onChange={(e) => {
										widget.type = e.target.value;
										updateWidget(widget);
									}}
									value={widget.type}
								>
									<option value={"HEADING"}>Heading</option>
									<option value={"PARAGRAPH"}>
										Paragraph
									</option>
									<option value={"LIST"}>List</option>
									<option value={"IMAGE"}>Image</option>
								</select>
								<i
									onClick={() => deleteWidget(widget)}
									className="fas fa-times fa-2x float-right"
								></i>
							</>
						)}
						{editingWidget.id !== widget.id && (
							<>
								<i
									onClick={() => setEditingWidget(widget)}
									className="fas fa-cog fa-2x float-right"
								></i>
							</>
						)}

						{widget.type === "HEADING" && (
							<HeadingWidget
								editing={editingWidget.id === widget.id}
								widget={widget}
								updateWidget={updateWidget}
								setEditing={setEditingWidget}
							/>
						)}
						{widget.type === "PARAGRAPH" && (
							<ParagraphWidget
								editing={editingWidget.id === widget.id}
								widget={widget}
								updateWidget={updateWidget}
								setEditing={setEditingWidget}
							/>
						)}
						{widget.type === "LIST" && (
							<ListWidget
								editing={editingWidget.id === widget.id}
								widget={widget}
								updateWidget={updateWidget}
								setEditing={setEditingWidget}
							/>
						)}
						{widget.type === "IMAGE" && (
							<ImageWidget
								editing={editingWidget.id === widget.id}
								widget={widget}
								updateWidget={updateWidget}
								setEditing={setEditingWidget}
							/>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

const stpm = (state) => ({
	mywidgets: state.widgetReducer.widgets,
});

const dtpm = (dispatch) => ({
	findWidgetsForTopic: (topicId) => {
		WidgetService.findWidgetsForTopic(topicId).then((topic_widgets) =>
			dispatch({
				type: "FIND_ALL_WIDGETS_FOR_TOPIC",
				widgets: topic_widgets,
			})
		);
	},
	createWidget: (topicId) => {
		WidgetService.createWidget(topicId, {
			type: "HEADING",
			size: 1,
			text: "New Heading",
		}).then((actualWidget) =>
			dispatch({
				type: "CREATE_WIDGET",
				widget: actualWidget,
			})
		);
	},
	updateWidget: (widget) => {
		WidgetService.updateWidget(widget.id, widget).then((status) =>
			dispatch({
				type: "UPDATE_WIDGET",
				widget: widget,
			})
		);
	},

	deleteWidget: (widget) => {
		WidgetService.deleteWidget(widget.id).then((status) =>
			dispatch({
				type: "DELETE_WIDGET",
				widgetToDelete: widget,
			})
		);
	},
});

export default connect(stpm, dtpm)(WidgetList);
