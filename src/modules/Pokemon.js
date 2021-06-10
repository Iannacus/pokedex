import React, { useState, useEffect } from 'react';
import ThemeSup from './ThemeSup';
import ThemeBot from './ThemeBot';
import Move from './Move'
import { iconTypes, colors } from '../resources/types'
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Menu from '../component/Menu';

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
    const [height, setHeight] = useState(0);
    const [weight, setweight] = useState(0);
    const [ability1, setAbility1] = useState('');
    const [ability2, setAbility2] = useState('');
    const [moves, setMoves] = useState([]);



    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(info => setData(info));
    }, [id]);

    useEffect(() => {
        if (data) {
            setNumber(data.id)
            setName(data.name)
            setAttack(data.stats[1].base_stat);
            setDefense(data.stats[2].base_stat);
            setSpeed(data.stats[5].base_stat);
            setHp(data.stats[0].base_stat);
            setImg(data.sprites.other["official-artwork"].front_default);
            setType1(data.types[0].type.name);
            setHeight(data.height);
            setweight(data.weight);
            setMoves(data.moves);
            if (data.abilities.length > 0) {
                setAbility1(data.abilities[0].ability.name);
            } else if (data.abilities.length > 1) {
                setAbility2(data.abilities[1].ability.name);
            }
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

    const moveList = moves.map((move, i) =>
        <Move
            key={i}
            name={move.move.name}
        />
    );

    return (
        <>
            <ThemeSup />
            <div className='pokegrid'>
                <div className='grid-ind'>
                    <div className='column-grid one'>
                        <h1>{name}</h1>
                        <div className='about'>
                            <h4>About</h4>
                            <div className='basic'>
                                <p>Height: {height / 10} m</p>
                                <p>Weight: {weight / 10} kg </p>
                            </div>
                            <h4>Abilities </h4>
                            <div className='abilities'>
                                <p>{ability1}</p>
                                <p>{ability2}</p>
                            </div>
                        </div>
                        <Link to={`${url}/encounters`} ><button>Encounters </button></Link>
                    </div>
                    <div className='column-grid two'>
                        <div className='dos'>
                            <div className='cristal__animation-i' style={{ borderColor: `${color}` }}></div>
                            <div className='cristal__animation-d' style={{ borderColor: `${color2}` }}></div>
                            <img src={img} alt='icon' width='110%'></img>

                        </div>

                        <div className='types'>
                            <div className='type-icon'>
                                <img src={icon1} alt="" width='50px' />
                            </div>
                            <div className='type-icon'>
                                <img src={icon2} alt="" width='50px' />
                            </div>
                        </div>

                        <div className="stats">
                            <div className="stat">
                                <div className="stat__percentage" style={{ backgroundColor: `${color2}` }}>
                                    <p>{hp}</p>
                                </div>
                                <div className="stat__name">
                                    <p>HP</p>
                                </div>
                            </div>
                            <div className="stat">
                                <div className="stat__percentage" style={{ backgroundColor: `${color}` }}>
                                    <p>{attack}</p>
                                </div>
                                <div className="stat__name">
                                    <p>Atk</p>
                                </div>
                            </div>
                            <div className="stat">
                                <div className="stat__percentage" style={{ backgroundColor: `${color2}` }}>
                                    <p>{defense}</p>
                                </div>
                                <div className="stat__name">
                                    <p>Def</p>
                                </div>
                            </div>
                            <div className="stat">
                                <div className="stat__percentage" style={{ backgroundColor: `${color}` }}>
                                    <p>{speed}</p>
                                </div>
                                <div className="stat__name">
                                    <p>Spd</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='column-grid invert three'>
                        <h3>Pokemon Moves</h3>
                        <div className='moves scroll'>
                            <ol>
                                {moveList}
                            </ol>
                        </div>
                        <p class='number'> #{number}</p>
                    </div>
                </div>
                <Menu
                    home={'/pokedex'}
                    back={'/pokedex'}
                />

            </div>
            <ThemeBot />
        </>
    )

}

export default Pokemon;