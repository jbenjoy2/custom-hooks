import { useState } from 'react';
import axios from 'axios';

const useFlip = () => {
	const [ state, setState ] = useState(true);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};

const useAxios = (baseUrl) => {
	const [ responses, setResponses ] = useState([]);

	const addData = async (formatter = (data) => data, endpoint = '') => {
		const resp = await axios.get(`${baseUrl}${endpoint}`);

		setResponses((response) => [ ...response, formatter(resp.data) ]);
	};

	const removeData = () => setResponses([]);

	return [ responses, addData, removeData ];
};
export { useFlip, useAxios };
