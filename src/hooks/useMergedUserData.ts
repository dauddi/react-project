// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Post } from "../application/types";
// import {
// 	useGetUserByUsernameQuery,
// 	useGetUserPostsByUserIdQuery,
// } from "../service/savannah";

// const useMergedUserData = () => {
// 	const [data, setData] = useState<Array<Post>>();
// 	const [error, setError] = useState({});
// 	const [isLoading, setIsLoading] = useState(false);
// 	const { username } = useParams();

// 	useEffect(() => {
// 		const { data: user, isLoading: userLoading } =
// 			useGetUserByUsernameQuery(username);
// 		const { data: posts, isLoading: postsLoading } =
// 			useGetUserPostsByUserIdQuery(user[0]?.id);

// 		console.log(posts);
// 		setData(posts);
// 		setError(new Error("Something went wrong"));

// 		setIsLoading(userLoading && postsLoading);
// 	}, []);

// 	return { data, error, isLoading };
// };

// export default useMergedUserData;

export {};
