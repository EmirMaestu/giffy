import React from 'react'

function Detail({ params }) {
    console.log(params.id)
    return <h1>GIF con id {params.id}</h1>
}
export default Detail
