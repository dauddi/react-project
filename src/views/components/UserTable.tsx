import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Post } from "../../application/types";

type TableProps = {
	users: User[] | undefined;
	posts: Post[] | undefined;
};

const UsersTable: React.FC<TableProps> = ({ users, posts }) => {
	const navigate = useNavigate();

	return (
		<table className="table-auto m-[2px] min-w-[80%]">
			<thead>
				<tr className="bg-purple-900 text-white">
					<th className="text-justify py-4 px-2">id</th>
					<th className="text-justify py-4 px-2">name</th>
					<th className="text-justify py-4 px-2">username</th>
					<th className="text-justify py-4 px-2">Posts</th>
				</tr>
			</thead>
			<tbody>
				{users?.map((user) => (
					<tr
						key={user.id}
						className="cursor-pointer hover:bg-purple-100 my-8"
						onClick={() => navigate(`${user?.username}`)}
					>
						<td className="px-2 py-2 text-justify">{user?.id}</td>
						<td className="px-2 py-2 text-justify">{user?.name}</td>
						<td className="px-2 py-2 text-justify">{user?.username}</td>
						<td className="px-2 py-2 text-justify">
							{posts?.filter((post) => post.userId === user.id).length}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
