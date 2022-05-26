import { useEffect, useState, useContext } from 'react'
import getGifs from '../services/getGifs'
import GifContext from '../context/GifContext'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifContext )

    useEffect(() => {
        setLoading(true)
        //recupero
        const keywordUse = keyword ?? localStorage.getItem('lastKeyword')
        getGifs({ keyword: keywordUse }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            //guardo
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, setGifs])
    return { loading, gifs }
}
