import {TodoBase} from "../types";
import {v4 as uuidv4} from "uuid";

const storage : Storage = window.localStorage;

const defaultTodo : TodoBase = {
    id: uuidv4(),
    todoString: "Welcome, add your todos below!",
    isComplete: false
}

export function initTodos() : Array<TodoBase>
{
    try {
        const storedTodosString : string = storage.getItem("savedTodos");
        if (storedTodosString != null)
        {
            const tds : Array<TodoBase> = JSON.parse(storage.getItem("savedTodos"));
            return tds;
        } else {
            console.log("nothing found");
            return [defaultTodo];
        }
    }
    catch (e)
    {
        // if we couldn't parse the json input, just use the default value
        return [defaultTodo];
    }
}

export function buildTodo(textVal : string, isComplete : boolean = false) : TodoBase
{
    const newTodo : TodoBase = {
        id: uuidv4(),
        todoString: textVal,
        isComplete: isComplete
    }
    return newTodo;
}

export function getStorage() : Storage
{
    return storage;
}

export function persistTodosInLocalStorage(todos : Array<TodoBase>) : void
{
    storage.setItem("savedTodos", JSON.stringify(todos));
}