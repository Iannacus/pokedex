import React from 'react';
import { useBgContext } from '../component/BgContext';

function Thumbnail({ img, alt }) {

    const { changeBg } = useBgContext();

    const handleClick = value => {
        changeBg.change(value.target.src);
    }
    return (
        <>
            <img src={`${img}`} alt={`${alt}`} width='100%' onClick={(e) => handleClick(e)}></img>
        </>
    )
}

export default Thumbnail;