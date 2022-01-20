export interface TodoFields
{
    id : string,
    todoString: string,
    isComplete: boolean,
    onCompleteToggle : (id : string) => void
}