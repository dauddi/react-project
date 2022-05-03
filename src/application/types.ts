export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: any;
	phone: string;
};

export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
};
