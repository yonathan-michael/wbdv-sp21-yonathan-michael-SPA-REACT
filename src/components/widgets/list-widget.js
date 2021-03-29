import React, { useState } from "react";

const ListWidget = ({ widget, updateWidget, editing, setEditing }) => {
    const [cachedWidget, setWidget] = useState(widget);
    const [ordered, setOrdered] = useState(false);

    return (
        <div>
            <h2>List Widget</h2>
            {!editing && (
                <>
                    {ordered && (
                        <ol>
                            {widget.text.split("\n").map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ol>
                    )}
                    {!ordered && (
                        <ul>
                            {widget.text.split("\n").map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    )}
                </>
            )}
            {editing && (
                <div>
                    <i
                        onClick={() => {
                            setEditing(false);
                            updateWidget(cachedWidget);
                        }}
                        className="fas fa-check fa-2x float-right"
                    ></i>
                    <input onClick={() => setOrdered(true)} type="checkbox" />{" "}
                    Ordered
                    <br />
                    List Items
                    <textarea
                        onChange={(e) =>
                            setWidget({
                                ...cachedWidget,
                                text: e.target.value,
                            })
                        }
                        value={cachedWidget.text}
                        rows={10}
                        className="form-control"
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default ListWidget;
