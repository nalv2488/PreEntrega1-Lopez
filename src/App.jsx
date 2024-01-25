import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <NavBar/>

      <ItemListContainer saludo={"Bienvenidos a la tienda de la English Premier League"}/>

    </>
  )
}

export default App
