import React from 'react';
import SpecialMenu from './_components/MenuData';

const MenuPage = ({ searchParams }) => {
    return (
        <>
            <SpecialMenu searchParams={searchParams}></SpecialMenu>
        </>
    );
};

export default MenuPage;