import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokemonPage from "./PokemonPage";
import './App.css';
import PokemonList from "./PokemonList";
import PokemonLogo from "./assets/img.png"

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [previousPageUrl, setPreviousPageUrl] = useState('');
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function goToPreviousPage() {
        setCurrentPageUrl(previousPageUrl);
    }

    useEffect(() => {
        setError('');
        toggleLoading(true);

        async function pokemon() {
            try {
                const {data} = await axios.get(currentPageUrl)
                setPokemon(data.results);
                setNextPageUrl(data.next);
                setPreviousPageUrl(data.previous);

            } catch (e) {
                setError("Er is iets mis gegeaan!")
                console.error(e)
            }
            toggleLoading(false);
        }

        pokemon();

    }, [currentPageUrl]);


    return (
        <>
            <img className='logo' src={PokemonLogo} alt='PokemonLogo'/>

            <div className="pokemonCard">
                {error && <p>{error}</p>}
                {loading && <p>Pagina wordt geladen!</p>}

                {pokemon && pokemon.map((pokemon) => {

                    return <PokemonList key={pokemon.name} name={pokemon.name} currentPageUrl={currentPageUrl}/>
                })}
            </div>

            <PokemonPage
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
            />
        </>
    );
}


export default App;
















































// function App() {
//     const [pokemon, setPokemon] = useState([])
//     const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
//     const [nextPageUrl, setNextPageUrl] = useState()
//     const [previousPageUrl, setPreviousPageUrl] = useState()
//     const [loading, setLoading] = useState(true)
//
//     // //async
//     //  function createPokemonObject(result) {
//     //     result.forEach(async (pokemon) => {
//     //         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
//     //         const data = await res.json()
//     //
//     //         setPokemon(currentList => [...currentList, data])
//     //
//     //     })
//     // }
//     //
//     // createPokemonObject(currentPageUrl.results)
//     // console.log(pokemon)
//
//
//     useEffect(() => {
//         setLoading(true)
//         let cancel
//         axios.get(currentPageUrl, {
//             cancelToken: new axios.CancelToken(c => cancel = c)
//         }).then(res => {
//             setLoading(false)
//             setNextPageUrl(res.data.next)
//             setPreviousPageUrl(res.data.previous)
//             setPokemon(res.data.results.map(p => p.name))
//         })
//
//         return () => cancel()
//     }, [currentPageUrl])
//
//     function goToNextPage() {
//         setCurrentPageUrl(nextPageUrl)
//     }
//
//     function goToPreviousPage() {
//            setCurrentPageUrl(previousPageUrl)
//     }
//
//     if (loading) return "Loading...."
//
//     return (
//         <>
//             <p className="header">POKEMON INDEX</p>
//             <Pokemonlist name={pokemon.name} currentPageUrl={currentPageUrl}/>
//             <PokemonPage
//                 goToNextPage ={nextPageUrl ? goToNextPage: null}
//                 goToPreviousPage ={previousPageUrl ? goToPreviousPage: null}
//             />
//         </>
//     );
// }
//
// export default App;


//*******************************OUD*****************************************
// import React, {useState, useEffect} from 'react';
// import './App.css';
// // import PokemonTile from "./PokemonTile";
// import axios from "axios";
//
// function App() {
//     const [pokemons, setPokemons] = useState([])
//     const [error, setError] = useState("")
//     const [loading, toggleloading] = useState(false)
//
//     useEffect(() => {
//         async function fetchData() {
//             setError('');
//             toggleloading(true)
//             try {
//                 const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//                 setPokemons(data.results);
//                 console.log(data.results)
//             } catch (error) {
//                 setError ("Dit ging niet helemaal goed")
//             }
//             toggleloading(false)
//         }
//         fetchData()
//     }, [])
//
//
//     return (
//         <ul>
//             {pokemons && pokemons.map((pokemons) => {
//                     return <li key={pokemons.name}>{pokemons.name}</li>
//                 }
//             )}
//         </ul>
//     );
// }
//
// export default App;