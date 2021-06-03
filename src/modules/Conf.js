import React from 'react';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import Thumbnail from './Thumbnail';
import { usePokeContext } from '../component/PokemonContext'
import { images } from '../resources/types'
import Menu from '../component/Menu';

function Conf() {

    const { changeNumber } = usePokeContext();
    const handler = (value) => {
        changeNumber.change(value);

    }


    const imgList = images.map((value, i) =>
        <Thumbnail
            key={i}
            img={value}
        />
    )

    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <div name="types">
                    <label htmlFor="numberP">Select NUmber of Pokemons to display</label>
                    <select className="numberP" id="number" onChange={(e) => handler(e.target.value)} >
                        <option value='4'>4</option>
                        <option value='8'>8</option>
                        <option value='12'>12</option>
                        <option value='16'>16</option>
                        <option value='20'>20</option>
                        <option value='24'>24</option>
                    </select>
                    <h4>Select a background</h4>
                    <div className='backgrounds scroll'>
                        {imgList}
                    </div>
                </div>
                <Menu
                    home={'/pokedex'}
                    back={'/pokedex'}
                />
            </div>
            <ThemeBot />
        </>
    );
};

export default Conf;