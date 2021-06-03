import React, { useEffect } from 'react'
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot'
import { useAuth } from '../provider/AuthProvider'
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

function Login() {
    const { handleSubmit, register } = useForm();
    const { singIn, pokemonTrainer } = useAuth();
    const history = useHistory();

    const onSubmit = (values) => {
        console.log(values)
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
                    <h2>Welcome to your POKEDEX</h2>
                    <input type='text' placeholder='Type your pokemon trainer name' {...register('pokemonTrainer', { required: true })} />
                    <button>login</button>
                </form>
            </div>
            <ThemeBot />
        </>
    )
}

export default Login;