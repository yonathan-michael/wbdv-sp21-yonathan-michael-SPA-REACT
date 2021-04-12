import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const EditableQuestion = ({ question }) => {
    return (
        <div>
            {question.type === "MULTIPLE_CHOICE" && (
                <MultipleChoiceQuestion question={question} />
            )}
            {question.type === "TRUE_FALSE" && (
                <TrueFalseQuestion question={question} />
            )}
        </div>
    );
};

export default EditableQuestion;
