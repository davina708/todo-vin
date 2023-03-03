import React from "react";
import "./Template.css";

interface PropsType {
    children: React.ReactNode;
    todoLength: number;
}

const Template = ({ children, todoLength }: PropsType) => {
    return (
        <div className='Template'>
            <div className='title'>오늘의 할 일 ({todoLength})</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;
