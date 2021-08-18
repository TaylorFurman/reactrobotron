// import React from 'react';

// function Canvas(){
//     const canvasRef = useRef(null)
//     const contextRef = useRef(null)

//     useEffect(()=>{
//         const canvas = canvasRef.current;
//         canvas.width = window.innerWidth * 2;
//         canvas.height = window.innerHeight * 2;
//         canvas.style.width = `${window.innerWidth}px`;
//         canvas.Style.height = `${window.innerHeight}px`;

//         const context = canvas.getContext('2d')
//         context.scale(2,2)
//         context.lineCap = "round"
//         context.
//         contextRef.current = context;
//     }, [])

//     return(
//         <canvas
//         onMouseDown={value=0}
//         onM
//         ref={canvasRef}
//         />
//     )
// }