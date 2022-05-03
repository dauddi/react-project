import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="max-w-[1000px] mx-auto flex flex-col justify-center">
			<header>
				<Navbar />
			</header>

			<main className="mb-14">{children}</main>

			<footer className="text-center bg-slate-50 fixed inset-x-0 bottom-0">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
