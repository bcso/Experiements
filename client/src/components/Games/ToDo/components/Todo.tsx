import React, { KeyboardEvent, useState } from "react";
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

    function buildTodo(textVal : string, isComplete : boolean = false) : TodoBase
    {
        return {
            id: uuidv4(),
            todoString: textVal,
            isComplete: isComplete
        }
    }

    function handleAddTodo(e : any) : void
    {
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
        const todosUpdated = [...todos];
        for (let i=0; i< todosUpdated.length; i++)
        {
            if ((todosUpdated[i] as TodoBase).id === id)
            {
                // Set the new state
                todosUpdated[i].isComplete = !todosUpdated[i].isComplete;
                
                // Update the css
                const label = document.querySelector<HTMLElement>(`label[for="${todosUpdated[i].id}"]`);
                label.style.textDecoration = todosUpdated[i].isComplete ? "line-through" : "none";
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