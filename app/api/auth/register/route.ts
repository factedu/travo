import bcrypt from 'bcrypt';

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
) {
    const body = await request.json();
    const { email, name, password } = body;
    const hashedPassword = await bcrypt.hash(password, 12);

    // check if email and password exists in body throw error if not
    if (!email || !name || !password) {
        return NextResponse.json({
            error: 'Email, name and password is required',
        });
    }

    // check if user exists in database with email and hashedPassword
    const userExists = await prisma.user.findUnique({
        where: { email },
    });

    // throw error if user's hashedPassword exists in database in that case user is trying to register with same email
    if (userExists?.hashedPassword) {
        return NextResponse.json({
            error: 'You are already registered with this email please login!',
        });
    }

    // create hashedPassword for user if user exists but hashedPassword is not present in database 
    // the method below can be extremely dangerous if user is trying to register with same email and created account using
    // social login like google or github rather when login option to adde email and password should be provided
    // comment out the code below at your own risk. the below function was only created to demo the security risk

    // if (userExists && !userExists?.hashedPassword) {
    //     const user = await prisma.user.update({
    //         where: { email },
    //         data: {
    //             hashedPassword,
    //         },
    //     });
    //     return NextResponse.json(user);
    // }


    try {
        // create user if user does not exists in database
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            }
        })

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({
            error: 'Something went wrong!',
        });
    }

}