import { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useFlip = () => {
	const [ state, setState ] = useState(true);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};

const useAxios = (baseUrl) => {
	const [ responses, setResponses ] = useState([]);

	const addData = async (endpoint = '') => {
		const resp = await axios.get(`${baseUrl}${endpoint}`);
		setResponses((response) => [ ...response, { ...resp.data, id: uuid() } ]);
	};

	const removeData = () => setResponses([]);

	return [ responses, addData, removeData ];
};
export { useFlip, useAxios };
