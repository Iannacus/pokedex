import { createContext, useContext, useState } from 'react'

const authContext = createContext();

const authService = {
    login: (cb) => {
        setTimeout(cb, 500);
    },
    logout: (cb) => {
        setTimeout(cb, 500);
    }
}

const useProvideAuth = () => {
    const [pokemonTrainer, setPokemonTrainer] = useState(null);

    const singIn = (name, cb) => {
        authService.login(() => {
            setPokemonTrainer(name);
            cb();
        })
    }

    const singOut = (cb) => {
        authService.logout(() => {
            setPokemonTrainer(null);
            cb();
        })
    }
    return {
        pokemonTrainer,
        singIn,
        singOut,
    }
}

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>
        {children}
    </authContext.Provider>
}

export const useAuth = () => useContext(authContext);