import axios from "axios";
import { API } from "../uri";

export const getData = (length, characters, setError) => {
	return axios(`${API}/generatePWD?length=${length}&characters=${characters}`, {
		method: "GET",
	})
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			setError(true);
		});
};
