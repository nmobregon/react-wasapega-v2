import {useEffect, useState} from 'react';

export const useFetch = (url) => {

	const [state, setState] = useState({data: undefined, loading: true, error: undefined});
	
	useEffect(()=>{
		console.log("Fetching ", url);
		setState({data: undefined, loading: true, error: undefined});
		fetch(url).then(resp=>resp.json()).then(data=>{
			setState({data: data, loading: false, error: undefined});
		}).catch(e=>{
			setState({data: undefined, loading: false, error: e});

		});
				
	}, [url]);

	return state;


}