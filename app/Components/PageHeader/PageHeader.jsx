import React from 'react';


const PageHeader = ({ title = "Delicious Food", subtitle = "Delicious & Amazing", bgImage }) => {

    const imageUrl = bgImage || "/banner-image-2.jpg";

    return (
        <section
            className="relative w-full h-[500px] flex items-center justify-center bg-secondary"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="text-center">
                <p className="text-primary uppercase tracking-[0.3em] font-bold">
                    {subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-white">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default PageHeader;