import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'
import { IconType } from 'react-icons'
import qs from 'query-string'

interface CategoryBoxProps {
    label: string
    icon: IconType
    description?: string
    selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon: Icon,
    description,
    selected = false
}) => {

    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        // If the category is already selected, remove it from the query
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        // create the url with the updated query
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {
            // remove null values
            skipNull: true,
        });

        // navigate to the url
        router.push(url);

    }, [params, label, router])

    return (
        <div
            onClick={handleClick}
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-2
                border-b-2
                hover:text-neutral-800
                hover:border-b-neutral-200
                transition
                cursor-pointer
                ${selected ? 'border-rose-500' : 'text-neutral-500 border-transparent'}
                ${selected ? 'text-rose-500 font-semibold' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div
                className='font-medium text-sm truncate'
            >
                {label}
            </div>
        </div>
    )
}

export default CategoryBox