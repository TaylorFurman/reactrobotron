import React, { useEffect, useRef } from 'react';
import { BulletMovement } from './BulletMovement';
import data from './Data.jsx'
import WallCollision from './WallCollision.jsx';
import Player from './Player';

import '../styles/game.css'

export default function Robotron(){
    const canvasRef = useRef(null);

    useEffect(()=>{
        const render = () =>{
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let {bulletObj} = data;
            let {playerObj} = data;
            ctx.clearRect(0,0,canvas.width, canvas.height);
            BulletMovement(ctx,bulletObj);
            Player(ctx, playerObj)

            //handle wall collisions
            WallCollision(bulletObj, canvas);
     
            requestAnimationFrame(render);
        };
        render();
       

    },[])

    return <canvas 
    id="canvas" 
    ref={canvasRef}
//onKeyDown={handleKeyDown}
   //onKeyUp={handleKeyUp}
    height="500px" 
    width="800px"/>;
}