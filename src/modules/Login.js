import React, { useEffect } from 'react'
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot'
import { useAuth } from '../provider/AuthProvider'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
    const { handleSubmit, register } = useForm();
    const { singIn, pokemonTrainer } = useAuth();
    console.log(useAuth())
    const history = useHistory();

    const onSubmit = (values) => {
        singIn(values.pokemonTrainer, () => { });
    }

    useEffect(() => {
        if (pokemonTrainer) {
            history.push('/pokedex')
        }

    }, [pokemonTrainer, history]);

    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <form className='login' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='stroke'>Welcome Pokémon Master!</h1>
                    <input className='stroke stroke-1' type='text' placeholder='Type your master pokémon name' {...register('pokemonTrainer', { required: true })} />
                    <button className='blue'>login</button>
                </form>
            </div>
            <ThemeBot />
        </>
    )
}

export default Login;