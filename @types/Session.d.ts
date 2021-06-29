export type Session = {
    accessToken: string;
    user: SessionUser;
};

export type SessionUser= {
    name: string
    avatar: string
    email: string
}