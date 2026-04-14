import React from 'react';
import Image from 'next/image';
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
    const galleryImages = [
        '/grid_gal1.jpg', '/grid_gal2.jpg', '/grid_gal3.jpg',
        '/grid_gal4.jpg', '/grid_gal5.jpg', '/grid_gal1.jpg'
    ];

    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* 1. Logo Section */}
                    <div className="space-y-6">
                        <Image src="/Logo.png" width={150} height={50} alt="Kaffen Logo" />
                    </div>

                    {/* 2. Working Hours */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold uppercase tracking-widest">Working Hours</h3>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-semibold text-gray-300">• Sunday - Thursday</span>
                                <span className="text-primary ml-4">08:00 am - 09:00pm</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-semibold text-gray-300">• Only Friday</span>
                                <span className="text-primary ml-4">03:00 pm - 09:00pm</span>
                            </li>
                            <li className="text-primary font-bold italic pt-2">Saturday Close</li>
                        </ul>
                    </div>

                    {/* 3. Contact Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold uppercase tracking-widest">Contact Us</h3>
                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <IoLocationOutline className="text-primary text-2xl shrink-0" />
                                <div>
                                    <p className="font-bold">Location :</p>
                                    <p className="text-gray-400">55 Main Street, New York</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <IoMailOutline className="text-primary text-2xl shrink-0" />
                                <div>
                                    <p className="font-bold">Email Address :</p>
                                    <p className="text-gray-400">kaffendev@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <IoCallOutline className="text-primary text-2xl shrink-0" />
                                <div>
                                    <p className="font-bold">Phone Number :</p>
                                    <p className="text-gray-400">+012 (345) 678 99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Gallery */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold uppercase tracking-widest">Gallery</h3>
                        <div className="grid grid-cols-3 gap-2">
                            {galleryImages.map((src, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden group">
                                    <Image
                                        src={src}
                                        alt="Gallery"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
                    <p>Copyright © 2022 Kaffen. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;