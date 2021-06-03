import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { iconTypes, colors } from '../resources/types'

function Card({ pokeUrl, url }) {

    const [name, setName] = useState('');
    const [id, setId] = useState(0);
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
        fetch(pokeUrl)
            .then(response => response.json())
            .then(data => { setData(data) });

    }, [pokeUrl]);

    useEffect(() => {
        if (data) {
            setId(data.id)
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
        <div className="pokedex">
            <div className="cristal">
                <div className='cristal__animation' style={{ borderColor: `${color}` }}></div>
                <div className='cristal__animation2' style={{ borderColor: `${color2}` }}></div>
                <div className="pokename">
                    <Link to={`${url}/pokemon/${id}`}><h2 className='stroke-y'>{name}</h2></Link>
                </div>
                <img src={img} alt="" width='150px' />
                <div className='types'>
                    <div className='type-icon'>
                        <img src={icon1} alt="" width='30px' />

                    </div>
                    <div className='type-icon'>
                        <img src={icon2} alt="" width='30px' />

                    </div>
                </div>
                <div className="stats">
                    <div className="stat">
                        <div className="stat__percentage">
                            <p>{hp}</p>
                        </div>
                        <div className="stat__name">
                            <p>HP</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__percentage">
                            <p>{attack}</p>
                        </div>
                        <div className="stat__name">
                            <p>Atk</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__percentage">
                            <p>{defense}</p>
                        </div>
                        <div className="stat__name">
                            <p>Def</p>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat__percentage">
                            <p>{speed}</p>
                        </div>
                        <div className="stat__name">
                            <p>Spd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;