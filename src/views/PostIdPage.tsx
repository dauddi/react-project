import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetPostByIdQuery, useGetUserByIdQuery } from "../service/savannah";
import { Spinner } from "./components";

const PostIdPage = () => {
	const [searchParams] = useSearchParams();
	const postId = searchParams.get("postId");
	const [loading, setLoading] = useState<Boolean>();
	const { data: post } = useGetPostByIdQuery(postId);
	const { data: user } = useGetUserByIdQuery(post?.userId);

	useEffect(() => {
		setLoading(true);
		if (post && user) {
			setLoading(false);
		}
	}, [post, user]);

	return loading ? (
		<Spinner />
	) : (
		<div className="p-2 md:w-[65%]">
			<div className="mb-6">
				<h1 className="text-xl md:text-2xl font-semibold mb-2 text-orange-600">
					{post?.title}
				</h1>
				<p className="text-sm">{`Posted By: ${user?.name}`}</p>
			</div>
			<div>
				<p className="text-md md:text-lg">{post?.body}</p>
			</div>
		</div>
	);
};

export default PostIdPage;
