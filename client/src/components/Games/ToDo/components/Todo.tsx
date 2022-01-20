import React, { KeyboardEvent, useEffect, useState } from "react";
import { Row, Container, Form, Button } from "react-bootstrap";
import PageBaseLayout from "../../../common/PageBaseLayout";
import {v4 as uuidv4, V4Options} from "uuid";
import TodoItem from "./TodoItem";
import { TodoFields } from "../types";
import styles from "../css/TodoItem.module.css";

function ToDo(){

    const [todos, setTodos] = useState([{
        id: uuidv4(),
        todoString: "Welcome!",
        isComplete: false
    }]);

    function buildTodo(textVal : string, isComplete : boolean = false) {
        return {
            id: uuidv4(),
            todoString: textVal,
            isComplete: isComplete
        }
    }

    function handleAddTodo(e : any) {
        e.preventDefault();
        let textVal = (document.getElementById("todoInput") as HTMLInputElement).value;
        if (textVal)
        {
            (document.getElementById("todoInput") as HTMLInputElement).value = "";
            const newTodo = buildTodo(textVal);
            const todosUpdated = [...todos];
            todosUpdated.push(newTodo);
            setTodos(todosUpdated);
        }
    }

    function textInputKeyDown(e : KeyboardEvent) {
        if (e.key === 'Enter')
        {
            handleAddTodo(e);
        }
    }

    // Hoist our state
    function onCompleteToggle(id: string)
    {
        const todosUpdated = [...todos];
        for (let i=0; i< todosUpdated.length; i++)
        {
            if ((todosUpdated[i] as TodoFields).id === id)
            {
                todosUpdated[i].isComplete = !todosUpdated[i].isComplete;
            }
        }
        setTodos(todosUpdated);
    }

    return(
        <PageBaseLayout>
            <div className={styles.formContainer}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control 
                            id="todoInput" size="lg" type="text" placeholder="What do we want to get done?" 
                            onKeyDown={(e) => textInputKeyDown(e)}
                        />
                        {/* <Button variant="primary" onClick={(e) => handleAddTodo(e)}>Add Todo</Button> */}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        {todos.map(
                            (todo) => {
                                return(<TodoItem 
                                    key={todo.id}
                                    id={todo.id}
                                    todoString={todo.todoString}
                                    isComplete={todo.isComplete}
                                    onCompleteToggle={onCompleteToggle}
                                />)
                            }
                        )}
                    </Form.Group>
                </Form>
            </div>
            
        </PageBaseLayout>
    )
}

export default ToDo;