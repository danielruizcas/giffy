import React, { useEffect,useState } from "react";
import { Link, useLocation } from 'wouter'
import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TreandingSearches";
import { useGifs } from "../../hooks/useGifs";

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading,gifs}=useGifs()
 
    const handleSubmit = evt =>{
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
                <button>Buscar</button>
            </form>
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                <TrendingSearches />
            </ul>
        </div>
    )
}