"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoChevronDownOutline } from "react-icons/io5";
import { LuMoveRight } from 'react-icons/lu';
import { MdOutlineMenu } from 'react-icons/md';
import NavLink from '../NavLink/NavLink';


const Header = () => {

    return (

        <header className=" bg-secondary shadow-sm">
            <div className="max-w-7xl mx-auto navbar">
                <div className="navbar-start w-full lg:w-6/12 justify-between lg:justify-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn p-1 text-2xl h-auto lg:hidden">
                            <MdOutlineMenu />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow [&_a.active]:text-primary [&_a]:hover:text-primary">
                            <li><NavLink href="/">Home</NavLink></li>
                            <li><NavLink href="/about">About</NavLink></li>
                            <li className="dropdown">
                                <label tabIndex={0} className="cursor-pointer">
                                    Menu
                                    <IoChevronDownOutline />
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 leading-relaxed shadow rounded-box w-52 gap-0 bg-secondary [&_li]:p-0 ![&_a]:py-1 [&_li:hover_span]:opacity-0 [&_li:hover_span]:translate-x-8 [&_li]:flex [&_li]:flex-nowrap [&_li]:flex-row [&_li]:justify-between [&_a]:text-white">
                                    <li><NavLink href="/menu">Dine in Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300 text-primary'><LuMoveRight className='text-primary' /></span> </li>
                                    <li><NavLink href="/menu">Breakfast Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300'><LuMoveRight className='text-primary' /></span> </li>
                                    <li><NavLink href="/menu">Event Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300'><LuMoveRight className='text-primary' /> </span> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link href="/" className="text-xl">
                        <Image src="/Logo.png" width="120" height="40" alt='logo' className='w-auto' loading="eager"></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white uppercase leading-[3.57em] font-semibold [&_label]:hover:text-primary gap-6 [&_a.active]:text-primary [&_a]:hover:text-primary">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/about">About</NavLink></li>
                        <li className="dropdown">
                            <label tabIndex={0} className="cursor-pointer">
                                Menu
                                <IoChevronDownOutline />
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 leading-relaxed shadow rounded-box w-52 gap-0 bg-secondary [&_li]:p-0 ![&_a]:py-1 [&_li:hover_span]:opacity-0 [&_li:hover_span]:translate-x-8 [&_li]:flex [&_li]:flex-nowrap [&_li]:flex-row [&_li]:justify-between">
                                <li><NavLink href="/menu">Dine in Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300 text-primary'><LuMoveRight className='text-primary' /></span> </li>
                                <li><NavLink href="/menu">Breakfast Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300'><LuMoveRight className='text-primary' /></span> </li>
                                <li><NavLink href="/menu">Event Menu</NavLink> <span className='opacity-100 translate-x-0 transition-all duration-300'><LuMoveRight className='text-primary' /> </span> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <a className="btn rounded-[5px] py-4 px-8 bg-primary h-auto leading-normal font-semibold border-0 shadow-none uppercase text-white hover:bg-primary/70">Book A Table</a>
                </div>
            </div>
        </header>
    );
};

export default Header;