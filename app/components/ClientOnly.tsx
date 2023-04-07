'use client'

import { useState, useEffect } from 'react'

interface ClientOnlyProps {
    children: React.ReactNode;
}

//ClientOnly component to render children only on the client (rehidrate issue with nextjs)
const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    //useEffect to set the hasMounted state to true
    useEffect(() => {
        setHasMounted(true);
    }, []);

    //if hasMounted is false, return null
    if (!hasMounted) {
        return <div
            className='
                absolute
                w-full
                h-full
                bg-white
                z-50
                flex
                flex-col
                justify-center
                items-center
                text-2xl
                font-semibold
                text-rose-500
            '
        >
            Loading...
        </div>;
    }

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly