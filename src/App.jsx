import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

const App = () => {
  const [search,setSearch]=useState("");
  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
    <NewsBoard search={search}/>
    </>
    
  )
}

export default App