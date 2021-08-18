export default function WallCollision(bulletObj, canvas){
    if(bulletObj.y - bulletObj.rad <= 0 || 
        bulletObj.y + bulletObj.rad >= canvas.height){
        bulletObj.dy *= -1;
    }

    if(bulletObj.x + bulletObj.rad >= canvas.width || 
        bulletObj.x - bulletObj.rad <= 0){
        bulletObj.dx *= -1;
    }

}