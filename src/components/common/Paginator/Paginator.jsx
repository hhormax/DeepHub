import React, { useEffect, useState } from "react";
import s from './Paginator.module.css';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <button className={s.buttons} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map((p) => {
                const cl = (currentPage === p && s.selectedPage) + ' ' + s.cells;
                return <span className={cl} onClick={() => { onPageChanged(p); }}>{p}</span>
            })}

        {portionCount > portionNumber &&
            <button className={s.buttons} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
    </div>
}

export default Paginator;