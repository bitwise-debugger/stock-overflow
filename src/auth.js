
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { connectMongoDB } from "./lib/mongo"
import User from "./models/User"
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
        credentials: {
            email: {
                type: "email",
                label: "Email",
                placeholder: "johndoe@gmail.com",
            },
            password: {
                type: "password",
                label: "Password",
                placeholder: "*****",
            },
        },
        async authorize(credentials) {
            await connectMongoDB();
            console.log("Authorizing....");
            console.log(credentials);
            let foundUser = await User.findOne({ email: credentials.email });
            console.log("Found User", foundUser);

            if (!foundUser) return null;

            const isMatch = await bcrypt.compare(credentials.password, foundUser.password);
            console.log("Login Email:", credentials.email);
            console.log("Login Password:", credentials.password);
            console.log("DB Password Hash:", foundUser.password);
            console.log("Is Match", isMatch);
            if (!isMatch) return null;

            const { id, name, email, phone, role, image, provider } = foundUser;
            return { id, name, email, phone, role, image, provider };
        },
    },)
    ],
    callbacks: {
        async jwt({ token, user }) {
            // Runs when user logs in
            // console.log(token, user, 'TOKEN AND USER IN JWT');
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.phone = user.phone;
                token.provider = user.provider;
                token.createdAt = user.createdAt;
                token.updatedAt = user.updatedAt;
            }
            return token;
        },
        async session({ session, token }) {
            // This controls what reaches the client
            // console.log(token, session, 'TOKEN AND SESSION IN SESSION');
            session.user.id = token.id;
            session.user.role = token.role;
            session.user.phone = token.phone;
            session.user.provider = token.provider;
            session.user.createdAt = token.createdAt;
            session.user.updatedAt = token.updatedAt;
            return session;
        }
    },
    // pages: {
    //     signIn: '/auth/login',
    // }
})