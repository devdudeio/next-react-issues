import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    theme: "light",
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {

        async jwt(token, user) {
            if (user) {
                token = { accessToken: user.accessToken }
            }

            return {...token, ...user}
        }
        ,
        async signIn(user, account, metadata) {
            if (account.provider === 'github') {
                user.accessToken = account.accessToken;
                return true
            }

            return false;
        },
        async session(session, token) {
            return {
                ...session,
                accessToken: token.accessToken,
                user: {
                    name: token.name,
                    image: token.image,
                }
            }
        }
    }
})