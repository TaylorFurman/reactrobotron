export default function Player(ctx, playerObj){
    let data = new Player(playerObj.x, playerObj.y, playerObj.rad);
    data.draw(ctx);
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
        ctx.fillStyle = 'red';
        ctx.arc(this.x, this.y, this.rad, 0, 2*Math.PI);
        ctx.strokeStyle = "black";
        ctx.strokeWidth = 4;
        ctx.fill();
        ctx.stroke();
    }
}