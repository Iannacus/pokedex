import React, { useEffect, useState } from 'react';
import Card from './Card';
import Search from './Search';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import Pagination from './Pagination';
import { useRouteMatch } from 'react-router-dom';
import { usePokeContext } from '../component/PokemonContext'
import Menu from '../component/Menu';



function Pokedex() {

    const pokeContext = usePokeContext();
    let { url } = useRouteMatch();
    const [type, setType] = useState(-1);
    const [pokemonName, setPokemonName] = useState('');
    const [data, setData] = useState([]);
    const [pokemonArray, setPokemonArray] = useState([]);
    const [number, setNumber] = useState(pokeContext.displayPokemon);
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [startSlice, setStartSlice] = useState(0);
    const [endSlice, setEndSlice] = useState(4);
    const [isNavigating, setIsNavigating] = useState(false);



    useEffect(() => {

        if (type >= 0) {
            fetch(`https://pokeapi.co/api/v2/type/${type}`)
                .then(response => response.json())
                .then(info => setData(info.pokemon));
        }
    }, [type]);

    useEffect(() => {
        if (pokemonName !== '') {
            setData([{ pokemon: { name: `${pokemonName}`, url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}/` } }])
        }

    }, [pokemonName])

    useEffect(() => {
        if (!isNavigating) {
            setStartSlice(0);
            setEndSlice(number);
            setCurrentPage(1);
        }
        if (data.length > 0) {
            setPageNumber(Math.ceil(data.length / number));
            setPokemonArray(data.slice(startSlice, endSlice));
            setIsNavigating(false);
        }
    }, [data, number, startSlice, endSlice]);

    const handleConsult = (values) => {
        setPokemonName(values.pokemon);
    }

    const handdleType = (value) => {
        setType(value.target.value);
    }

    const handleNumber = (e) => {
        setNumber(parseInt(e.target.value));

    }

    const handlerActive = e => {
        const pag = parseInt(e);
        setCurrentPage(pag);
        setIsNavigating(true);
        setStartSlice((pag - 1) * number);
        setEndSlice(((pag - 1) * number) + number);
    }

    const list = pokemonArray.map(value => {
        return <Card
            key={value.pokemon.name}
            url={url}
            name={value.pokemon.name}
            pokeUrl={value.pokemon.url} />
    });

    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <Search
                    handdler={handdleType}
                    handleNumber={handleNumber}
                    handleConsult={handleConsult}
                />

                <div className="pokemons scroll">
                    {list}
                </div>

                <Pagination
                    handlerActive={handlerActive}
                    pages={pageNumber}
                    current={currentPage}
                />
                <Menu
                    home={'/pokedex'}
                    back={'/login'}
                />
            </div>
            <ThemeBot />
        </>
    );
}

export default Pokedex;