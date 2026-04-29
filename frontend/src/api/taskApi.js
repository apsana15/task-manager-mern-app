import axiosClient from "./axiosClient";

// Get all tasks
export const fetchTasksApi = async (params) => {
  const res = await axiosClient.get("/tasks", { params });
  return res.data; // { success, message, data: tasks[], meta: {...} }
};

// Create task
export const createTaskApi = async (payload) => {
  const res = await axiosClient.post("/tasks", payload);
  return res.data; // { success, message, data: task }
};

// Get task by ID
export const fetchTaskByIdApi = async (id) => {
  const res = await axiosClient.get(`/tasks/${id}`);
  return res.data; // { success, message, data: task }
};

// Update task
export const updateTaskApi = async (id, payload) => {
  const res = await axiosClient.put(`/tasks/${id}`, payload);
  return res.data; // { success, message, data: task }
};

// Delete task
export const deleteTaskApi = async (id) => {
  const res = await axiosClient.delete(`/tasks/${id}`);
  return res.data; // { success, message, data: { id } }
};