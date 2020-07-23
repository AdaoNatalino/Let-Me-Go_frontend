import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import API from "../../../API"

export default function MyTrades( { user, setRequestToRender } ) {

  const [trades, setTrades] = useState([])

  useEffect(() => {
    API.getMyTrades(user.id).then(trades => setTrades(trades))
  }, [])

  const renderButtonRequest = (trade) => {
  
    const availableToTrade = trade.status === "Pending" && trade.requested_by !== user.id

    if(availableToTrade) {
      return(
        <Button
        onClick={() => setRequestToRender(trade) }
        variant="contained"
        color="primary"
        >
          Request 
        </Button>
      )
    }           
  }

  // const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h6" variant="h6">
        My Trades:</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Item 1</TableCell>
            <TableCell>Item 2</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.created_at}</TableCell>
              <TableCell>{trade.status}</TableCell>
              <TableCell>{trade.item1.name}</TableCell>
              <TableCell>{trade.item2.name}</TableCell>
              <TableCell align="right">

                { renderButtonRequest(trade) }
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
   
    </React.Fragment>
  );
}
