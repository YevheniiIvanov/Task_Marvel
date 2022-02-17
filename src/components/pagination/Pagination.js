import React from 'react';

function Pagination({charPage, totalChar, paginate}) {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalChar / charPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <ul className='pagination' style={{margin: '10px 0'}}>
                {
                    pageNumbers.map(number => (
                        <li className='page-item' key={number}>
                            <a href='#' className='page-link' onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;