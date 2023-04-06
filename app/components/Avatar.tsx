'use client';

import Image from 'next/image';
import React from 'react'

type Props = {}

const Avatar = (props: Props) => {
    return (
        <Image
            className='rounded-full'
            width={30}
            height={30}
            alt='avatar'
            src='/images/avatar.png'
        />
    )
}

export default Avatar