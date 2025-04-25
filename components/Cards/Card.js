// import { useState } from "react";
// import Image from "next/image";
// import { FaArchive, FaHeart, FaUser } from "react-icons/fa";
// import { format } from "date-fns";
// import axiosInstance from "../../utils/axiosInstance"; // Import the axios instance

// const Card = ({ post }) => {
//   console.log("Post object:", post); // Debugging: Check the post object

//   if (!post) {
//     return null;
//   }

//   // Ensure post properties exist before accessing them
//   const isLiked = post.user_like ?? false;
//   const likeCount = post.likes_count ?? 0;
//   const isArchived = post.is_archived ?? false;
//   const user = post.user || {};
//   const storyId = post.story_id; // Use post.story_id instead of post.id

//   const [liked, setLiked] = useState(isLiked);
//   const [likes, setLikes] = useState(likeCount);
//   const [archived, setArchived] = useState(isArchived);

//   // Handle like toggle
//   const handleLike = async () => {
//     try {
//       // Toggle the like state locally
//       const newLikedState = !liked;
//       setLiked(newLikedState);
//       setLikes(newLikedState ? likes + 1 : likes - 1);

//       // Make API call to add/remove like using axios
//       const response = await axiosInstance.post(`/add-remove-like?story_id=${storyId}`, {
//         user_id: user.user_id, // Use user.user_id instead of user.id
//         like: newLikedState,
//       });

//       console.log("Like status updated:", response.data);
//     } catch (error) {
//       console.error("Error updating like status:", error);

//       // Revert local state if the API call fails
//       setLiked(!liked);
//       setLikes(liked ? likes - 1 : likes + 1);
//     }
//   };

//   // Handle archive toggle
//   const handleArchive = async () => {
//     try {
//       // Toggle the archive state locally
//       const newArchivedState = !archived;
//       setArchived(newArchivedState);

//       // Make API call to add/remove archive using axios
//       const response = await axiosInstance.post(`/add-remove-archive?story_id=${storyId}`, {
//         user_id: user.user_id, // Use user.user_id instead of user.id
//         archive: newArchivedState,
//       });

//       console.log("Archive status updated:", response.data);
//     } catch (error) {
//       console.error("Error updating archive status:", error);

//       // Revert local state if the API call fails
//       setArchived(!archived);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col rounded-lg overflow-hidden hover:border-gray-700 h-full">
//       {/* User Section */}
//       <div className="flex items-center p-3 border-b border-gray-300 bg-gray-50">
//         {user.profile_image ? (
//           <Image
//             src={user.profile_image}
//             alt="User Avatar"
//             width={40}
//             height={40}
//             className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400"
//           />
//         ) : (
//           <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3 border-2 border-gray-200">
//             <FaUser className="text-gray-600 text-lg" />
//           </div>
//         )}
//         <div className="flex flex-col">
//           <p className="text-sm font-semibold text-gray-800">{user.name || "Unknown User"}</p>
//           <p className="text-xs text-gray-500">
//             {post.createdAt ? format(new Date(post.createdAt), "MMM dd, yyyy") : "No Date"}
//           </p>
//         </div>
//       </div>

//       {/* Story Image */}
//       <div className="w-full h-60 overflow-hidden">
//         {post.image ? (
//           <Image
//             src={post.image}
//             alt={post.title || "Story Image"}
//             width={500}
//             height={300}
//             className="w-full h-full object-cover"
//             priority={false}
//           />
//         ) : (
//           <p className="text-gray-500 text-center">No Image Available</p>
//         )}
//       </div>

//       {/* Story Content */}
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{post.title || "No Title"}</h3>
//         <p className="text-sm text-gray-600 leading-relaxed flex-grow line-clamp-3">
//           {post.description || "No Description Available"}
//         </p>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-between items-center p-4 border-t border-gray-300 bg-gray-50">
//         {/* Archive Button */}
//         <button
//           className={`flex items-center text-sm transition-colors duration-200 ${
//             archived ? "text-blue-500" : "text-gray-800 hover:text-blue-500"
//           }`}
//           onClick={handleArchive}
//         >
//           <FaArchive className="mr-2 text-lg" />
//           {archived ? "Archived" : "Archive"}
//         </button>

//         {/* Like Button */}
//         <button
//           className={`flex items-center text-sm transition-colors duration-200 ${
//             liked ? "text-red-500" : "text-gray-800 hover:text-red-500"
//           }`}
//           onClick={handleLike}
//         >
//           <FaHeart className="mr-2 text-lg" />
//           {likes} Likes
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;



import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArchive, FaHeart, FaUser } from "react-icons/fa";
import { format, formatDistanceToNow } from "date-fns";
import axiosInstance from "../../utils/axiosInstance";

const Card = ({ post }) => {
  const [timeAgo, setTimeAgo] = useState("");
  const [liked, setLiked] = useState(post?.user_like ?? false);
  const [likes, setLikes] = useState(post?.likes_count ?? 0);
  const [archived, setArchived] = useState(post?.is_archived ?? false);

  // Update time ago periodically
  useEffect(() => {
    if (!post?.createdAt) return;

    const updateTime = () => {
      setTimeAgo(formatDistanceToNow(new Date(post.createdAt), { 
        addSuffix: true,
        includeSeconds: true
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [post?.createdAt]);

  if (!post) return null;

  const user = post.user || {};
  const storyId = post.story_id;

  const handleLike = async () => {
    try {
      const newLikedState = !liked;
      setLiked(newLikedState);
      setLikes(newLikedState ? likes + 1 : likes - 1);

      await axiosInstance.post(`/add-remove-like?story_id=${storyId}`, {
        user_id: user.user_id,
        like: newLikedState,
      });
    } catch (error) {
      console.error("Error updating like:", error);
      setLiked(!liked);
      setLikes(liked ? likes - 1 : likes + 1);
    }
  };

  const handleArchive = async () => {
    try {
      const newArchivedState = !archived;
      setArchived(newArchivedState);
      await axiosInstance.post(`/add-remove-archive?story_id=${storyId}`, {
        user_id: user.user_id,
        archive: newArchivedState,
      });
    } catch (error) {
      console.error("Error updating archive:", error);
      setArchived(!archived);
    }
  };

  return (
    <div className="bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col rounded-lg overflow-hidden hover:border-gray-700 h-full">
      {/* User Section */}
      <div className="flex items-center p-3 border-b border-gray-300 bg-gray-50">
        {user.profile_image ? (
          <Image
            src={user.profile_image}
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-orange-400"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3 border-2 border-gray-200">
            <FaUser className="text-gray-600 text-lg" />
          </div>
        )}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-gray-800">{user.name || "Unknown User"}</p>
          <p className="text-xs text-gray-500">
            {timeAgo || (post.createdAt ? format(new Date(post.createdAt), "MMM dd, yyyy") : "No Date")}
          </p>
        </div>
      </div>

      {/* Story Image */}
      <div className="w-full h-60 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title || "Story Image"}
            width={500}
            height={300}
            className="w-full h-full object-cover"
            priority={false}
          />
        ) : (
          <p className="text-gray-500 text-center">No Image Available</p>
        )}
      </div>

      {/* Story Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">{post.title || "No Title"}</h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow line-clamp-3">
          {post.description || "No Description Available"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4 border-t border-gray-300 bg-gray-50">
        {/* Archive Button */}
        <button
          className={`flex items-center text-sm transition-colors duration-200 ${
            archived ? "text-blue-500" : "text-gray-800 hover:text-blue-500"
          }`}
          onClick={handleArchive}
        >
          <FaArchive className="mr-2 text-lg" />
          {archived ? "Archived" : "Archive"}
        </button>

        {/* Like Button */}
        <button
          className={`flex items-center text-sm transition-colors duration-200 ${
            liked ? "text-red-500" : "text-gray-800 hover:text-red-500"
          }`}
          onClick={handleLike}
        >
          <FaHeart className="mr-2 text-lg" />
          {likes} Likes
        </button>
      </div>
    </div>
  );
};

export default Card;