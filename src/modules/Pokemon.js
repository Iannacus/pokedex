import React, { useState, useEffect } from 'react';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import { iconTypes, colors } from '../resources/types'
import { Link, useParams, useRouteMatch } from 'react-router-dom';

function Pokemon() {
    const { id } = useParams();
    const { url } = useRouteMatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);
    const [data, setData] = useState(null);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [hp, setHp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [img, setImg] = useState('');
    const [type1, setType1] = useState('');
    const [type2, setType2] = useState('');
    const [icon1, setIcon1] = useState('');
    const [icon2, setIcon2] = useState('');
    const [color, setColor] = useState('');
    const [color2, setColor2] = useState('transparent');


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(info => setData(info));
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data)
            setNumber(data.id)
            setName(data.name)
            setAttack(data.stats[1].base_stat);
            setDefense(data.stats[2].base_stat);
            setSpeed(data.stats[5].base_stat);
            setHp(data.stats[0].base_stat);
            setImg(data.sprites.other["official-artwork"].front_default);
            setType1(data.types[0].type.name);
            if (data.types.length > 1) {
                setType2(data.types[1].type.name)
            }
        }
    }, [data]);

    useEffect(() => {
        if (type1 !== '' || type2 !== '') {
            for (const property in iconTypes) {
                if (property === type1) {
                    setIcon1(`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${iconTypes[property]}`)
                }
                if (property === type2) {
                    setIcon2(`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${iconTypes[property]}`)
                }
            }

            for (const property in colors) {
                if (property === type1) {
                    setColor(colors[property]);
                }
                if (property === type2) {
                    setColor2(colors[property]);
                }
            }

        }
    }, [type1, type2])

    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <Link to={`${url}/encounters`} > encounters </Link>
                <h1>{name}</h1>
                <img src={img} ></img>

            </div>
            <ThemeBot />
        </>
    )

}

export default Pokemon;