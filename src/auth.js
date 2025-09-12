
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { connectMongoDB } from "./lib/mongo"
import User from "./models/User"
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google,
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
                let foundUser = await User.findOne({ email: credentials.email });
                if (!foundUser) return null;
                console.log("User found with ID", foundUser._id);
                const isMatch = bcrypt.compare(credentials.password, foundUser.password);
                if (!isMatch) return null;
                console.log("Password Matched!");
                console.log("foundUser value", foundUser);
                const { _id, name, email, phone, role, image, provider, createdAt, updatedAt } = foundUser;
                return { _id, name, email, phone, role, image, provider, createdAt, updatedAt };
            },
        },)
    ],
    callbacks: {
        async jwt(jwt) {
            console.log(jwt);
            console.log("In JWT Callback");


            return jwt.token;
        },
        async session(session) {
            console.log(session);

            console.log("In Session Callback");
            return session.session;
        },
    },
})