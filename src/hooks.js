import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

const useFlip = () => {
	const [ state, setState ] = useState(true);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};

const useAxios = (url) => {
	const [ responses, setResponses ] = useState([]);

	const addData = async () => {
		const resp = await axios.get(url);
		setResponses((response) => [ ...response, { ...resp.data, id: uuid() } ]);
	};

	return [ responses, addData ];
};
export { useFlip, useAxios };
