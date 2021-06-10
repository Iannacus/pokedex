import React from 'react';
import homeButton from '../resources/img/home.png';
import backButton from '../resources/img/back-arrow.png';
import logoutButton from '../resources/img/log-out.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';


function Menu({ home, back }) {

    const { singOut } = useAuth();
    return (
        <div className='menu'>
            <div className='m-element'>

                <img src={logoutButton} alt='logout-button' onClick={() => singOut(() => { })} />
            </div>

            <div className='m-element'>
                <Link to={home}>
                    <img src={homeButton} alt='home-Button' />
                </Link>
            </div>
            <div className='m-element'>
                <Link to={back}>
                    <img src={backButton} alt='back-button' />
                </Link>

            </div>




        </div>
    )
}

export default Menu;