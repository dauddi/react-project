/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import axios from "axios";
import {
	useGetUserByUsernameQuery,
	useGetUserPostsByUserIdQuery,
} from "../service/savannah";
import { Spinner, PostCard } from "./components";
import { Post, User } from "../application/types";

const UserPage = () => {
	const [user, setUser] = useState<User>();
	const [posts, setPosts] = useState<Post[]>();
	const [loading, setLoading] = useState<Boolean>();
	const [isSubmitting, setIsSubmitting] = useState<Boolean>();
	const [isEditable, setIsEditable] = useState(false);
	const [usernameInput, setUsernameInput] = useState<string | undefined>();
	const { username } = useParams();
	const { data } = useGetUserByUsernameQuery(username);
	const { data: userPosts } = useGetUserPostsByUserIdQuery(user?.id);

	useEffect(() => {
		setLoading(true);

		if (data && userPosts) {
			setUser(data[0]);
			setPosts(userPosts.slice(0, 3));
			setLoading(false);
		}
	}, [data, userPosts]);

	const toggleEdit = () => {
		setIsEditable(!isEditable);
		setUsernameInput(user?.username);
	};

	const handleSubmit = async (event: React.SyntheticEvent) => {
		setIsSubmitting(true);
		event.preventDefault();
		const body = {
			username: usernameInput,
		};

		const res = await axios.patch(
			`https://jsonplaceholder.typicode.com/users/${user?.id}`,
			body
		);

		if (res.status === 200) {
			setUser(res.data);
		}

		setIsEditable(false);
		setIsSubmitting(false);
	};

	return loading ? (
		<Spinner />
	) : (
		<div className="p-4">
			<h1 className="font-bold mb-6 text-gray-800">User Details</h1>
			<div>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						id="username"
						name="username"
						type="text"
						onChange={(event) => setUsernameInput(event?.target.value)}
						value={isEditable ? usernameInput : user?.username}
						className="ml-2 p-2 font-semibold bg-purple-50 rounded-md outline-1 outline-purple-600"
						disabled={!isEditable}
					/>

					<div className="flex gap-4 my-4">
						<button
							onClick={toggleEdit}
							type="button"
							className="bg-green-600 text-white font-semibold py-2 px-6 rounded-md"
						>
							{isEditable ? "Cancel" : "Edit"}
						</button>

						<button
							onClick={handleSubmit}
							type="submit"
							disabled={!isEditable && usernameInput === username}
							className={`text-white font-semibold py-2 px-6 rounded-md ${
								isEditable && usernameInput !== username
									? "bg-orange-600"
									: "bg-gray-500 cursor-not-allowed"
							}`}
						>
							{isSubmitting ? <Spinner /> : "Save"}
						</button>
					</div>
				</div>
				<p className="my-2">{`Full Name: ${user?.name}`}</p>
				<p className="my-2">{`E-mail: ${user?.email}`}</p>
				<p className="my-2">{`Phone: ${user?.phone.split(" ")[0]}`}</p>
				<p className="my-2">{`Address: ${user?.address?.zipcode} ${user?.address?.street}, ${user?.address?.city}`}</p>
			</div>
			<div className="mt-10">
				<h2 className="text-lg md:text-xl font-bold my-10 text-gray-800">
					{`View ${user?.username}'s Featured Posts`}
				</h2>
				<div className="flex gap-5 flex-wrap">
					{posts?.map((post) => (
						<PostCard key={post.id} post={post} username={username} />
					))}
				</div>
				<div className="mt-8">
					<Link to={`/${username}/posts`}>
						<div className="flex gap-2 items-center justify-center text-orange-700 font-semibold">
							<p>See all posts</p>
							<FiExternalLink />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
