import React from 'react';
import { useForm } from 'react-hook-form';
function Search({ handdler, handleNumber, handleConsult }) {
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
        handleConsult(values);
    }
    return (
        <form className="poke-form" name="types" onSubmit={handleSubmit(onSubmit)}>
            <div className='select__form'>
                <label htmlFor="searcher">Search By type</label>
                <select className="searcher" id="" onChange={(e) => handdler(e)}>
                    <option value='0'>All</option>
                    <option value='1'>Normal</option>
                    <option value='2'>Fighting</option>
                    <option value='3'>Flying</option>
                    <option value='4'>Poison</option>
                    <option value='5'>Ground</option>
                    <option value='6'>Rock</option>
                    <option value='7'>Bug</option>
                    <option value='8'>Ghost</option>
                    <option value='9'>Steel</option>
                    <option value='10'>Fire</option>
                    <option value='11'>Water</option>
                    <option value='12'>Grass</option>
                    <option value='13'>Electric</option>
                    <option value='14'>Psychic</option>
                    <option value='15'>Ice</option>
                    <option value='16'>Dragon</option>
                    <option value='17'>Dark</option>
                    <option value='18'>Fairy</option>
                </select>
            </div>
            <div className='text__form'>
                <input type='text' placeholder='Search by namae or pokemon number' {...register('pokemon', { required: true })} />
                <button>Search</button>
            </div>
            <div className="select__form" name="types">
                <label htmlFor="number">Select NUmber of Pokemons to display</label>
                <select className="number" id="number" onChange={(e) => handleNumber(e)}>
                    <option value='4'>4</option>
                    <option value='8'>8</option>
                    <option value='12'>12</option>
                    <option value='16'>16</option>
                    <option value='20'>20</option>
                    <option value='24'>24</option>
                </select>
            </div>
        </form>
    )
}

export default Search;