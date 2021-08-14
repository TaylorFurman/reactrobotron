import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import '../styles/leader-board.css'


const useStyles = makeStyles({
    table:{
        minWidth: 650,
    }
})


function createData(player, score){
    return{player, score}
}

//update this in order to add on more rows
const rows =[
    createData('Player 1', 10),
    createData('Player 2', 8),
]
   

function LeaderBoard(props){
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='leaderboard'>
                <TableHead>
                    <TableRow>
                        <TableCell>Player ID</TableCell>
                        <TableCell align="right">Score</TableCell>
                    </TableRow>
                </TableHead>   
                <TableBody>
                {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">{row.player}</TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                        
                        </TableRow>
                    ))}
                </TableBody>    
            </Table>
        </TableContainer>
        
    )
}

export default LeaderBoard;