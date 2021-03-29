import React, { useState } from "react";

const ImageWidget = ({ widget, updateWidget, editing, setEditing }) => {
    const [cachedWidget, setWidget] = useState(widget);

    return (
        <div>
            <h2>Image Widget</h2>
            {editing && (
                <div>
                    <i
                        onClick={() => {
                            setEditing(false);
                            updateWidget(cachedWidget);
                        }}
                        className="fas fa-check fa-2x float-right"
                    ></i>
                    URL
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...cachedWidget,
                                url: e.target.value,
                            })
                        }
                        value={cachedWidget.url}
                        className="form-control"
                    />
                    width
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...cachedWidget,
                                width: parseInt(e.target.value),
                            })
                        }
                        value={cachedWidget.width}
                        className="form-control"
                    />
                    height
                    <input
                        onChange={(e) =>
                            setWidget({
                                ...cachedWidget,
                                height: parseInt(e.target.value),
                            })
                        }
                        value={cachedWidget.height}
                        className="form-control"
                    />
                </div>
            )}
            {!editing && (
                <div>
                    Image
                    <img src={widget.url} />
                    <br />
                    width
                    <h6> {widget.width} </h6>
                    height
                    <h6> {widget.height} </h6>
                </div>
            )}
        </div>
    );
};

export default ImageWidget;
