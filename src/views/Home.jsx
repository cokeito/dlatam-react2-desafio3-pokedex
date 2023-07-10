import React from 'react'
import Pikachu from '../assets/pikachu.png'

const Home = () => {
  return (
    <>
      <div className="w-1/2 mx-auto">
        <div className="py-10 px-10 rounded overflow-hidden ">
          <h1 className="text-3xl font-bold mb-10 text-center">Welcome Pokemon Master</h1>
          <img src={Pikachu} alt="Pikachu" className="mx-auto max-h-96" />
        </div>
      </div>
    </>
  )
}

export default Home