import React, { useState, useEffect, createContext } from "react";

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
	return (
		<CursorContext.Provider value={"This is the cursor context "}>
			CursorContext
		</CursorContext.Provider>
	);
};

export default CursorProvider;
