import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import { useParams } from "react-router-dom";
import WidgetService from "../../services/widget-service";

const WidgetList = ({
	MyWidgets = [],
	createWidget,
	findWidgetsForTopic,
	deleteWidget,
	updateWidget,
}) => {
	const { courseId, moduleId, lessonId, topicId, widgetId } = useParams();

	return (
		<div>
			<i
				onClick={() => createWidget(topicId)}
				className="fas fa-plus float-right fa-2x"
			></i>
			<h1>Widget List</h1>
			<ul className="list-group">
				{MyWidgets.map((_widget) => (
					<li key={_widget.id} className="list-group-item">
						{_widget.type === "HEADING" && (
							<HeadingWidget
								updateWidget={updateWidget}
								deleteWidget={deleteWidget}
								widget={_widget}
								to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topicId}/${_widget.id}`}
							/>
						)}
						{_widget.type === "PARAGRAPH" && (
							<ParagraphWidget widget={_widget} />
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

const stpm = (state) => ({
	MyWidgets: state.widgetReducer.widgets,
});

const dtpm = (dispatch) => ({
	findWidgetsForTopic: (topicId) => {
		WidgetService.findWidgetsForTopic(topicId).then((widgets) =>
			dispatch({
				type: "FIND_ALL_WIDGETS_FOR_TOPIC",
				widgets,
			})
		);
	},
	createWidget: (topicId) => {
		WidgetService.createWidget(topicId, {
			type: "HEADING",
			size: 1,
			text: "New Heading",
		}).then((widget) =>
			dispatch({
				type: "CREATE_WIDGET",
				widget,
			})
		);
	},
	updateWidget: (widget) => {
		WidgetService.updateWidget(widget._id, widget).then((status) =>
			dispatch({
				type: "UPDATE_WIDGET",
				widget,
			})
		);
	},
	deleteWidget: (widget) => {
		WidgetService.deleteWidget(widget._id).then((status) =>
			dispatch({
				type: "DELETE_WIDGET",
				widgetToDelete: widget,
			})
		);
	},
});

export default connect(stpm, dtpm)(WidgetList);
