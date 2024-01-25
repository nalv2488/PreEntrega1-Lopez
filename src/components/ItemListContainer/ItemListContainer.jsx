import React from 'react'
import "./itemlistcontainer.css"

function ItemListContainer({ saludo }) {
    return (
        <>

            <div className='div-saludo'>
                {saludo}
            </div>

        </>
    )
}

export default ItemListContainer