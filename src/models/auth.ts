interface authInterface <T> {
    data: T;
    message: string;
    error?: string;
}

type userModel = {
    id: number;
	name: string;
	lastName: string;
	email: string;
	jwt: string;
};

type registerModel = {
    name: string;
    lastName: string;
    userName: string;
    password: string;
}

type loginModel = {
    user: string;
    password: string;
}
