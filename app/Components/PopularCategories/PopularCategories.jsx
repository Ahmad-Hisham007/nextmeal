import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const PopularCategories = () => {
    return (
        <section className="py-20 px-4" style={{
            backgroundImage: "url(/category_bg.jpg)"
        }} >
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-22.25 items-center">

                <div className="grid grid-cols-2 gap-8 h-[600px]">
                    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                        <Image
                            src="/category1.jpg"
                            alt="Chicken Roll"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center overlay opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <h3 className="text-white text-xl font-bold uppercase">Chicken Roll</h3>
                        </div>
                    </div>

                    {/* Top Right - Vertical rectangle */}
                    <div className="relative group rounded-lg overflow-hidden row-span-1 translate-y-5 cursor-pointer">
                        <Image src="/category2.jpg" alt="Seafood" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center overlay opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <h3 className="text-white text-xl font-bold uppercase">Salad Bowl</h3>
                        </div>
                    </div>

                    {/* Bottom Left - Vertical rectangle */}
                    <div className="relative group rounded-lg overflow-hidden cursor-pointer">
                        <Image src="/category3.jpg" alt="Shrimp" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center overlay opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <h3 className="text-white text-xl font-bold uppercase">Lobser</h3>
                        </div>
                    </div>

                    {/* Bottom Right - Large square */}
                    <div className="relative group rounded-lg overflow-hidden translate-y-5 cursor-pointer">
                        <Image src="/ins_gal1.jpg" alt="Burger" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center overlay opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <h3 className="text-white text-xl font-bold uppercase">Italian Burger</h3>
                        </div>
                    </div>
                </div>

                {/* Right Side: Content Block */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
                            Popular Categories
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight uppercase">
                        Choose Your Best Food <br /> From Categories
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-lg">
                        Sed ut perspiciatis unde omnis iste natus error accusantium
                        doloremque laudantium, totam rem aperiam eaque ipsa quae
                        ab illo inventore veritatis quasi architecto beatae vitae dicta sunt
                        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                    </p>

                    <div className="pt-4">
                        <button className="btn btn-primary rounded-none px-10 h-14 text-white border-none hover:brightness-110 transition-all uppercase tracking-widest text-xs">
                            Explore More Category <span className="ml-2"><MdKeyboardArrowRight /></span>
                        </button>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default PopularCategories;