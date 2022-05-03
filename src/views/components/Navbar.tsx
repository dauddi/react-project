import React from "react";
import { Link } from "react-router-dom";
import { GiPineTree } from "react-icons/gi";

const Navbar = () => {
	return (
		<div className="text-xl font-bold mb-8 m-2">
			<Link to="/">
				<div className="flex items-center gap-2">
					<GiPineTree className="text-4xl" />
					<h1 className="py-4 text-purple-800 hover:text-purple-900">
						Savannah React Test
					</h1>
				</div>
			</Link>
			<hr />
		</div>
	);
};

export default Navbar;
