import React, { useEffect } from "react";
import { connect } from "react-redux";
import EditableItem from "../editable-item";
import { useParams } from "react-router-dom";
import TopicService from "../../services/topic-service";

const TopicPills = ({
    MyTopics = [],
    findTopicsForLesson,
    createTopic,
    updateTopic,
    deleteTopic,
}) => {
    const { courseId, moduleId, lessonId, topicId } = useParams();
    useEffect(() => {
        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId);
        }
    }, [lessonId]);
    return (
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {MyTopics.map((topic) => (
                    <li className="nav-item">
                        <EditableItem
                            active={topic._id === topicId}
                            to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                            updateItem={updateTopic}
                            deleteItem={deleteTopic}
                            item={topic}
                        />
                    </li>
                ))}
                <li>
                    <i
                        onClick={() => createTopic(lessonId)}
                        className="fas fa-plus"
                    ></i>
                </li>
            </ul>
        </div>
    );
};

const stpm = (state) => ({
    MyTopics: state.topicReducer.topics,
});
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        TopicService.findTopicsForLesson(lessonId).then((topics) =>
            dispatch({
                type: "FIND_TOPICS",
                topics,
            })
        );
    },
    createTopic: (lessonId) => {
        TopicService.createTopic(lessonId, { title: "New Topic" }).then(
            (topic) =>
                dispatch({
                    type: "CREATE_TOPIC",
                    topic,
                })
        );
    },
    updateTopic: (topic) => {
        TopicService.updateTopic(topic._id, topic).then((status) =>
            dispatch({
                type: "UPDATE_TOPIC",
                topic,
            })
        );
    },
    deleteTopic: (item) => {
        TopicService.deleteTopic(item._id).then((status) =>
            dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item,
            })
        );
    },
});

export default connect(stpm, dtpm)(TopicPills);
