import { Todo } from "App";
import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

interface PropsType {
    todo: Todo;
    onCheckToggle: (id: number) => void;
    onInsertToggle: () => void;
    onChangeSelectedTodo: (todo: Todo | null) => void;
}

const TodoItem = ({
    todo,
    onCheckToggle,
    onInsertToggle,
    onChangeSelectedTodo,
}: PropsType) => {
    const { id, text, checked } = todo;
    return (
        <div className='TodoItem'>
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? (
                    <MdCheckBox
                        onClick={() => {
                            onCheckToggle(id);
                        }}
                    />
                ) : (
                    <MdCheckBoxOutlineBlank
                        onClick={() => {
                            onCheckToggle(id);
                        }}
                    />
                )}
                <div
                    className='text'
                    onClick={() => {
                        onChangeSelectedTodo(todo);
                        onInsertToggle();
                    }}
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
