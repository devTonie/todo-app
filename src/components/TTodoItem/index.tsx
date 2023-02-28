import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface IProps {
  id: string;
  title: string;
  checked: boolean;
  onChangeTodo: (event: any, id: string) => void;
  onDeleteTodo: (id: string) => void;
}
const TTodoItem: React.FC<IProps> = ({
  id,
  title,
  checked,
  onChangeTodo,
  onDeleteTodo,
}) => {
  const onChangeTodoHandler = (event: any) => {
    onChangeTodo(event, id);
  };
  const onDeleteTodoHandler = () => {
    onDeleteTodo(id);
  };
  return (
    <fieldset className="w-full p-5 border-[1px]">
      <div className="justify-between flex">
        <div className="relative flex items-start">
          <div className="flex h-5">
            <input
              id={id}
              onChange={onChangeTodoHandler}
              type="checkbox"
              className="h-6 w-6 rounded-full border-[1px] border-gray-300 text-indigo-600 outline-none cursor-pointer appearance-none checked:border-green-600 "
            />
          </div>
          <div className="ml-3 text-xl">
            <label
              htmlFor={id}
              className={clsx("font-thin text-gray-700", {
                "line-through text-gray-300": checked,
              })}
            >
              {title}
            </label>
          </div>
        </div>
        <button className="float-right" onClick={onDeleteTodoHandler}>
          <XMarkIcon className="w-5 h-5 text-red-600/20 hover:text-red-600" />
        </button>
      </div>
    </fieldset>
  );
};

export default TTodoItem;
