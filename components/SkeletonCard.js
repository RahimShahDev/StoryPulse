import React from "react";

const SkeletonCard = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
            {/* User Section */}
            <div className="flex items-center p-3 border-b border-gray-300 bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div className="flex flex-col space-y-1">
                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                    <div className="w-16 h-3 bg-gray-300 rounded"></div>
                </div>
            </div>

            {/* Story Image */}
            <div className="w-full h-64 bg-gray-300"></div>

            {/* Story Content */}
            <div className="p-4">
                <div className="w-3/4 h-5 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center p-4 border-t border-gray-300 bg-gray-50">
                <div className="w-20 h-5 bg-gray-300 rounded"></div>
                <div className="w-16 h-5 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
