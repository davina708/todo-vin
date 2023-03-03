import { Todo } from "App";
import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

interface PropsType {
    todos: Todo[];
    onCheckToggle: (id: number) => void;
    onInsertToggle: () => void;
    onChangeSelectedTodo: (todo: Todo | null) => void;
}

const TodoList = ({
    todos,
    onCheckToggle,
    onInsertToggle,
    onChangeSelectedTodo,
}: PropsType) => {
    return (
        <div className='TodoList'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCheckToggle={onCheckToggle}
                    onInsertToggle={onInsertToggle}
                    onChangeSelectedTodo={onChangeSelectedTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
