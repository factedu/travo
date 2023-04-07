import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                // check if email and password exists in credentials throw error if not
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password is required");
                }

                // check if user exists in database
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                // throw error if user does not exist or don't have hashedPassword
                if (!user || !user?.hashedPassword) {
                    throw new Error("Invalid credentials");
                }

                // check if password is correct
                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                // throw error if password is incorrect
                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials");
                }

                // return user
                return user;
            }
        }),
    ],
    pages: {
        signIn: "/",
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);