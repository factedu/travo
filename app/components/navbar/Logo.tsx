'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {

    const router = useRouter();
    return (
        <Image
            alt='Travo'
            className='hidden md:block cursor-pointer'
            height={100}
            width={100}
            src="/images/logo.png"
        />
    )
}

export default Logo;