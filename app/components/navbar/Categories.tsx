import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Container from '../Container';
import CategoryBox from '../CategoryBox';

import { categories } from '@/app/data/categories';

interface CategoriesProps {

}

const Categories: React.FC<CategoriesProps> = ({

}) => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathName = usePathname();
    const isMainPage = pathName === '/';

    if (!isMainPage) return null;

    return (
        <Container>
            <div
                className='
                    pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-hidden
                    overflow-y-hidden
                    scrollbar-hide
                '
            >
                {categories.map((item, index) => {
                    return <CategoryBox
                        key={index + item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={item.label === category}
                        description={item.description}
                    />
                })}
            </div>
        </Container>
    )
}

export default Categories