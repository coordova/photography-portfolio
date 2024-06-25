import React, { useState, useEffect, createContext } from "react";

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
	// cursor position state
	const [cursorPos, setCursorPos] = useState({
		x: 0,
		y: 0,
	});

	// cursor bg color state
	const [cursorBg, setCursorBg] = useState("default");

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
	// console.log(cursorPos);

	// cursor variants
	const cursorVariants = {
		default: {
			x: cursorPos.x - 16,
			y: cursorPos.y - 16,
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
