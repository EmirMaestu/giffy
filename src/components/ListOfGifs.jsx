import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'
import Gif from './Gif'

const ListOfGifs = ({ params }) => {
    const { keyword } = params

    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])

    return (
        <>
            {gifs.map(singleGif => (
                <Gif singleGif={singleGif} key={singleGif.id} />
            ))}
        </>
    )
}

export default ListOfGifs
