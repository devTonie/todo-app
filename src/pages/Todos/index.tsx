import React, { useState } from "react";
import TInput from "../../components/TInput";
import TTodosList from "../../components/TTodosList";
import TTodosWrapper from "../../components/TTodosWrapper";
import { ITodo } from "../../models/todos";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const countOfActiveTodos = () => {
    return todos.filter((todo) => !todo.status).length;
  };

  const countOfUnactiveTodos = () => {
    return todos.filter((todo) => todo.status).length;
  };

  const onChangeCheckHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: event.target.checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onDeleteTodoHandler = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const onClickClearCompletedTodosHandler = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.status));
  };

  const onKeyDownHandler = (todoTitle: string) => {
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * (100000000 - 1000 + 1) + 1000).toString(),
      title: todoTitle,
      status: false,
    };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  return (
    <div className="w-full text-center p-4 items-center">
      <p className="text-8xl font-thin text-amber-500">todos</p>
      <div className="w-full flex justify-center my-6">
        <TTodosWrapper>
          <TInput onKeyDown={onKeyDownHandler} />
          <TTodosList
            todos={todos}
            onChangeCheckHandler={onChangeCheckHandler}
            onDeleteTodoHandler={onDeleteTodoHandler}
          />
          {todos.length !== 0 && (
            <div className="w-full flex justify-between px-5 py-2">
              <p className="font-thin">{countOfActiveTodos()} items left</p>
              {countOfUnactiveTodos() !== 0 && (
                <button
                  className="font-thin hover:underline"
                  onClick={onClickClearCompletedTodosHandler}
                >
                  Clear completed
                </button>
              )}
            </div>
          )}
        </TTodosWrapper>
      </div>
      <div>
        <p className="font-thin text-sm mt-16">
          Created by{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/anton-simonenkov-618788255/"
          >
            Antonie
          </a>
        </p>
      </div>
    </div>
  );
};

export default TodosPage;
