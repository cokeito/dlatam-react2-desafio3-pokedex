import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Show = () => {


  const url = 'https://pokeapi.co/api/v2/pokemon'
  const [currentPokemon, setCurrentPokemon] = useState({})

  const navigate = useNavigate();

  const { name } = useParams()

  const getPokemon = async (name) => {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();


    const avatar = data.sprites.other.dream_world.front_default;

    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat
    }))

    const pokemonData = {
      name,
      stats,
      avatar
    }

    setCurrentPokemon(pokemonData);
  }

  const goToPokemons = async () => {
    navigate('/pokemons/')
  }

  useEffect(() => {
    getPokemon(name)
  }, [name])

  return (
    <div className="w-1/3 mx-auto">
      <div className="py-10 px-10 rounded overflow-hidden shadow-xl">
        <img className="w-full" src={currentPokemon.avatar} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl uppercase mb-3">{currentPokemon.name}</div>
          <table className="w-full">
            <tbody>
              {
                currentPokemon.stats?.map(({ name, base }, i) => (
                  <tr key={i}>
                    <td className='w-1/2'>
                      {name}
                    </td>
                    <td className='text-end'>
                      {base}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="mt-5 -block w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          <button className="" onClick={goToPokemons}> Elegir otro Pokemon</button>
        </div>
      </div>
    </div >
  )
}

export default Show