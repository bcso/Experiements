export interface TodoBase
{
    id : string,
    todoString: string,
    isComplete: boolean
}

export interface TodoProps extends TodoBase
{
    onCompleteToggle : (id : string) => void
}