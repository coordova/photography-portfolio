import React, { useState, useEffect, createContext } from "react";

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
	// cursor position state
	const [cursorPos, setCursorPos] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = (e) => {
			setCursorPos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", handleMouseMove); // add event listener

		// remove event
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// cursor variants
	const cursorVariants = {
		default: {
			x: cursorPos.x - 16,
			y: cursorPos.y - 16,
			backgroundColor: "rgba(0,0,0,0.5)",
			transition: {
				type: "tween",
				duration: 0.15,
			},
		},
	};

	return (
		<CursorContext.Provider value={{ cursorPos, cursorVariants }}>
			{children}
		</CursorContext.Provider>
	);
};

export default CursorProvider;
