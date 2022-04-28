import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = e => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Buscar un gif...'
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                />
            </form>
            <h3 className='App-title'>Ultima Búsqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3 className='App-title'>Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Home
