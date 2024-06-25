import React, { useContext } from "react";

import Socials from "./Socials";
import MobileNav from "./MobileNav";
import Logo from "../img/header/logo.svg";

// import link
import { Link } from "react-router-dom";

// import cursor context
import { CursorContext } from "../context/CursorContext";

const Header = () => {
	const { handleMouseEnter, handleMouseLeave } = useContext(CursorContext);

	return (
		<header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
			<div className="flex flex-col lg:flex-row justify-between w-full lg:items-center">
				{/* logo */}
				<Link
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					to="/"
					className="max-w-[200px]"
				>
					<img
						src={Logo}
						alt="logo"
						// className="w-[100px] lg:w-[150px]"
					/>
				</Link>

				{/* nav - initially hidden - show on desktop mode */}
				<nav
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className="hidden xl:flex gap-x-12 font-semibold"
				>
					<Link
						to="/"
						className="text-[#696c6d hover:text-primary transition"
					>
						Home
					</Link>
					<Link
						to="/about"
						className="text-[#696c6d hover:text-primary transition"
					>
						About
					</Link>
					<Link
						to="/portfolio"
						className="text-[#696c6d hover:text-primary transition"
					>
						Portfolio
					</Link>
					<Link
						to="/contact"
						className="text-[#696c6d hover:text-primary transition"
					>
						Contact
					</Link>
				</nav>
			</div>

			{/* socials */}
			<Socials />

			{/* mobile nav */}
			<MobileNav />
		</header>
	);
};

export default Header;
