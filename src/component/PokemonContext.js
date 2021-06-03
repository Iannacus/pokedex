import { createContext, useContext, useState } from 'react';

const pokemonContext = createContext();

const useProvidePokemon = () => {

    const [displayPokemon, setDisplayPokemon] = useState(4);

    const changeNumber = {
        change: (v) => {
            setDisplayPokemon(v);
        }
    }


    return {
        changeNumber,
        displayPokemon,
    }

}

export const ProvidePokemonContext = ({ children }) => {
    return <pokemonContext.Provider value={useProvidePokemon()}>
        {children}
    </pokemonContext.Provider>
}


export const usePokeContext = () => useContext(pokemonContext);