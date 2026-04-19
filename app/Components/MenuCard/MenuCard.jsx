import React from 'react';
import Image from 'next/image';

const MenuCard = ({ item }) => {
    return (
        <div className="flex flex-col items-center text-center group">
            {/* Image Container with Rounded Corners */}
            <div className="relative w-full aspect-square overflow-hidden rounded-3xl mb-6">
                <Image
                    src={item.foodImg}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 px-4">
                    {item.category}
                </p>
                <p className="text-primary font-bold text-lg pt-2">
                    ${item.price.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default MenuCard;