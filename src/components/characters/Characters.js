import useMarvelService from '../../service/MarvelService';
import {useState, useEffect} from 'react';
import Pagination from '../pagination/Pagination';

import './characters.scss';
import ArrowLeft from './left.png';
import ArrowRight from './right.png';


const Characters = (props) => {
    const {getAllCharacters} = useMarvelService();

    const [charList, setCharList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charPage] = useState(9);

    useEffect(() => {
        getAllCharacters(210)
        .then(data => setCharList([...data]))
        // eslint-disable-next-line
    }, []);

    let lastCharIndex = charPage * currentPage;
    let firstCharIndex = lastCharIndex - charPage;
    let currentChar = charList.slice(firstCharIndex, lastCharIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const nextPage = () => setCurrentPage(prev => prev === 5? prev = 1 : prev + 1);
    const prevPage = () => setCurrentPage(prev => prev === 1? prev = 5 : prev - 1);

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
                {items}
                <div className='char__pagin'>
                    <img src={ArrowLeft} alt="ArrowLeft" 
                        onClick={prevPage}/>
                    <Pagination
                        charPage={charPage}
                        totalChar={charList.length}
                        paginate={paginate}
                    />
                    <img src={ArrowRight} alt="ArrowRight" 
                        onClick={nextPage}/>
                </div>
            </div>
        </div>
    )
}

export default Characters;