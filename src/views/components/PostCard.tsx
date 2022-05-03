import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../application/types";
import { postTitleToSlug } from "../../utils/helpers";

type Props = {
	post: Post;
	username: string | undefined;
};

const PostCard = ({ post, username }: Props) => {
	const slug = postTitleToSlug(post.title);

	return (
		<div className="w-[350px] shadow-md p-5 rounded-md bg-slate-50">
			<Link to={`/${username}/${slug}?postId=${post.id}`}>
				<h1 className="text-lg md:text-xl font-semibold mb-2 cursor-pointer text-orange-600 hover:text-orange-600">
					{post.title}
				</h1>
			</Link>
			<p> {post.body} </p>
		</div>
	);
};

export default PostCard;
