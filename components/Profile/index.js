// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../utils/axiosInstance.js";
// import ProfileUpdateModal from "../ProfileUpdateModal/ProfileUpdateModal";
// import CreateStory from "../Create-Story/index.js";
// import Card from "../Cards/Card";
// import SkeletonCard from "../SkeletonCard";
// import InfiniteScroll from "react-infinite-scroll-component";

// function Profile() {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [userData, setUserData] = useState({ name: "", image: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const user_id = 12; // Replace with dynamic user ID if needed

//   // Fetch user data
//   const fetchUserData = async () => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=1`
//       );
//       console.log("API Response:", response); // Log the response to check its structure

//       // Adjust the following lines based on the actual response structure
//       const user = response.data.user || {}; // Assuming user data is nested under `user`
//       setUserData({
//         name: response.data.stories[0].user.name || "Unknown User", // Fallback name
//         image: response.data.stories[0].user.image || "/assets/images/user.svg", // Fallback image
//       });
//     } catch (err) {
//       setError("Error fetching user data. Please try again later.");
//     }
//   };

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError("Error fetching stories. Please try again later.");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchUserData();
//     fetchUserStories(page);
//   }, [page]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: "url('/assets/images/banner.webp')" }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0 ">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img src={userData.image} alt="User" className="object-cover w-full h-full" />
//             </div>
//             <p className="text-xl font-bold">{userData.name}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           setUserData={setUserData}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// }

// export default Profile;


































// import React, { useState, useEffect } from "react";
// import axiosInstance from "../../utils/axiosInstance.js";
// import ProfileUpdateModal from "../ProfileUpdateModal/ProfileUpdateModal";
// import CreateStory from "../Create-Story/index.js";
// import Card from "../Cards/Card";
// import SkeletonCard from "../SkeletonCard";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";

// function Profile() {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [userData, setUserData] = useState({ name: "", image: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const user_id = 12; // Replace with dynamic user ID if needed

//   // Fetch user data
//   const fetchUserData = async () => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=1`
//       );
//       console.log("API Response:", response);

//       const user = response.data.user || {};
//       setUserData({
//         name: response.data.stories[0].user.name || "Unknown User",
//         image: response.data.stories[0].user.image || "/assets/images/user.svg",
//       });
//     } catch (err) {
//       setError("Error fetching user data. Please try again later.");
//     }
//   };

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError("Error fetching stories. Please try again later.");
//     }
//     setLoading(false);
//   };

//   // Update user profile
//   const updateProfile = async (updatedData) => {
//     try {
//       const response = await axios.put(
//         "https://story-backend-nu.vercel.app/update-profile",
//         {
//           user_id: user_id,
//           name: updatedData.name,
//           image: updatedData.image,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // Add authorization header if needed
//             // "Authorization": `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         setUserData({
//           name: updatedData.name,
//           image: updatedData.image,
//         });
//         setIsProfileModalOpen(false);
//         return { success: true, message: "Profile updated successfully!" };
//       } else {
//         return { success: false, message: response.data.message || "Failed to update profile" };
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       return {
//         success: false,
//         message: error.response?.data?.message || "An error occurred while updating profile",
//       };
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//     fetchUserStories(page);
//   }, [page]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: "url('/assets/images/banner.webp')" }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0 ">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img src={userData.image} alt="User" className="object-cover w-full h-full" />
//             </div>
//             <p className="text-xl font-bold">{userData.name}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           updateProfile={updateProfile}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// }

// export default Profile;









// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axiosInstance from "../../utils/axiosInstance.js";
// import ProfileUpdateModal from "../ProfileUpdateModal/ProfileUpdateModal";
// import CreateStory from "../Create-Story/index.js";
// import Card from "../Cards/Card";
// import SkeletonCard from "../SkeletonCard";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";

// function Profile() {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
  
//   // Get user data from Redux store
//   const reduxUserData = useSelector((state) => state.user.user);
//   // Local state for user data
//   const [userData, setUserData] = useState({ 
//     name: reduxUserData?.name || "", 
//     image: reduxUserData?.image || "" 
//   });

//   const user_id = reduxUserData?.user_id || 12; // Use Redux user_id or fallback

//   // Fetch user data
//   const fetchUserData = async () => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=1`
//       );
//       console.log("API Response:", response);

//       const responseUserData = response.data.user || {};
//       setUserData({
//         name: response.data.stories[0]?.userData?.name || reduxUserData?.name || "Unknown User",
//         image: response.data.stories[0]?.userData?.image || reduxUserData?.image || "/assets/images/user.svg",
//       });
//     } catch (err) {
//       setError("Error fetching user data. Please try again later.");
//       // Fallback to Redux data if API fails
//       if (reduxUserData) {
//         setUserData({
//           name: reduxUserData.name,
//           image: reduxUserData.image
//         });
//       }
//     }
//   };

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError("Error fetching stories. Please try again later.");
//     }
//     setLoading(false);
//   };

//   // Update user profile
//   const updateProfile = async (updatedData) => {
//     try {
//       const response = await axios.put(
//         "https://story-backend-nu.vercel.app/update-profile",
//         {
//           user_id: user_id,
//           name: updatedData.name,
//           image: updatedData.image,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             // Add authorization header if needed
//             // "Authorization": `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         setUserData({
//           name: updatedData.name,
//           image: updatedData.image,
//         });
//         setIsProfileModalOpen(false);
//         return { success: true, message: "Profile updated successfully!" };
//       } else {
//         return { success: false, message: response.data.message || "Failed to update profile" };
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       return {
//         success: false,
//         message: error.response?.data?.message || "An error occurred while updating profile",
//       };
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//     fetchUserStories(page);
//   }, [page]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ 
//           backgroundImage: `url(${userData.image || '/assets/images/banner.webp'})`
//         }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0 ">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img 
//                 src={userData.image} 
//                 alt="User" 
//                 className="object-cover w-full h-full"
//                 onError={(e) => {
//                   e.target.src = '/assets/images/user.svg';
//                 }}
//               />
//             </div>
//             <p className="text-xl font-bold">{userData.name}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           updateProfile={updateProfile}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// }

// export default Profile;






// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '../../utils/axiosInstance';
// import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
// import CreateStory from '../Create-Story/index.js';
// import Card from '../Cards/Card';
// import SkeletonCard from '../SkeletonCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { setUser } from '../../redux/slices/userSlice'; // Import your Redux action

// const Profile = () => {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
  
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.user.user);

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${userData?.user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError('Error fetching stories. Please try again later.');
//       console.error('Error fetching stories:', err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (userData?.user_id) {
//       fetchUserStories(page);
//     }
//   }, [page, userData?.user_id]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: `url(${userData?.cover_image || '/assets/images/banner.webp'})` }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img
//                 src={userData?.profile_image || '/assets/images/user.svg'}
//                 alt="User"
//                 className="object-cover w-full h-full"
//                 onError={(e) => {
//                   e.target.src = '/assets/images/user.svg';
//                 }}
//               />
//             </div>
//             <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           setUserData={(data) => dispatch(setUser(data))}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;























// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '../../utils/axiosInstance';
// import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
// import CreateStory from '../Create-Story/index.js';
// import Card from '../Cards/Card';
// import SkeletonCard from '../SkeletonCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { setUser } from '../../redux/slices/userSlice';

// const Profile = () => {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
  
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.user.user);

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${userData?.user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError('Error fetching stories. Please try again later.');
//       console.error('Error fetching stories:', err);
//     }
//     setLoading(false);
//   };

//   // Handle profile update success
//   const handleProfileUpdateSuccess = (updatedUser) => {
//     dispatch(setUser(updatedUser));
//     setIsProfileModalOpen(false);
//   };

//   useEffect(() => {
//     if (userData?.user_id) {
//       fetchUserStories(page);
//     }
//   }, [page, userData?.user_id]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: `url(${userData?.cover_image || '/assets/images/banner.webp'})` }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img
//                 src={userData?.profile_image || '/assets/images/user.svg'}
//                 alt="User"
//                 className="object-cover w-full h-full"
//                 onError={(e) => {
//                   e.target.src = '/assets/images/user.svg';
//                 }}
//               />
//             </div>
//             <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           onUpdateSuccess={handleProfileUpdateSuccess}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;








// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
// import CreateStory from '../Create-Story/index.js';
// import Card from '../Cards/Card';
// import SkeletonCard from '../SkeletonCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import axiosInstance from "../../utils/axiosInstance"; // Update path based on your project structure


// const Profile = () => {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const userData = useSelector((state) => state.user.user); // Fetch user data from Redux

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${userData.user_id}&page=${page}`
//       );
//       console.log('Stories Response:', response.data); // Debugging: Log the response
  
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError('Error fetching stories. Please try again later.');
//       console.error('Error fetching stories:', err); // Debugging: Log the error
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     if (userData) {
//       fetchUserStories(page);
//     }
//   }, [page, userData]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: `url(${userData?.cover_image || '/assets/images/banner.webp'})` }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img
//                 src={userData?.profile_image || '/assets/images/user.svg'}
//                 alt="User"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           setUserData={(data) => dispatch(setUser(data))} // Update Redux state
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//   dataLength={userStories.length}
//   next={loadMoreStories}
//   hasMore={hasMore}
//   loader={
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {[...Array(3)].map((_, index) => (
//         <SkeletonCard key={index} />
//       ))}
//     </div>
//   }
//   endMessage={
//     <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//   }
// >
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//     {userStories.map((story) => (
//       <Card key={story.id} post={story} />
//     ))}
//   </div>
// </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;


































// Second Last 



// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '../../utils/axiosInstance';
// import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
// import CreateStory from '../Create-Story/index.js';
// import Card from '../Cards/Card';
// import SkeletonCard from '../SkeletonCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { setUser } from '../../redux/slices/userSlice';

// const Profile = () => {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
  
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.user.user);

//   // Fetch user stories with pagination
//   const fetchUserStories = async (page) => {
//     try {
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${userData?.user_id}&page=${page}`
//       );
//       if (response.data.stories && response.data.stories.length > 0) {
//         setUserStories((prevStories) => [...prevStories, ...response.data.stories]);
//         setHasMore(true);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       setError('Error fetching stories. Please try again later.');
//       console.error('Error fetching stories:', err);
//     }
//     setLoading(false);
//   };

//   // Handle profile update success
//   const handleProfileUpdateSuccess = (updatedUser) => {
//     dispatch(setUser(updatedUser));
//     setIsProfileModalOpen(false);
//   };

//   useEffect(() => {
//     if (userData?.user_id) {
//       fetchUserStories(page);
//     }
//   }, [page, userData?.user_id]);

//   const loadMoreStories = () => {
//     if (hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: `url(${userData?.cover_image || '/assets/images/banner.webp'})` }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
//   {/* Profile Image */}
//   <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//     <img
//       src={userData?.profile_image || '/assets/images/user.svg'}
//       alt="User"
//       className="object-cover w-full h-full"
//       onError={(e) => {
//         e.target.src = '/assets/images/user.svg';
//       }}
//     />
//   </div>

//   {/* User Info: Name & Description */}
//   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-center sm:text-left">
  
//     <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
  
//     {userData?.description && (
//       <span className="text-lg sm:ml-3 text-gray-600">{userData.description}</span>
//     )}
//   </div>
// </div>


//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} Stories</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           onUpdateSuccess={handleProfileUpdateSuccess}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory toggleStoryModal={() => setIsStoryModalOpen(false)} />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">Error: {error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={index} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-gray-500">No more stories to load.</p>
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={story.id} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;











// import React, { useState, useEffect, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axiosInstance from '../../utils/axiosInstance';
// import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
// import CreateStory from '../Create-Story/index.js';
// import Card from '../Cards/Card';
// import SkeletonCard from '../SkeletonCard';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { setUser } from '../../redux/slices/userSlice';

// const Profile = () => {
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//   const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
//   const [userStories, setUserStories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [profileImage, setProfileImage] = useState('');
//   const [coverImage, setCoverImage] = useState('');
  
//   const dispatch = useDispatch();
//   const userData = useSelector((state) => state.user.user);

//   // Memoized fetch function
//   const fetchUserStories = useCallback(async (pageNum) => {
//     try {
//       setLoading(true);
//       const response = await axiosInstance.get(
//         `/user-stories?user_id=${userData?.user_id}&page=${pageNum}`
//       );
      
//       if (response.data.stories?.length > 0) {
//         setUserStories(prev => pageNum === 1 ? 
//           response.data.stories : 
//           [...prev, ...response.data.stories]);
//         setHasMore(response.data.stories.length >= 10); // Assuming 10 items per page
//       } else {
//         setHasMore(false);
//         if (pageNum === 1) setUserStories([]);
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Error fetching stories');
//       console.error('Error fetching stories:', err);
//     } finally {
//       setLoading(false);
//     }
//   }, [userData?.user_id]);

//   // Handle profile update success
//   const handleProfileUpdateSuccess = useCallback((updatedUser) => {
//     dispatch(setUser(updatedUser));
//     setIsProfileModalOpen(false);
//     // Update local images if changed
//     if (updatedUser.profile_image) setProfileImage(updatedUser.profile_image);
//     if (updatedUser.cover_image) setCoverImage(updatedUser.cover_image);
//     // Refresh stories if needed
//     setPage(1);
//     fetchUserStories(1);
//   }, [dispatch, fetchUserStories]);

//   // Load more stories
//   const loadMoreStories = useCallback(() => {
//     if (hasMore && !loading) {
//       setPage(prev => prev + 1);
//     }
//   }, [hasMore, loading]);

//   // Initial load and page change effect
//   useEffect(() => {
//     if (userData?.user_id) {
//       fetchUserStories(page);
//     }
//   }, [page, userData?.user_id, fetchUserStories]);

//   // Set initial images
//   useEffect(() => {
//     if (userData) {
//       setProfileImage(userData.profile_image || '/assets/images/user.svg');
//       setCoverImage(userData.cover_image || '/assets/images/banner.webp');
//     }
//   }, [userData]);

//   // Handle image errors
//   const handleImageError = useCallback((setImage) => {
//     return (e) => {
//       e.target.src = setImage === 'profile' ? 
//         '/assets/images/user.svg' : 
//         '/assets/images/banner.webp';
//     };
//   }, []);

//   return (
//     <>
//       {/* Banner Section */}
//       <div
//         className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
//         style={{ backgroundImage: `url(${coverImage})` }}
//       >
//         <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
//           {/* User Details */}
//           <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
//             {/* Profile Image */}
//             <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
//               <img
//                 src={profileImage}
//                 alt="User"
//                 className="object-cover w-full h-full"
//                 onError={handleImageError('profile')}
//               />
//             </div>

//             {/* User Info */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-center sm:text-left">
//               <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
//               {userData?.description && (
//                 <span className="text-lg sm:ml-3 text-gray-600">{userData.description}</span>
//               )}
//             </div>
//           </div>

//           {/* Story Count */}
//           <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
//             <p>{userStories.length} {userStories.length === 1 ? 'Story' : 'Stories'}</p>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4 flex-row">
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
//               onClick={() => setIsStoryModalOpen(true)}
//             >
//               Create Story
//             </button>
//             <button
//               className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
//               onClick={() => setIsProfileModalOpen(true)}
//             >
//               Edit Profile
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       {isProfileModalOpen && (
//         <ProfileUpdateModal
//           onClose={() => setIsProfileModalOpen(false)}
//           userData={userData}
//           onUpdateSuccess={handleProfileUpdateSuccess}
//         />
//       )}
//       {isStoryModalOpen && (
//         <CreateStory 
//           toggleStoryModal={() => setIsStoryModalOpen(false)}
//           onStoryCreated={() => {
//             setPage(1);
//             fetchUserStories(1);
//           }}
//         />
//       )}

//       {/* Infinite Scroll Section */}
//       <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
//         {loading && page === 1 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <SkeletonCard key={`skeleton-${index}`} />
//             ))}
//           </div>
//         ) : error ? (
//           <p className="text-red-500 text-center">{error}</p>
//         ) : (
//           <InfiniteScroll
//             dataLength={userStories.length}
//             next={loadMoreStories}
//             hasMore={hasMore}
//             loader={
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {[...Array(3)].map((_, index) => (
//                   <SkeletonCard key={`loader-${index}`} />
//                 ))}
//               </div>
//             }
//             endMessage={
//               userStories.length > 0 && (
//                 <p className="text-center py-8 text-gray-500">
//                   No more stories to load.
//                 </p>
//               )
//             }
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {userStories.map((story) => (
//                 <Card key={`story-${story.id}`} post={story} />
//               ))}
//             </div>
//           </InfiniteScroll>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;










import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
import ProfileUpdateModal from '../ProfileUpdateModal/ProfileUpdateModal';
import CreateStory from '../Create-Story/index.js';
import Card from '../Cards/Card';
import SkeletonCard from '../SkeletonCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { setUser } from '../../redux/slices/userSlice';

const Profile = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [userStories, setUserStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);

  // Memoized fetch function
  const fetchUserStories = useCallback(async (pageNum) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/user-stories?user_id=${userData?.user_id}&page=${pageNum}`
      );
      
      if (response.data.stories?.length > 0) {
        setUserStories(prev => pageNum === 1 ? 
          response.data.stories : 
          [...prev, ...response.data.stories]);
        setHasMore(response.data.stories.length >= 13);
      } else {
        setHasMore(false);
        if (pageNum === 1) setUserStories([]);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Error fetching stories');
      console.error('Error fetching stories:', err);
    } finally {
      setLoading(false);
    }
  }, [userData?.user_id]);

  // Handle profile update success
  const handleProfileUpdateSuccess = useCallback((updatedUser) => {
    dispatch(setUser(updatedUser));
    setIsProfileModalOpen(false);
    // Refresh stories if needed
    setPage(1);
    fetchUserStories(1);
  }, [dispatch, fetchUserStories]);

  // Load more stories
  const loadMoreStories = useCallback(() => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  }, [hasMore, loading]);

  // Initial load and page change effect
  useEffect(() => {
    if (userData?.user_id) {
      fetchUserStories(page);
    }
  }, [page, userData?.user_id, fetchUserStories]);

  // Handle image errors
  const handleImageError = useCallback((setImage) => {
    return (e) => {
      e.target.src = setImage === 'profile' ? 
        '/assets/images/user.svg' : 
        '/assets/images/banner.webp';
    };
  }, []);

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative flex justify-center items-end h-[55vh] bg-cover bg-center bg-fixed bg-gradient-to-t from-black via-transparent to-transparent"
        style={{ backgroundImage: `url(${userData?.cover_image || '/assets/images/banner.webp'})` }}
      >
        <div className="absolute bottom-[-180px] flex flex-col opacity-85 sm:flex-row justify-between items-center w-[100%] sm:w-full px-6 py-3 rounded-xl shadow-lg md:bottom-[-70px] bg-white dark:bg-gray-800">
          {/* User Details */}
          <div className="flex flex-col items-center text-black dark:text-white mb-3 sm:mb-0">
            {/* Profile Image */}
            <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-white mb-2">
              <img
                src={userData?.profile_image || '/assets/images/user.svg'}
                alt="User"
                className="object-cover w-full h-full"
                onError={handleImageError('profile')}
              />
            </div>

            {/* User Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-center sm:text-left">
              <p className="text-xl font-bold">{userData?.name || 'Unknown User'}</p>
              {userData?.description && (
                <span className="text-lg sm:ml-3 text-gray-600">{userData.description}</span>
              )}
            </div>
          </div>

          {/* Story Count */}
          <div className="text-lg font-semibold text-black dark:text-white mb-4 sm:mb-0">
            <p>{userStories.length} {userStories.length === 1 ? 'Story' : 'Stories'}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-row">
            <button
              className="px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:bg-blue-700 hover:translate-y-[-2px]"
              onClick={() => setIsStoryModalOpen(true)}
            >
              Create Story
            </button>
            <button
              className="px-6 py-3 text-sm font-semibold bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:bg-green-700 hover:translate-y-[-2px]"
              onClick={() => setIsProfileModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isProfileModalOpen && (
        <ProfileUpdateModal
          onClose={() => setIsProfileModalOpen(false)}
          userData={userData}
          onUpdateSuccess={handleProfileUpdateSuccess}
        />
      )}
      {isStoryModalOpen && (
        <CreateStory 
          toggleStoryModal={() => setIsStoryModalOpen(false)}
          onStoryCreated={(createdStory) => {
            // Add the new story to the beginning of the array
      setUserStories(prev => [createdStory, ...prev]);
            setPage(1);
            fetchUserStories(1);
          }}
        />
      )}

      {/* Infinite Scroll Section */}
      <div className="mt-[200px] md:mt-[100px] w-full px-6 py-4">
        {loading && page === 1 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <InfiniteScroll
            dataLength={userStories.length}
            next={loadMoreStories}
            hasMore={hasMore}
            loader={
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(3)].map((_, index) => (
                  <SkeletonCard key={`loader-${index}`} />
                ))}
              </div>
            }
            endMessage={
              userStories.length > 0 && (
                <p className="text-center py-8 text-gray-500">
                  No more stories to load.
                </p>
              )
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {userStories.map((story) => (
                <Card key={`story-${story.id}`} post={story} />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Profile;