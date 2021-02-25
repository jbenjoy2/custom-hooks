import { useState, useEffect } from 'react';
import axios from 'axios';

const useFlip = () => {
	const [ state, setState ] = useState(true);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};

const useAxios = (storageKey, baseUrl) => {
	const [ responses, setResponses ] = useLocalStorageState(storageKey);

	const addData = async (formatter = (data) => data, endpoint = '') => {
		const resp = await axios.get(`${baseUrl}${endpoint}`);

		setResponses((response) => [ ...response, formatter(resp.data) ]);
	};

	const removeData = () => setResponses([]);

	return [ responses, addData, removeData ];
};

const useLocalStorageState = (keyName, defaultValue = []) => {
	const [ state, setState ] = useState(() => {
		try {
			const item = window.localStorage.getItem(keyName);

			return item ? JSON.parse(item) : defaultValue;
		} catch (err) {
			console.error(err);
			return defaultValue;
		}
	});

	useEffect(
		() => {
			window.localStorage.setItem(keyName, JSON.stringify(state));
		},
		[ keyName, state ]
	);
	return [ state, setState ];
};
export { useFlip, useAxios, useLocalStorageState };
