import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./views/components";
import { Homepage, UserPage, PostIdPage, UserPosts } from "./views";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path=":username" element={<UserPage />} />
				<Route path=":username/posts" element={<UserPosts />} />
				<Route path=":username/:postSlug" element={<PostIdPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
