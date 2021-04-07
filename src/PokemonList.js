import React, {useState, useEffect} from "react";
import axios from "axios";



function PokemonList({name, currentPage}) {
    const [onePokemon, setOnePokemon] = useState({})
    const [abilities, setAbilities] = useState([]);
    const [moves, setMoves] = useState([]);

    async function singlePokemon() {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            // console.log(data)
            setOnePokemon(data);
            setAbilities(data.abilities.length)
            setMoves(data.moves.length)

        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        singlePokemon()
    });
    
    return (

        <div className="container">
            <h3>{onePokemon.name}</h3>
            {onePokemon.sprites && <img src={onePokemon.sprites.front_default} alt={onePokemon.name}/>}
            <ul>
                <li>Weight: {onePokemon.weight} lbs.</li>
                <li>Has {abilities} abilities.</li>
                <li>Has {moves} moves.</li>
            </ul>
        </div>
    )
}

export default PokemonList




































// function Pokemonlist({pokemon, currentPageUrl}) {
//     const [onePokemon, setOnePokemon] = useState({})
//     const [abilities, setAbilities] = useState([])
//     const [moves, setMoves] = useState([])
//
//     async function singlePokemon() {
//         try {
//             const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//             console.log(data)
//             setOnePokemon(data);
//             setAbilities(data.abilities.length)
//             setMoves(data.moves.length)
//
//         } catch (e) {
//             console.error(e)
//         }
//     }
//
//     useEffect(() => {
//         singlePokemon();
//     }, [currentPageUrl])
//
//
//     return (
//         <div className="container">
//             {/*{pokemon.map(p => (*/}
//             {/*    <div key={p}>{p}</div>*/}
//             {/*))}*/}
//
//             <h3>{onePokemon.name}</h3>
//             {onePokemon.sprites && <img src={onePokemon.sprites.front_default} alt={pokemon}/>}
//             <p>Weight: {onePokemon.weight} lbs.</p>
//             <p>Has {abilities} abilities.</p>
//             <p>Has {moves} moves.</p>
//
//         </div>
//
//     );
// }
//
// export default Pokemonlist


// import React, {useState} from 'react';
// import axios from "axios";
// import './App.css';
//
// function PokemonTile() {
//     return (
//         <div>
//             Catch Them all
//         </div>
//     );
// }
//
// export default PokemonTile;