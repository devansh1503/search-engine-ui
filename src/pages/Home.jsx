import React from 'react'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'

function Home() {
    const homeStyle = {
        background: "linear-gradient(135deg, #0f172a, #020617)",
        width:"100vw",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
  return (
    <div style={homeStyle}>
        <Header/>
        <SearchBar/>
    </div>
  )
}
export default Home