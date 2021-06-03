import { createContext, useContext, useState } from 'react';

const bgContext = createContext();

const useProvideBg = () => {

    const [bg, setBg] = useState('https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/masters/city.jpg');

    const changeBg = {
        change: (v) => {
            setBg(v);
        }
    }


    return {
        changeBg,
        bg,
    }

}

export const ProvideBgContext = ({ children }) => {
    return <bgContext.Provider value={useProvideBg()}>
        {children}
    </bgContext.Provider>
}

export const useBgContext = () => useContext(bgContext);

