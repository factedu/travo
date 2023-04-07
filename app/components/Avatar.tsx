'use client';

import Image from 'next/image';
import React from 'react'

type AvatarProps = {
    src: string | undefined | null;
}

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return (
        <Image
            className='rounded-full'
            width={30}
            height={30}
            alt='avatar'
            src={src || '/images/avatar.png'}
        />
    )
}

export default Avatar