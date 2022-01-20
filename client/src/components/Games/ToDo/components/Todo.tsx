import React, { KeyboardEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import PageBaseLayout from "../../../common/PageBaseLayout";
import {v4 as uuidv4} from "uuid";
import TodoItem from "./TodoItem";
import styles from "../css/TodoItem.module.css";
import { TodoBase } from "../types";

function ToDo(){

    const [todos, setTodos] = useState([{
        id: uuidv4(),
        todoString: "Welcome!",
        isComplete: false
    }]);

    // When isComplete changes on any todo, trigger this side effect - update the strike through of each item
    useEffect(() => {
        for (let i=0; i< todos.length; i++)
        {
            const currTodo : TodoBase = todos[i];
            const currLabel : HTMLElement = document.querySelector<HTMLElement>(`label[for="${currTodo.id}"]`);
            currLabel.style.textDecoration = currTodo.isComplete ? "line-through" : "none";
        }
    }, [(todos as Array<TodoBase>).map((td : TodoBase) => {return td.isComplete})]);

    // When the length of our list changes (new todo is added), trigger this side effect - clear the text input
    useEffect(() => {
        (document.getElementById("todoInput") as HTMLInputElement).value = "";
    } , [todos.length]);

    function buildTodo(textVal : string, isComplete : boolean = false) : TodoBase
    {
        const newTodo : TodoBase = {
            id: uuidv4(),
            todoString: textVal,
            isComplete: isComplete
        }
        return newTodo;
    }

    function handleAddTodo(e : any) : void
    {
        e.preventDefault();
        const textVal : string = (document.getElementById("todoInput") as HTMLInputElement).value;
        if (textVal)
        {
            const newTodo : TodoBase = buildTodo(textVal);
            const todosUpdated : Array<TodoBase> = [...todos];
            todosUpdated.push(newTodo);
            setTodos(todosUpdated);
        }
    }

    function textInputKeyDown(e : KeyboardEvent) : void
    {
        if (e.key === 'Enter')
        {
            handleAddTodo(e);
        }
    }

    // Hoist our state
    function onCompleteToggle(id: string) : void
    {
        const todosUpdated : Array<TodoBase> = [...todos];
        for (let i=0; i< todosUpdated.length; i++)
        {
            const todoItem : TodoBase = todosUpdated[i];
            if (todoItem.id === id)
            {
                // Set the new state
                todoItem.isComplete = !todoItem.isComplete;
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
                                    {...todo}
                                    onCompleteToggle={onCompleteToggle}
                                    key={todo.id}
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