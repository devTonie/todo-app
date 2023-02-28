import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface IProps {
  onKeyDown: (todo: string) => void;
}
const TInput: React.FC<IProps> = ({ onKeyDown }) => {
  const [todo, setTodo] = useState<string>("");
  const onChangeTodoHandler = (event: any) => {
    setTodo(event.target.value);
  };
  const onKeyDownHandler = (event: any) => {
    if (event.key === "Enter" && todo) {
      setTodo("");
      onKeyDown(todo);
    }
  };
  return (
    <div className="w-full">
      <div className="relative mt-1 rounded-md shadow-lg">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400 font-bold"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={onChangeTodoHandler}
          className="block w-full p-4 text-sm rounded-md border-gray-300 pl-10 outline-none sm:text-xl placeholder:italic"
          onKeyDown={onKeyDownHandler}
          placeholder="What needs to be done?"
        />
      </div>
    </div>
  );
};

export default TInput;
