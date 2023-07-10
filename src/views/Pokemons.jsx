import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemons = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50'

  const [pokemons, setPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')

  const navigate = useNavigate()

  const getPokemons = async () => {
    const res = await fetch(url);
    const { results } = await res.json();

    setPokemons(results);
  }

  const goToPokemonShow = async () => {
    if (selectedPokemon) {
      navigate(`/pokemons/${selectedPokemon}`)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div className='flex justify-items-center w-1/2 mt-5'>
      <div className="w-full px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Selecciona un pokemon
        </label>
        <div className="relative">

          <select
            id="pokemons"
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedPokemon}
            onChange={({ target }) => setSelectedPokemon(target.value)}
          >
            <option value> Seleccione un Pokemon </option>
            {pokemons.map(({ name }, i) => (
              <option key={i} value={name}>{name}</option>
            ))}

          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>

      <button className="block w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={goToPokemonShow}>
        Ver Detalle
      </button>


    </div>
  )
}

export default Pokemons