import React from 'react';

function Pagination({ pages, handlerActive, current }) {
    const paginationList = [];
    let cls = '';
    let startSlice = 0;
    let endSlice = 10;
    if (pages > 1) {
        for (let i = 0; i < pages; i++) {
            if (i === current - 1) {
                cls = 'active';
            } else {
                cls = '';
            }
            paginationList.push(
                <button className={`pag ${cls}`}
                    value={i + 1}
                    onClick={e => handlerActive(e.target.value)}
                    key={i + 1}
                >{i + 1}</button>
            )
        }
    }

    if (current - 5 > 0) {
        if (paginationList.length < current + 5) {
            endSlice = paginationList.length;
            startSlice = paginationList.length - 10;
        } else {
            startSlice = current - 5;
            endSlice = current + 5;
        }

    }

    return (
        <div className='pagination'>
            {pages > 1 ? paginationList.slice(startSlice, endSlice) : null}
        </div>
    )
}

export default Pagination;