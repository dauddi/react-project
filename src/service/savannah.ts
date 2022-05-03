import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Post } from "../application/types";

const baseUrl = "https://jsonplaceholder.typicode.com/";

export const savannahApi = createApi({
	reducerPath: "savannahApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getUsers: builder.query<User[], string>({
			query: () => "users",
		}),
		getPosts: builder.query<Post[], string>({
			query: () => "posts",
		}),
		getUserById: builder.query<User, number | undefined>({
			query: (userId) => `users/${userId}`,
		}),
		getUserPostsByUserId: builder.query<Post[], number | undefined>({
			query: (userId) => `posts?userId=${userId}`,
		}),
		getUserByUsername: builder.query<Array<User>, string | undefined>({
			query: (username) => `users?username=${username}`,
		}),
		getPostById: builder.query<Post, string | null>({
			query: (postId) => `posts/${postId}`,
		}),
	}),
});

export const {
	useGetUsersQuery,
	useGetPostsQuery,
	useGetUserByIdQuery,
	useGetUserPostsByUserIdQuery,
	useGetUserByUsernameQuery,
	useGetPostByIdQuery,
} = savannahApi;
