import React from "react";
import { Link, useParams } from "react-router-dom";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import widgetReducer from "../../reducers/widget-reducer";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import WidgetList from "../widgets/widget-list";

const reducer = combineReducers({
	moduleReducer: moduleReducer,
	lessonReducer: lessonReducer,
	topicReducer: topicReducer,
	widgetReducer: widgetReducer,
});

const store = createStore(reducer);

const CourseEditor = ({ history }) => {
	const { courseId, moduleId, layout } = useParams();
	return (
		<Provider store={store}>
			<div>
				<h2>
					<Link to="/courses/table">
						<i className="fas fa-arrow-left"></i>
					</Link>
					Course Editor
					<i
						onClick={() => history.goBack()}
						className="fas fa-times float-right"
					></i>
				</h2>
				<div className="row">
					<div className="col-4">
						<ModuleList />
					</div>
					<div className="col-8">
						<div clssName="row">
							<LessonTabs />
						</div>
						<div clssName="row">
							<TopicPills />
						</div>
						<div clssName="row">
							<WidgetList />
						</div>
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default CourseEditor;
