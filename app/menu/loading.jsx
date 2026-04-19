import MenuCardSkeleton from "./_components/MenuCardSkeleton";


export default function Loading() {
    return (
        <section className="bg-secondary py-24 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">

                {/* Title Skeleton */}
                <div className="flex flex-col items-center mb-16 animate-pulse">
                    <div className="h-12 bg-gray-700/50 rounded-lg w-64 md:w-80"></div>
                </div>

                {/* Grid Skeleton - Matching your 1/2/4 column layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {/* We generate 8 skeleton cards to fill the screen */}
                    {[...Array(8)].map((_, index) => (
                        <MenuCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}