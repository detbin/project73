import {useRef, useState, useEffect} from "react";

const colores = ["red", "green", "blue", "yellow", "purple", "orange", "black", "white", "brown"];

const getRandomColor = () => {
	const randomIndex = Math.floor(Math.random() * colores.length);
	return colores[randomIndex];
};

function Ejercicio101112() {
	const [canvasContext, setCanvasContext] = useState(null);

	const canvasRef = useRef(null);

	useEffect(() => {
		const windowWidth = 250;
		const windowHeight = 250;

		const canvas = canvasRef.current;

		canvas.width = windowWidth;
		canvas.height = windowHeight;

		const context = canvas.getContext("2d");
		setCanvasContext(context);
	}, [canvasRef]);

    function entraRaton(){
            canvasContext.fillStyle = getRandomColor();
            canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    };

    function saleRaton(){
        canvasContext.fillStyle = 'black';
        canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    };

    function dobleClick(){
        canvasContext.fillStyle = 'green';
        canvasContext.fillRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    };
    
	return (
		<div>
			<canvas
				ref={canvasRef}
                onMouseEnter = { () =>{entraRaton()}}
                onMouseLeave = { () =>{saleRaton()}}
                onDoubleClick = { () =>{dobleClick()}}
                >
            </canvas>
		</div>
	);
}
export default Ejercicio101112;
