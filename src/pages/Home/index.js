import React, { useState } from 'react'
import { Link } from 'wouter'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

export default function Home() {
    // const [keyword, setKeyword] = useState('')

    return (
        <>
            <h3 className='App-title'>Los gifs más populares</h3>
            <form>
                <input type='text' />
            </form>
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
