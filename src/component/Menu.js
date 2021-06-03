import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';


function Menu({ home, back }) {

    const { singOut } = useAuth();
    return (
        <div className='menu'>
            <div className='m-element'>

                <i class="fas fa-sign-out-alt" onClick={() => singOut(() => { })}></i>
            </div>

            <div className='m-element'>
                <Link to={home}>
                    <i class="fas fa-home"></i>
                </Link>
            </div>
            <div className='m-element'>
                <Link to={back}>
                    <i class="fas fa-arrow-circle-left"></i>
                </Link>

            </div>




        </div>
    )
}

export default Menu;