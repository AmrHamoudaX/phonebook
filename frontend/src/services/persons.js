import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL + '/api/persons';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newPersonObject) => {
  return axios.post(baseUrl, newPersonObject);
};

const update = (id, newPersonObject) => {
  return axios.put(`${baseUrl}/${id}`, newPersonObject);
};

const deleteId = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAll,
  create,
  update,
  deleteId,
};
