import React, { useState, useEffect } from 'react';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

function Encounters() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .then(response => response.json())
            .then(info => setData(info));
    }, [id]);


    const encounterList = data.map(location =>
        <div className='location'><p>{location.location_area.name}</p></div>
    )
    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <h1 class='locationA'>Location Areas</h1>

                {data.length > 1 ? <div className='encounters'> {encounterList} </div> : <h2> Nothing here yet</h2>}

                <Menu
                    home={'/pokedex'}
                    back={`/pokedex/pokemon/${id}`}
                />
            </div>
            <ThemeBot />
        </>
    )

}

export default Encounters;