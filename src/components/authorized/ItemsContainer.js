import React, { useState, useEffect } from 'react'

import API from "../../API"

export default function ItemsContainer(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getChosenCategory(props.match.params.category)
        .then( categoryItems => setItems(categoryItems) )
    }, [])

    return (
        <div>
            items
        </div>
    )
}
