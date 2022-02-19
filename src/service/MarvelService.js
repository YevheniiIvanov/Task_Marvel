import { useHttp } from '../hooks/hook.http';

const useMarvelService  = () => {
    const {request, loading, error} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=b0204f8b8affae8261f32011e5d29ba1';
    const _baseOffset = 1;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=45&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const _transformCharacter = (char) => {
        return{
            name: char.name,
            description: char.description || 'No description. Visite HOMEPAGE to know more.',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    return {getAllCharacters, loading, error};
}

export default useMarvelService;