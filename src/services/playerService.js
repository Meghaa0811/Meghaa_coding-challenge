import axios from "axios";

const BASE_URL = "http://localhost:8080/api/players";

export const getPlayers = () => axios.get(BASE_URL);

export const getPlayerById = (id) =>
    axios.get(`${BASE_URL}/${id}`);

export const addPlayer = (player) =>
    axios.post(BASE_URL, player);

export const updatePlayer = (id, player) =>
    axios.put(`${BASE_URL}/${id}`, player);

export const deletePlayer = (id) =>
    axios.delete(`${BASE_URL}/${id}`);