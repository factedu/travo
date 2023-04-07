'use client';
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegistraterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // use register modal hook
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    //callback function to toggle the open state
    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);


    return (
        <div
            className='relative'
        >
            <div className='flex flex-row items-center gap-3'>
                <div
                    onClick={() => { }}
                    className='
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    '
                >
                    Travo your journey
                </div>
                <div
                    onClick={toggleOpen}
                    className='
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    '
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>

            {/* User menu dropdown */}
            {isOpen && (
                <div
                    className='
                        absolute
                        rounded-xl
                        shadow-md
                        w-[40vw]
                        md:w-3/4
                        bg-white
                        overflow-hidden
                        right-0
                        top-12
                        text-sm
                    '
                >
                    <div className='flex flex-col cursor-pointer'>
                        {
                            currentUser ? (
                                <>
                                    <MenuItem label='My Trips' onClick={() => { }} />
                                    <MenuItem label='My Favorites' onClick={() => { }} />
                                    <MenuItem label='My Reservations' onClick={() => { }} />
                                    <MenuItem label='My Properties' onClick={() => { }} />
                                    <MenuItem label='Travo your home' onClick={() => { }} />
                                    <hr />
                                    <MenuItem label='Profile' onClick={() => { }} />
                                    <MenuItem label='Logout' onClick={() => signOut()} />
                                </>
                            ) : (
                                <>
                                    <MenuItem label='Login' onClick={loginModal.onOpen} />
                                    <MenuItem label='Sign up' onClick={registerModal.onOpen} />
                                </>
                            )
                        }

                    </div>
                </div>
            )}

        </div>
    )
}

export default UserMenu