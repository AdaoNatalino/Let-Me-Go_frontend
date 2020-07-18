import React, { useState, useEffect } from 'react'

export default function ItemsContainer(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`/category/${props.match.params.category}`)
        .then( categoryItems => setItems(categoryItems) )
    }, [])

    return (
        <div>
            items
        </div>
    )
}
