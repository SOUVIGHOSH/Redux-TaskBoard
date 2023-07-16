import axios from "axios";

const client = axios.create({
  baseURL: "https://project-data-8421.onrender.com",
  timeout: 1000,
  headers: "Content-type: application/json",
});

export async function createTask(params) {
  client.post("/tasks", params);
}

export async function fetchTask() {
  let response = await client.get("/tasks");
  return response;
}
