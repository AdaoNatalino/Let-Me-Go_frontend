import React, { useState, useEffect } from 'react'

import ItemCard from "./ItemCard"
import API from "../../API"

export default function ItemsContainer(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getChosenCategory(props.match.params.category)
        .then( categoryItems => setItems(categoryItems) )
    }, [])

    const renderItems = () => items.map(item => <ItemCard key={item.id} item={item}/>)

    return (
        <div>
            {renderItems()}
        </div>
    )
}
