import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        // if email is not present in session return null
        if (!session?.user?.email) return null;

        // find user in database using email
        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email
            },
        });

        // if not currentUser return null
        if (!currentUser) return null;

        // return currentUser
        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null,
        };

    } catch (error: any) {
        return null;
    }
}