import useMarvelService from '../../service/MarvelService';
import {useState, useEffect} from 'react';
import Pagination from '../pagination/Pagination';
import Spinner from '../spiner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMessage';

import './characters.scss';

const Characters = (props) => {
    const {getAllCharacters, loading, error} = useMarvelService();

    //States
    const [charList, setCharList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charPage] = useState(9);

    //Variables for pagination
    let lastCharIndex = charPage * currentPage;
    let firstCharIndex = lastCharIndex - charPage;
    let currentChar = charList.slice(firstCharIndex, lastCharIndex);

    useEffect(() => {
        getAllCharacters()
        .then(data => setCharList([...data]))
        // eslint-disable-next-line
    }, []);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Functions for ArrowPage (props for Pagination)
    const nextPage = () => {
        setCurrentPage(prev => prev === 5? prev = 1 : prev + 1);
        window.scrollTo(0,0);
    };
    const prevPage = () => {
        setCurrentPage(prev => prev === 1? prev = 5 : prev - 1);
        window.scrollTo(0,0);
    };

    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }

            if(i === 0){
                return (
                    <li 
                        className="char__first col-12"
                        key={item.id}
                        >
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className="char__name">{item.name}
                                <div className='char__description'>{item.description}</div>
                            </div>
                    </li>
                )
            }else if(i === 5){
                return (
                    <li 
                        className="char__six col-12 col-lg-8"
                        key={item.id}
                        >
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <div className="char__name-descr">{item.name}
                                <div className='char__description'>{item.description}</div>
                            </div>
                    </li>
                )  
            }else{
                return (
                    <li 
                        className="char__item col-6 col-lg-4"
                        key={item.id}
                        >
                            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                            <span className='char__span'>{item.name}<br/>{item.description}</span>
                    </li>
                )  
            }
        });
        return (
            <ul className="char__grid row">
                {items}
            </ul>
        )
    }
    
    const items = renderItems(currentChar);

    return (
        <div className='container'>
            <div className="char__list">
                {loading ? <Spinner/> : null}
                {error ? <ErrorMessage/> : null}
                {items}
                <div className='char__pagin'>
                    <Pagination
                        charPage={charPage}
                        totalChar={charList.length}
                        paginate={paginate}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Characters;