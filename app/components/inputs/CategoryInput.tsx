'use client';
import { FC } from "react"
import { IconType } from "react-icons"


interface CategoryInputProps {
    label: string;
    icon: IconType;
    selected: boolean;
    description?: string;
    onClick: (value: string) => void;
}

const CategoryInput: FC<CategoryInputProps> = ({
    label,
    icon: Icon,
    selected,
    description,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                gap-3
                hover:border-black
                transition
                cursor-pointer
                relative
                ${selected ? 'border-black' : 'border-neutral-200'}
            `}
        >
            <div className='flex flex-row items-center gap-2'>
                {selected && <span className='text-rose-500 font-semibold text-2xl absolute bg-slate-50 px-2 bg-opacity-70'>&#10003;</span>}
                <Icon size={30} />
                <div className="font-semibold">
                    {label}
                </div>
            </div>
        </div>
    )
}

export default CategoryInput