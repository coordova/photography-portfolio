import React, { useState, useEffect, createContext } from "react";

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
	// cursor position state
	const [cursorPos, setCursorPos] = useState({
		x: -56, // x: 0, por defecto, pero en modo mobile se muestra una parte del circulo del cursor, a partir de -56 se oculta todo el cursor.
		y: -56, // y: 0, por defecto, pero en modo mobile se muestra una parte del circulo del cursor, a partir de -56 se oculta todo el cursor.
	});

	// cursor bg color state
	const [cursorBg, setCursorBg] = useState("default");

	const mobileViewportIsActive = window.innerWidth <= 768;

	useEffect(() => {
		if (!mobileViewportIsActive) {
			const handleMouseMove = (e) => {
				setCursorPos({ x: e.clientX, y: e.clientY });
			};
			window.addEventListener("mousemove", handleMouseMove); // add event listener

			// remove event
			return () => {
				window.removeEventListener("mousemove", handleMouseMove);
			};
		} else {
			setCursorBg("none");
		}
	}, []);
	// console.log(cursorPos);

	// cursor variants
	const cursorVariants = {
		default: {
			x: cursorPos.x - 16,
			y: cursorPos.y - 16,
			backgroundColor: "#0e1112",
			// backgroundColor: "rgba(0,0,0,0.5)",
		},
		text: {
			width: "150px",
			height: "150px",
			x: cursorPos.x - 72,
			y: cursorPos.y - 72,
			backgroundColor: "#fff",
			mixBlendMode: "difference",
		},
		none: {
			width: 0,
			height: 0,
			backgroundColor: "rgba(255,255,255,1)",
		},
	};

	// mouse enter handler
	const handleMouseEnter = () => {
		setCursorBg("text");
	};

	// mouse leave handler
	const handleMouseLeave = () => {
		setCursorBg("default");
	};

	return (
		<CursorContext.Provider
			value={{
				cursorPos,
				cursorVariants,
				cursorBg,
				handleMouseEnter,
				handleMouseLeave,
			}}
		>
			{children}
		</CursorContext.Provider>
	);
};

export default CursorProvider;
