// Components/MenuCard/MenuCardSkeleton.jsx
const MenuCardSkeleton = () => {
    return (
        <div className="flex flex-col items-center text-center animate-pulse">
            {/* Image Skeleton */}
            <div className="w-full aspect-square bg-gray-700/50 rounded-3xl mb-6"></div>

            {/* Text Skeletons */}
            <div className="space-y-3 w-full flex flex-col items-center">
                <div className="h-6 bg-gray-700/50 rounded-md w-3/4"></div>
                <div className="h-4 bg-gray-700/50 rounded-md w-full"></div>
                <div className="h-4 bg-gray-700/50 rounded-md w-1/2"></div>
                <div className="h-6 bg-gray-700/50 rounded-md w-1/4 mt-2"></div>
            </div>
        </div>
    );
};

export default MenuCardSkeleton;