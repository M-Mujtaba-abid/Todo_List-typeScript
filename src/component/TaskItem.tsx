import React from "react";

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  text,
  completed,
  onComplete,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex justify-between items-center w-full bg-white p-3 rounded shadow">
      <span className={completed ? "line-through text-gray-500" : ""}>
        {text}
      </span>

      <div className="flex gap-2">
       <button
  onClick={() => onComplete(id)}
  className={`px-2 py-1 rounded text-white ${completed ? "bg-yellow-500" : "bg-green-500"}`}
>
  {completed ? "Uncheck" : "Check"}
</button>

        <button
          onClick={() => onEdit(id, text)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
        Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete 
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
