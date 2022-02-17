// import { useState, useCallback } from "react";

// export const useHttp = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json', Authorization: 'a38c00490343d12da3cb1c965fcff7f4'}) => {
        
//         setLoading(true);

//         try{
//             const response = await fetch(url, {method, body, headers});

//             if (!response.ok) {
//                 throw new Error(`Could not fetch ${url}, status: ${response.status}`);
//             }

//             const data = await response.json();

//             setLoading(false);
//             return data;
//         }catch(e){

//             setLoading(false);
//             setError(e.message);
//             throw(e);
//         }        
//     },[])

//     const clearError = useCallback(() => {
//         setError(null);
//     },[])
//     return {loading, request, error, clearError};
// }



import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'Aplication/json'}) => {
        
        setLoading(true);

        try{
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            setLoading(false);
            return data;
        }catch(e){

            setLoading(false);
            setError(e.message);
            throw(e);
        }        
    },[])

    const clearError = useCallback(() => {
        setError(null);
    },[])
    return {loading, request, error, clearError};
}