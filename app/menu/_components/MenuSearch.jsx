"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const MenuSearch = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const router = useRouter();
    const params = useSearchParams();
    const onSubmit = (data) => {
        const searchParams = new URLSearchParams(params.toString());
        searchParams.set('search', data.search);
        router.push(`?${searchParams.toString()}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center gap-4'>
            <input type="text" {...register("search")} className="input" />
            <input type="submit" className="btn btn-primary" />
        </form>
    );
};

export default MenuSearch;