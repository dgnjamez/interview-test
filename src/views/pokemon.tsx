import React, {useState, useEffect} from 'react';
import '../style/pokemon.scss'

type Props = {};

const Pokemon: React.FC<Props> = (props) =>{
    const [list, setList] = useState(new Array(104).fill(null));

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=104')
        .then(res => res.json())
        .then(async (res) => {
            for (let i in res.results) {
                const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon-form/${(+i) + 1}`)).json()

                res.results[i] = { name: data.name, image: data.sprites.front_default }
            }

            return setList(res.results)
        })
    })

    return (
        <div className="poke container">
            <div className="header mt-6 mb-4">fetch pokemon's data จาก <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2">https://pokeapi.co/api/v2</a></div>
            <div className="poke-content">
                {list.map((item, key) => {
                    return (
                        <div key={key} className="col-2 col-md-4 col-sm-12">
                            <div className="poke-card">
                                <div className="poke-img mb-2" style={item ? {background: `no-repeat url(${item.image}) center`} : {}}></div>
                                <div className={`poke-title mb-1 ${!item ? 'no-title' : ''}`}>{item ? item.name : ''}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pokemon