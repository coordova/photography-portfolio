import React, { useContext } from "react";

// import components
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// immport router
import { BrowserRouter as Router } from "react-router-dom";

// import motion
import { motion } from "framer-motion";
// import cursor context
import { CursorContext } from "./context/CursorContext";

const App = () => {
	// console.log(useContext(CursorContext));
	const { cursorVariants, cursorBg } = useContext(CursorContext);
	return (
		<>
			<Router>
				<Header />
				<AnimRoutes />
			</Router>

			{/* cursor */}
			<motion.div
				variants={cursorVariants}
				animate={cursorBg}
				className="w-[32px] h-[32px] bg-primary rounded-full fixed top-0 left-0 pointer-events-none z-50"
			></motion.div>
		</>
	);
};

export default App;
