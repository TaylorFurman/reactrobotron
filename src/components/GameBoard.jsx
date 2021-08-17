import React, { Component } from 'react';

import '../styles/game.css'

const KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    A: 65,
    D: 68,
    W: 87,
    S: 83,
    SPACE: 32
}


class GameBoard extends Component{
    constructor(){
        super();
        this.state={
            screen:{
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1, 
            },
            context: null,
            keys :{
                left: 0,
                right: 0,
                up: 0,
                down: 0,
                space: 0,
            },
        }
        this.player=[];
        this.enemy1=[];
        this.bullet=[];
    }
//Waiting for the input of user, and assiging a value equivilant to the code assigned earlier
    keyEvent(value,e){
        let keys = this.state.keys;
        if(e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
        if(e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.left = value;
        if(e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
        if(e.keyCode === KEY.DOWN || e.keyCode === KEY.S) keys.down = value;
        if(e.keyCode === KEY.SPACE) keys.space = value;
        console.log(value);
        this.setState({
            keys: keys
        });
    }

   




    render(){
        return (
            <div className="game-space">
                <label>React Robotron</label>
                <canvas className='game-board'>
                    
                </canvas>  
            </div>
        )
    }   
} 
    


export default GameBoard;