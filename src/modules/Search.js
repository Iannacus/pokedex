import React from 'react';
import { useForm } from 'react-hook-form';
import ConfigButton from './ConfigButton'
function Search({ handdler, handleConsult }) {
    const { handleSubmit, register } = useForm();
    const onSubmit = values => {
        handleConsult(values);
    }
    return (
        <form className="poke-form" name="types" onSubmit={handleSubmit(onSubmit)}>
            <div className='select__form'>
                <label htmlFor="searcher">Select Type</label>
                <select className="searcher stroke stroke-1" id="" onChange={(e) => handdler(e)}>
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
                <input className='text-input stroke stroke-1' type='text' placeholder='Type Name or Number' {...register('pokemon', { required: true })} />
                <button className='yellow bg-blue'>Search</button>
            </div>
            <ConfigButton />
        </form>
    )
}

export default Search;