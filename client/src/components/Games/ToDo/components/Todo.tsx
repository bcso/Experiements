import React, { KeyboardEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import PageBaseLayout from "../../../common/PageBaseLayout";
import TodoItem from "./TodoItem";
import styles from "../css/TodoItem.module.css";
import { TodoBase } from "../types";
import { buildTodo, getStorage, initTodos, persistTodosInLocalStorage } from "../helpers/helpers";

function ToDo(){

    const storage = getStorage();

    const [todos, setTodos] = useState(initTodos());

    // When isComplete changes on any todo, trigger this side effect - update the strike through of each item
    useEffect(() => {
        for (let i=0; i< todos.length; i++)
        {
            const currTodo : TodoBase = todos[i];
            const currLabel : HTMLElement = document.querySelector<HTMLElement>(`label[for="${currTodo.id}"]`);
            if (currLabel != null)
            {
                currLabel.style.textDecoration = currTodo.isComplete ? "line-through" : "none";
            } else {
                throw("Tried to set effect on null label");
            }
        }
        storage.setItem("savedTodos", JSON.stringify(todos));
    }, [(todos as Array<TodoBase>).map((td : TodoBase) => {return td.isComplete})]);

    // When the length of our list changes (new todo is added), trigger this side effect - clear the text input
    useEffect(() => {
        (document.getElementById("todoInput") as HTMLInputElement).value = "";
    } , [todos.length]);

    // Whenever anything change with todos, we want to persist the state
    useEffect(() => {
        persistTodosInLocalStorage(todos);
    }, [todos]);

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

    function onDeletePress(id: string) : void
    {
        const todosUpdated : Array<TodoBase> = [];
        for (let i=0; i< todos.length; i++)
        {
            const todoItem : TodoBase = {...todos[i]};
            if (todoItem.id !== id)
            {
                // Set the new state
                todosUpdated.push(todoItem);
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
                    </Form.Group>
                    <Form.Group className="mb-3">
                        {todos.map(
                            (todo) => {
                                return(<TodoItem 
                                    {...todo}
                                    onCompleteToggle={onCompleteToggle}
                                    onDeletePress={onDeletePress}
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