import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./App.css";
import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

export interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

let nextId = 4;

const App = () => {
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
    const [insertToggle, setInsertToggle] = useState<boolean>(false);

    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            text: "할일 1",
            checked: true,
        },
        {
            id: 2,
            text: "할일 2",
            checked: false,
        },
        {
            id: 3,
            text: "할일 3",
            checked: true,
        },
    ]);

    const onInsertToggle = () => {
        if (selectedTodo) {
            setSelectedTodo(null);
        }
        setInsertToggle((prev) => !prev);
    };

    const onInsertTodo = (text: string) => {
        if (text === "") {
            return alert("할 일을 입력해주세요.");
        } else {
            const todo = {
                id: nextId,
                text,
                checked: false,
            };
            setTodos((todos) => todos.concat(todo)); //상태 불변성 유지 push 대신 concat
            nextId++;
        }
    };

    const onCheckToggle = (id: number) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    const onChangeSelectedTodo = (todo: Todo | null) => {
        setSelectedTodo(todo);
    };

    const onRemove = (id: number) => {
        onInsertToggle();
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    const onUpdate = (id: number, text: string) => {
        onInsertToggle();
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
        );
    };

    return (
        <Template todoLength={todos.length}>
            <TodoList
                todos={todos}
                onCheckToggle={onCheckToggle}
                onInsertToggle={onInsertToggle}
                onChangeSelectedTodo={onChangeSelectedTodo}
            />
            <div className='add-todo-button' onClick={onInsertToggle}>
                <MdAddCircle />
            </div>
            {insertToggle && (
                <TodoInsert
                    selectedTodo={selectedTodo}
                    onInsertToggle={onInsertToggle}
                    onInsertTodo={onInsertTodo}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            )}
        </Template>
    );
};

export default App;
