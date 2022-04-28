import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

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
    }, [keyword])
    return { loading, gifs }
}
