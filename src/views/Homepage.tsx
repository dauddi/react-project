import React from "react";
import { useGetUsersQuery, useGetPostsQuery } from "../service/savannah";
import { UsersTable, Spinner } from "./components";

const Homepage = () => {
	const { data: users, isLoading: usersLOading } = useGetUsersQuery("all");
	const { data: posts, isLoading: postsLoading } = useGetPostsQuery("all");

	return usersLOading || postsLoading ? (
		<Spinner />
	) : (
		<div>
			<UsersTable users={users} posts={posts} />
		</div>
	);
};

export default Homepage;
