import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MyItemCard from "./MyItemCard"

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px"
    }
})

export default function ItemsContainer( { items }) {


    const renderMyItems = () => items.map(item => {
        return(
            <Grid key={item.name} item xs={12} sm={6} md={3}>
                <MyItemCard key={item.id} item={item}/>
            </Grid>   
        )
    })

    const classes = useStyles();
    
    return (
        <Grid 
        container spacing={1} 
        justify="center"
            className={classes.gridContainer}
        >
            { renderMyItems() }
        </Grid>
    )
}
