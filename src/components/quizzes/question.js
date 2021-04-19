import React from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";

const EditableQuestion = ({ question, graded, setGraded }) => {
    return (
        <div>
            {question.type === "MULTIPLE_CHOICE" && (
                <MultipleChoiceQuestion
                    graded={graded}
                    setGraded={setGraded}
                    question={question}
                />
            )}
            {question.type === "TRUE_FALSE" && (
                <TrueFalseQuestion
                    graded={graded}
                    setGraded={setGraded}
                    question={question}
                />
            )}
        </div>
    );
};

export default EditableQuestion;
