import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ItemCard from "./ItemCard"
import API from "../../API" 

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px",
        paddingBottom: "200px",
        backgroundColor: "#F0FFF0"
    }
})

export default function ItemsContainer(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getChosenCategory(props.match.params.category)
        .then( categoryItems => setItems(categoryItems) )
    }, [])

   
    const renderItems = () => items.map(item => {
        return(
            <Grid key={item.name} item xs={12} sm={6} md={4}>
                <ItemCard key={item.id} item={item} user={props.user}/>
            </Grid>   
        )
    })

    const classes = useStyles();
    
    return (
        <Grid 
        container spacing={1} 
        justify="center"
        className={classes.gridContainer}>
            { renderItems() }
        </Grid>
    )
}
