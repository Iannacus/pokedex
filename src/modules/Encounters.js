import React, { useState, useEffect } from 'react';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

function Encounters() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [locations, setLocations] = useState(null);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
            .then(response => response.json())
            .then(info => setData(info));
    }, []);

    useEffect(() => {

        if (data) {
            setLocations(data);
            console.log(data);

        }
    }, [data]);
    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>

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