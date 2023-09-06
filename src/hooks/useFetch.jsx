import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState();
    const [errorStatus, setErrorStatus] = useState();

    useEffect (()=> {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                setErrorStatus(e);
            });
     }, []);

     return [data, errorStatus]
}