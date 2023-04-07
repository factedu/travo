'use client';

import React from 'react'
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
    variant = 'primary'
}) => {

    let outlineClass = outline ? 'bg-white border-rose-500 text-rose-500' : 'bg-rose-500 border-rose-500 text-white';

    if (variant === 'secondary') {
        outlineClass = outline ? 'bg-white border-black text-black' : 'bg-black border-black text-white';
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                duration-300
                w-full
                border-[1px]
                ${outlineClass}
                ${small ? 'py-1 text-sm font-light border-[1px]' : 'py-3 text-md font-semibold border-2'}
            `}
        >
            {Icon && <Icon size={24} className='absolute left-4 top-3' />}
            {label}
        </button>
    )
}

export default Button