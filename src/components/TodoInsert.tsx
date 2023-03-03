import { Todo } from "App";
import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import "./TodoInsert.css";

interface PropsType {
    onInsertToggle: () => void;
    onInsertTodo: (text: string) => void | Todo;
    selectedTodo: Todo | null;
    onRemove: (id: number) => void;
    onUpdate: (id: number, text: string) => void;
}

const TodoInsert = ({
    onInsertToggle,
    onInsertTodo,
    selectedTodo,
    onRemove,
    onUpdate,
}: PropsType) => {
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
        onInsertToggle();
    };

    useEffect(() => {
        if (selectedTodo) {
            setValue(selectedTodo.text);
        }
    }, [selectedTodo]);

    return (
        <div>
            <div className='background' onClick={onInsertToggle}></div>
            <form
                onSubmit={
                    selectedTodo
                        ? () => {
                              onUpdate(selectedTodo.id, value);
                          }
                        : onSubmit
                }
            >
                <input
                    placeholder='add your to-do'
                    value={value}
                    onChange={onChange}
                ></input>
                {selectedTodo ? (
                    <div className='rewrite'>
                        <TiPencil
                            onClick={() => {
                                onUpdate(selectedTodo.id, value);
                            }}
                        />
                        <TiTrash onClick={() => onRemove(selectedTodo.id)} />
                    </div>
                ) : (
                    <button type='submit'>
                        <MdAddCircle />
                    </button>
                )}
            </form>
        </div>
    );
};

export default TodoInsert;
