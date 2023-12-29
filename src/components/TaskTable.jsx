import React, { useState } from 'react';

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      topic: 'topic 1',
      problemLinks: { gfg: 'GFG Link 1', leetCode: 'LeetCode Link 1' },
      completed: false,
    },
    {
      id: 2,
      topic: 'topic 2',
      problemLinks: { gfg: 'GFG Link 2', leetCode: 'LeetCode Link 2' },
      completed: true,
    },
    // Add more tasks as needed
  ]);

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="overflow-x-auto md:w-[62vw]">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> (GFG)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> (LeetCode)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mark as Completed</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <tr key={task.id} className="text-black">
              <td className="px-6 py-4 whitespace-nowrap">{task.topic}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.problemLinks.gfg}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.problemLinks.leetCode}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
