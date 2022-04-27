import React from 'react'
import '../components/Gif.css'

const Gif = ({ singleGif }) => {
    const { title, id, url } = singleGif
    return (
        <a href={`#${id}`} className='gif'>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </a>
    )
}

export default Gif
