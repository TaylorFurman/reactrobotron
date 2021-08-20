import { useState, useEffect } from "react";

//continuation


function useKey(key){
    const [pressed, setPressed] = useState(false)

    const match = event => key.toLowerCase() === event.key.toLowerCase()

    const onDown = event => {
        if (match(event)) setPressed(true)
    }
    const onUp = event => {
        if (match(event)) setPressed(false)
    }

    useEffect(() => {
        window.addEventListener("keydown", onDown)
        window.addEventListener("keyup", onUp)
        return () => {
            window.removeEventListener("keydown", onDown)
            window.removeEventListener("keyup", onUp)
        }
    }, [key])
    return pressed
}




export function PlayerMovement(ctx, playerObj){
    const forwards = useKey("w")
    const backwards = useKey("s");
    const left = useKey("a");
    const right = useKey("d");

    let data = new Player(playerObj.x, playerObj.y, playerObj.rad);
    data.draw(ctx);   
     if(useKey(forwards)){
        playerObj.x += playerObj.dx+1;
    }
    playerObj.x += playerObj.dx;
    playerObj.y += playerObj.dy;
}

class Player{
    constructor(x,y,rad){
        this.x = x;
        this.y = y;
        this.rad = rad;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 4;
        ctx.fill();
        ctx.stroke();
    }
}


// // keyEvent(value,e){
// //     let keys = this.state.keys;
// //     if(e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
// //     if(e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.left = value;
// //     if(e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
// //     if(e.keyCode === KEY.DOWN || e.keyCode === KEY.S) keys.down = value;
// //     if(e.keyCode === KEY.SPACE) keys.space = value;
// //     console.log(value);
// //     this.setState({
// //         keys: keys
// //     })
// // }



// function useKeyPress(targetKey) {
//     // State for keeping track of whether key is pressed
//     const [keyPressed, setKeyPressed] = UseState(false);
//     // If pressed key is our target key then set to true
//     function downHandler({ key }) {
//       if (key === targetKey) {
//         setKeyPressed(true);
//       }
//     }
//      // If released key is our target key then set to false
//     const upHandler = ({ key }) => {
//     if (key === targetKey) {
//       setKeyPressed(false);
//     }
//     UseEffect(() => {
//         window.addEventListener("keydown", downHandler);
//         window.addEventListener("keyup", upHandler);
//         // Remove event listeners on cleanup
//         return () => {
//           window.removeEventListener("keydown", downHandler);
//           window.removeEventListener("keyup", upHandler);
//         };
//       }, []); // Empty array ensures that effect is only run on mount and unmount
//       return keyPressed;
//     }
//   };
