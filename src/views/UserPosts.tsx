import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../application/types";
import {
	useGetUserByUsernameQuery,
	useGetUserPostsByUserIdQuery,
} from "../service/savannah";
import { PostCard, Spinner } from "./components";

const UserPosts = () => {
	const [loading, setLoading] = useState<Boolean>();
	const [user, setUser] = useState<User>();
	const { username } = useParams();
	const { data } = useGetUserByUsernameQuery(username);
	const { data: posts } = useGetUserPostsByUserIdQuery(user?.id);

	useEffect(() => {
		setLoading(true);

		if (data && posts) {
			setUser(data[0]);
			setLoading(false);
		}
	}, [data, posts]);

	return loading ? (
		<Spinner />
	) : (
		<div className="px-4">
			<div className="mb-4">
				<h1 className="text-lg md:text-xl font-bold text-gray-700">
					{`All Posts By ${user?.name}`}
				</h1>
			</div>
			<div className="flex gap-10 flex-wrap">
				{posts?.map((post) => (
					<PostCard key={post.id} post={post} username={username} />
				))}
			</div>
		</div>
	);
};

export default UserPosts;
