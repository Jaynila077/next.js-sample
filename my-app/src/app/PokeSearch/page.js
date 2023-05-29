"use client";

import { useState } from "react"
import Axios from 'axios'

export default function Pokemon() {
  const [pokemonName, setPokemon] = useState('')
  const [pokemonChoose, setPokemonChoose] = useState(false)
  const [pokemon, setPokemonData] = useState({
        name: "",
        img: "",
        type: "",
        hp:   "",
        attack:  "",
        defence: "",
  })
   

  function displayPokemon(e){
    setPokemon(e.target.value)
  }
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
      setPokemonData({
        name: pokemonName,
        img: res.data.sprites.front_default,
        type: res.data.types[0].type.name,
        hp:   res.data.stats[0].base_stat,
        attack:  res.data.stats[1].base_stat,
        defence:  res.data.stats[2].base_stat,
      })
        setPokemonChoose(true)
    })
  }
  return (
    <div className="home">
     <div className="search">
       <h1>Pokemon Search </h1>
       <input type="text" onChange={displayPokemon} />
        <button onClick={searchPokemon}>Search</button>
     </div>
     <div className="card">{!pokemonChoose ? (<h1>Please Choose a Pokemon</h1>) : (
        <>
         <h1>{pokemon.name}</h1>
         <img src={pokemon.img} />
         <h1>TYPE :{pokemon.type}</h1>
         <p>HP :{pokemon.hp}</p>
         <p>ATTACK :{pokemon.attack}</p>
         <p>DEFENCE :{pokemon.defence}</p>
         </>
     )}
       
     </div>
    </div>
  )
}
