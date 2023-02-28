import React from "react";
import { ITodo } from "../../models/todos";
import TTodoItem from "../TTodoItem";

interface IProps {
  todos: ITodo[];
  onChangeCheckHandler: (event: any, id: string) => void;
  onDeleteTodoHandler: (id: string) => void;
}
const TTodosList: React.FC<IProps> = ({
  todos,
  onChangeCheckHandler,
  onDeleteTodoHandler,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <TTodoItem
            id={todo.id}
            title={todo.title}
            onChangeTodo={onChangeCheckHandler}
            checked={todo.status}
            onDeleteTodo={onDeleteTodoHandler}
          />
        </li>
      ))}
    </ul>
  );
};

export default TTodosList;
