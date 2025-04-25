import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance.js";
import Card from "../Cards/Card.js";
import SkeletonCard from "../SkeletonCard"; // Import Skeleton Loader
import InfiniteScroll from "react-infinite-scroll-component";


function Contents() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchStories = async (page = 1) => {
        try {
            const response = await axiosInstance.get(`/get-stories?page=${page}&type=archive&story=`);

            if (response.data.success) {
                setStories((prevStories) => [...prevStories, ...(response.data.stories || [])]);
                setHasMore(response.data.stories.length > 0);
            } else {
                setError(response.data.message || "Failed to fetch stories.");
            }
        } catch (err) {
            setError("Error fetching stories. Please try again later.");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchStories(page);
    }, [page]);

    const loadMoreStories = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div>
            <div className="first-row flex justify-between items-center p-4 md:p-8">
                <h3 className="text-xl py-2 font-bold border-b-4 border-orange-400">Archived Stories</h3>
            </div>

            {/* Infinite Scroll Section */}
            <InfiniteScroll
                dataLength={stories.length}
                next={loadMoreStories}
                hasMore={hasMore}
                loader={
                    <div className="grid grid-cols-1 px-3 md:px-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                }
                endMessage={<p className="text-center py-8">No more stories to load.</p>}
            >
                <div className="grid grid-cols-1 px-3 md:px-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story, index) => (
                        <div
                            key={index}
                            className="opacity-0 translate-y-5 animate-fade-in" // Smooth animation for card entrance
                        >
                            <Card post={story} />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default Contents;
