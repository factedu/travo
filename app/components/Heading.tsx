import React from 'react'

interface HeadingProps {
    title: string;
    subTitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subTitle,
    center
}) => {
    return (
        <div
            className={`flex flex-col gap-2 ${center ? 'text-center' : 'text-start'}`}
        >
            <div className='text-2xl font-semibold'>{title}</div>
            {subTitle && <div className='font-light text-neutral-500 mt-0'>{subTitle}</div>}
        </div>
    )
}

export default Heading