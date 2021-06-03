import React from 'react';
import { Link } from 'react-router-dom';

function ConfigButton() {
    return (
        <div>
            <Link to='/conf'>
                <img src='https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_Settings-512.png'
                    alt='pokeball'
                    width='50px;'></img>
            </Link>
        </div>
    );
};

export default ConfigButton;