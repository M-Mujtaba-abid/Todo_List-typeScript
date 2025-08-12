

import React, { useState } from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");
  const [editId, setEditId] = useState<number | null>(null);

  const addOrUpdateTask = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      // Update task
      setTasks(tasks.map(task =>
        task.id === editId ? { ...task, text: input } : task
      ));
      setEditId(null);
    } else {
      // Add new task
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    }

    setInput("");
  };

  const markComplete = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number, text: string) => {
    setInput(text);
    setEditId(id);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // all
  });

  return (
    <div className="flex flex-col items-center mt-10 gap-4 bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Todo List</h1>

      {/* Input Section */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="border p-2 rounded w-64"
        />
        <button
          onClick={addOrUpdateTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editId !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className={`px-3 py-1 rounded ${filter === "incomplete" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
        >
          Incomplete
        </button>
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-2 items-center w-full max-w-md">
        {filteredTasks.length === 0 && (
          <p className="text-gray-500">No tasks found.</p>
        )}
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onComplete={markComplete}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
