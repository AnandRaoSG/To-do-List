import React from "react";

function InputContainer({InputValue, writeTodo , addTodo}) {
    return (
        <div className="input-container">
            <input
                type="text"
                placeholder="Enter a Task"
                value={InputValue}
                onChange={writeTodo}
            />
            <button onClick={addTodo}>+</button>
        </div>
    );
}

export default InputContainer;
