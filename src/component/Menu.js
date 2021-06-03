import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';


function Menu({ home, back }) {

    const { singOut } = useAuth();
    return (
        <div className='menu'>

            <i class="fas fa-sign-out-alt" onClick={() => singOut(() => { })}></i>
            <Link to={home}>
                <i class="fas fa-home"></i>
            </Link>
            <Link to={back}>
                <i class="fas fa-arrow-circle-left"></i>
            </Link>

        </div>
    )
}

export default Menu;