const LESSONS_URL =
    "https://wbdv-generic-server.herokuapp.com/api/001069339/lessons";

const TOPICS_URL =
    "https://wbdv-generic-server.herokuapp.com/api/001069339/topics";

export const createTopic = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => response.json());

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`).then((response) =>
        response.json()
    );

export const updateTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            "content-type": "application/json",
        },
    }).then((response) => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "DELETE",
    }).then((response) => response.json());

export default {
    createTopic,
    findTopicsForLesson,
    updateTopic,
    deleteTopic,
};
