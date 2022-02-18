import React from 'react';

import './pagination.scss';
import ArrowLeft from './left.png';
import ArrowRight from './right.png';

function Pagination({charPage, totalChar, paginate, nextPage, prevPage, currentPage}) {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalChar / charPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <div>
            <ul 
            className='pagination'
            >
                <li className='pagination__li'key={ArrowLeft}>
                    <img src={ArrowLeft} alt="ArrowLeft" onClick={() => prevPage()}/>
                </li>
                {
                    pageNumbers.map((number, i) => (
                        <li className={currentPage === i+1 ?'pagination__li active' : 'pagination__li'} key={number}>
                            <a href='#' className='pagination__number' onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                <li className='pagination__li' key={ArrowRight}>
                    <img src={ArrowRight} alt="ArrowRight" onClick={()=> nextPage()}/>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;