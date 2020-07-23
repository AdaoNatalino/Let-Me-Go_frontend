import React from 'react'

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import RequestCard from "./RequestCard"
import API from "../../API"

const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "20px"
    }
})

export default function Request ({ user, trade, comeBackToTrades }) {

    const classes = useStyles();
    const item1 = trade.item1
    const item2 = trade.item2
    
    const statusRejected = "Rejected"
    const statusApproved = "Approved"

    const handleReject = () => {
        const tradeData = { statusRejected }
        API.rejectTradeRequest(tradeData, trade.id)
        .then(alert("Request Rejected!"))  
        comeBackToTrades()
    }

    const handleApprove = () => {
        const tradeData = { statusApproved }
        API.approveTradeRequest(tradeData, trade.id)
        .then(alert("Request Approved!"))  
        comeBackToTrades()
    }


    const itemsInRequest = () => {
        return (
            <>
                <Grid key={item1.name} item xs={12} sm={3} md={6}>
                    <RequestCard key={item1.id} item={item1} user={trade.user1}/>
                </Grid> 
                <Grid key={item2.name} item xs={12} sm={3} md={6}>
                    <RequestCard key={item2.id} item={item2} user={trade.user2}/>
                </Grid>
                <Button
                onClick={ handleApprove }   
                variant="contained"
                color="primary"
                >
                  Approve Request 
                </Button>
                <Button
                onClick={ handleReject }
                variant="contained"
                color="secondary"
                >
                  Reject Request 
                </Button>
            </>
        )
    }
        return (
            <Grid 
            container spacing={1} 
            justify="center"
            className={classes.gridContainer}>

            { itemsInRequest() }

            </Grid>
        )
 
}
