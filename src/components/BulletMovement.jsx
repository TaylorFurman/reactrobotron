export function BulletMovement(ctx, bulletObj){
    let data = new Bullet(bulletObj.x, bulletObj.y, bulletObj.rad);
    data.draw(ctx);
    bulletObj.x += bulletObj.dx;
    bulletObj.y += bulletObj.dy;
}

class Bullet{
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