import MenuCard from '@/app/Components/MenuCard/MenuCard';
import React from 'react';
import MenuSearch from './MenuSearch';

const getFoods = async (search) => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`, {
        next: { revalidate: 3600 }
    });
    console.log(search)
    const result = await res.json();
    return result.foods || [];
}


const SpecialMenu = async ({ searchParams }) => {
    const { search = "" } = await searchParams;
    const menuData = await getFoods(search);
    return (
        <section className="bg-secondary py-24 px-4 overflow-hidden relative">


            <div className="max-w-6xl mx-auto">
                <div className='mb-14 flex justify-between items-stretch gap-6'>
                    <div className='text-white text-2xl font-semibold'>
                        Total <span className='text-primary'>{menuData.length}</span> items found
                    </div>
                    <div>
                        <MenuSearch></MenuSearch>
                    </div>
                </div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white capitalize tracking-wide">
                        Best Special Menu
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {menuData.map((item) => (
                        <MenuCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialMenu;