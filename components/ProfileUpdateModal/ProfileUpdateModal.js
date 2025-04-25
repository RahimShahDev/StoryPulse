// import React, { useState } from "react";

// function ProfileUpdateModal({ onClose }) {
//     const [profile_image, setprofile_image] = useState(null);
//     const [cover_image, setcover_image] = useState(null);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [description, setDescription] = useState("");

//     const handleImageUpload = (e, setImage) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(URL.createObjectURL(file));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const updatedProfile = {
//             profile_image,
//             cover_image,
//             name,
//             email,
//             description,
//         };

//         console.log("Updated Profile:", updatedProfile);
//         alert("Profile updated successfully!");
//         onClose();
//     };

//     return (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
//                 <button
//                     className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
//                     onClick={onClose}
//                 >
//                     &times;
//                 </button>
//                 <h2 className="text-center mb-4 text-xl font-semibold text-black">Update Profile</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Row 1: Profile and Cover Pictures */}
//                     <div className="flex justify-between mb-4">
//                         <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//                             <label htmlFor="profile_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                                 {profile_image ? (
//                                     <img src={profile_image} alt="Profile" className="w-full h-full object-cover" />
//                                 ) : (
//                                     <span>Upload Profile</span>
//                                 )}
//                             </label>
//                             <input
//                                 id="profile_image"
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleImageUpload(e, setprofile_image)}
//                                 hidden
//                             />
//                         </div>
//                         <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//                             <label htmlFor="cover_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                                 {cover_image ? (
//                                     <img src={cover_image} alt="Cover" className="w-full h-full object-cover" />
//                                 ) : (
//                                     <span>Upload Cover</span>
//                                 )}
//                             </label>
//                             <input
//                                 id="cover_image"
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleImageUpload(e, setcover_image)}
//                                 hidden
//                             />
//                         </div>
//                     </div>

//                     {/* Row 2: Name and Email */}
//                     <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
//                         <div className="flex-1">
//                             <label className="block font-semibold mb-1 text-black">Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 placeholder="Enter your name"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="flex-1">
//                             <label className="block font-semibold mb-1 text-black">Email:</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Enter your email"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Row 3: About/Description */}
//                     <div className="mb-4">
//                         <label className="block font-semibold mb-1 text-black">About/Description:</label>
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             placeholder="Tell us about yourself"
//                             rows="3"
//                             required
//                             className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Row 4: Update Profile Button */}
//                     <div className="mb-4">
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                         >
//                             Update Profile
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ProfileUpdateModal;


















// For Dynamic perpose 
// import React, { useState } from "react";
// import axiosInstance from "../../utils/axiosInstance"; // Import the axios instance
// import Cookies from "js-cookie"; // Import js-cookie

// function ProfileUpdateModal({ onClose }) {
//     const [profile_image, setprofile_image] = useState(null);
//     const [cover_image, setcover_image] = useState(null);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [description, setDescription] = useState("");
//     const handleImageUpload = (e, setImage) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file); // Store the file object for FormData
//         }
        
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//             const formData = new FormData();
//             formData.append("name", name);
//             formData.append("email", email);
//             formData.append("description", description);
    
//             if (profile_image) {
//                 formData.append("profile_image", profile_image);
//             }
//             if (cover_image) {
//                 formData.append("cover_image", cover_image);
//             }
    
//             // Log FormData for debugging
//             for (let [key, value] of formData.entries()) {
//                 console.log(`${key}:`, value);
//             }
    
//             // Get token
//             const token = Cookies.get("token");
//             console.log("Token:", token);
    
//             // Send request
//             const response = await axiosInstance.post("/update-profile", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
    
//             console.log("Profile updated successfully:", response.data);
//             alert("Profile updated successfully!");
//             onClose();
//         } catch (error) {
//             console.error("Error updating profile:", error);
    
//             if (error.response) {
//                 console.error("Server Response:", error.response.data);
//                 alert(`Error: ${error.response.data.message || "Something went wrong"}`);
//             } else if (error.request) {
//                 console.error("No response received:", error.request);
//                 alert("No response from the server. Please check your connection.");
//             } else {
//                 console.error("Request Setup Error:", error.message);
//                 alert("An error occurred. Please try again.");
//             }
//         }
//     };
    

//     return (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
//                 <button
//                     className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
//                     onClick={onClose}
//                 >
//                     &times;
//                 </button>
//                 <h2 className="text-center mb-4 text-xl font-semibold text-black">Update Profile</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Row 1: Profile and Cover Pictures */}
//                     <div className="flex justify-between mb-4">
//                         <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//                             <label htmlFor="profile_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                                 {profile_image ? (
//                                     <img src={URL.createObjectURL(profile_image)} alt="Profile" className="w-full h-full object-cover" />
//                                 ) : (
//                                     <span>Upload Profile</span>
//                                 )}
//                             </label>
//                             <input
//                                 id="profile_image"
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleImageUpload(e, setprofile_image)}
//                                 hidden
//                             />
//                         </div>
//                         <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//                             <label htmlFor="cover_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                                 {cover_image ? (
//                                     <img src={URL.createObjectURL(cover_image)} alt="Cover" className="w-full h-full object-cover" />
//                                 ) : (
//                                     <span>Upload Cover</span>
//                                 )}
//                             </label>
//                             <input
//                                 id="cover_image"
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleImageUpload(e, setcover_image)}
//                                 hidden
//                             />
//                         </div>
//                     </div>

//                     {/* Row 2: Name and Email */}
//                     <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
//                         <div className="flex-1">
//                             <label className="block font-semibold mb-1 text-black">Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 placeholder="Enter your name"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                         <div className="flex-1">
//                             <label className="block font-semibold mb-1 text-black">Email:</label>
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Enter your email"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                         </div>
//                     </div>

//                     {/* Row 3: About/Description */}
//                     <div className="mb-4">
//                         <label className="block font-semibold mb-1 text-black">About/Description:</label>
//                         <textarea
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             placeholder="Tell us about yourself"
//                             rows="3"
//                             className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Row 4: Update Profile Button */}
//                     <div className="mb-4">
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                         >
//                             Update Profile
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default ProfileUpdateModal;









// Second Last 


// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import axiosInstance from "../../utils/axiosInstance";

// export default function ProfileUpdateModal({ onClose }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [description, setDescription] = useState("");
//   const [profileImage, setProfileImage] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Create configured axios instance
// //   const axiosInstance = axiosInstance.create({
// //     baseURL: "https://story-backend-nu.vercel.app",
// //     withCredentials: true, // Important for cookies
// //   });

//   // Load user data
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user")) || {};
//     setName(storedUser.name || "");
//     setEmail(storedUser.email || "");
//     setDescription(storedUser.description || "");
//     setProfileImage(storedUser.profile_image || "");
//     setCoverImage(storedUser.cover_image || "");
//   }, []);

//   const handleImageUpload = (e, setImage) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const dataURLtoFile = (dataurl, filename) => {
//     const arr = dataurl.split(',');
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], filename, { type: mime });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       const token = Cookies.get("token");
//       if (!token) {
//         throw new Error("Authentication token not found");
//       }

//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("description", description);

//       if (profileImage && profileImage.startsWith("data:image")) {
//         const profileFile = dataURLtoFile(profileImage, "profile.jpg");
//         formData.append("profile_image", profileFile);
//       }

//       if (coverImage && coverImage.startsWith("data:image")) {
//         const coverFile = dataURLtoFile(coverImage, "cover.jpg");
//         formData.append("cover_image", coverFile);
//       }

//       const response = await axiosInstance.post("/update-profile", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Update local storage with new data
//       const updatedUser = {
//         ...JSON.parse(localStorage.getItem("user") || {}),
//         name,
//         email,
//         description,
//         profile_image: profileImage,
//         cover_image: coverImage,
//       };
//       localStorage.setItem("user", JSON.stringify(updatedUser));

//       alert("Profile updated successfully!");
//       onClose();
//     } catch (err) {
//       console.error("Update error:", err);
//       setError(
//         err.response?.data?.message ||
//         err.message ||
//         "Failed to update profile. Please check your connection."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
//         <button
//           className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         <h2 className="text-center mb-4 text-xl font-semibold text-black">
//           Update Profile
//         </h2>

//         {error && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="flex justify-between mb-4 gap-4">
//             <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//               <label htmlFor="profile_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                 {profileImage ? (
//                   <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <span>Upload Profile</span>
//                 )}
//               </label>
//               <input
//                 id="profile_image"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setProfileImage)}
//                 hidden
//               />
//             </div>

//             <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//               <label htmlFor="cover_image" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                 {coverImage ? (
//                   <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
//                 ) : (
//                   <span>Upload Cover</span>
//                 )}
//               </label>
//               <input
//                 id="cover_image"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setCoverImage)}
//                 hidden
//               />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
//             <div className="flex-1">
//               <label className="block font-semibold mb-1 text-black">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-semibold mb-1 text-black">Email:</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block font-semibold mb-1 text-black">About:</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Tell us about yourself"
//               rows="3"
//               className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
//                 isLoading ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {isLoading ? "Updating..." : "Update Profile"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }





















// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import axiosInstance from "../../utils/axiosInstance";

// export default function ProfileUpdateModal({ onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     description: "",
//     profileImage: "",
//     coverImage: ""
//   });
//   const [originalData, setOriginalData] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [hasChanges, setHasChanges] = useState(false);

//   // Load user data
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user")) || {};
//     const initialData = {
//       name: storedUser.name || "",
//       email: storedUser.email || "",
//       description: storedUser.description || "",
//       profileImage: storedUser.profile_image || "",
//       coverImage: storedUser.cover_image || ""
//     };
//     setFormData(initialData);
//     setOriginalData(initialData);
//   }, []);

//   // Check for changes
//   useEffect(() => {
//     const changesDetected = (
//       formData.name !== originalData.name ||
//       formData.email !== originalData.email ||
//       formData.description !== originalData.description ||
//       formData.profileImage !== originalData.profileImage ||
//       formData.coverImage !== originalData.coverImage
//     );
//     setHasChanges(changesDetected);
//   }, [formData, originalData]);

//   const handleImageUpload = (e, field) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFormData(prev => ({ ...prev, [field]: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const dataURLtoFile = (dataurl, filename) => {
//     const arr = dataurl.split(',');
//     const mime = arr[0].match(/:(.*?);/)[1];
//     const bstr = atob(arr[1]);
//     let n = bstr.length;
//     const u8arr = new Uint8Array(n);
//     while (n--) {
//       u8arr[n] = bstr.charCodeAt(n);
//     }
//     return new File([u8arr], filename, { type: mime });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!hasChanges) {
//       alert("No changes detected");
//       return;
//     }

//     setIsLoading(true);
//     setError("");

//     try {
//       const token = Cookies.get("token");
//       if (!token) {
//         throw new Error("Authentication token not found");
//       }

//       const formDataToSend = new FormData();
      
//       // Only append changed fields
//       if (formData.name !== originalData.name) formDataToSend.append("name", formData.name);
//       if (formData.email !== originalData.email) formDataToSend.append("email", formData.email);
//       if (formData.description !== originalData.description) formDataToSend.append("description", formData.description);

//       if (formData.profileImage !== originalData.profileImage && formData.profileImage.startsWith("data:image")) {
//         const profileFile = dataURLtoFile(formData.profileImage, "profile.jpg");
//         formDataToSend.append("profile_image", profileFile);
//       }

//       if (formData.coverImage !== originalData.coverImage && formData.coverImage.startsWith("data:image")) {
//         const coverFile = dataURLtoFile(formData.coverImage, "cover.jpg");
//         formDataToSend.append("cover_image", coverFile);
//       }

//       const response = await axiosInstance.post("/update-profile", formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Update local storage only with changed fields
//       const updatedUser = {
//         ...JSON.parse(localStorage.getItem("user") || {}),
//         ...(formData.name !== originalData.name && { name: formData.name }),
//         ...(formData.email !== originalData.email && { email: formData.email }),
//         ...(formData.description !== originalData.description && { description: formData.description }),
//         ...(formData.profileImage !== originalData.profileImage && { profile_image: formData.profileImage }),
//         ...(formData.coverImage !== originalData.coverImage && { cover_image: formData.coverImage }),
//       };
//       localStorage.setItem("user", JSON.stringify(updatedUser));

//       alert("Profile updated successfully!");
//       onClose();
//     } catch (err) {
//       console.error("Update error:", err);
//       setError(
//         err.response?.data?.message ||
//         err.message ||
//         "Failed to update profile. Please check your connection."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleReset = () => {
//     setFormData(originalData);
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
//         <button
//           className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
//           onClick={onClose}
//         >
//           &times;
//         </button>

//         <h2 className="text-center mb-4 text-xl font-semibold text-black">
//           Update Profile
//         </h2>

//         {error && (
//           <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="flex justify-between mb-4 gap-4">
//             <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//               <label htmlFor="profileImage" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                 {formData.profileImage ? (
//                   <img src={formData.profileImage} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <span>Upload Profile</span>
//                 )}
//               </label>
//               <input
//                 id="profileImage"
//                 name="profileImage"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, "profileImage")}
//                 hidden
//               />
//             </div>

//             <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
//               <label htmlFor="coverImage" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
//                 {formData.coverImage ? (
//                   <img src={formData.coverImage} alt="Cover" className="w-full h-full object-cover" />
//                 ) : (
//                   <span>Upload Cover</span>
//                 )}
//               </label>
//               <input
//                 id="coverImage"
//                 name="coverImage"
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, "coverImage")}
//                 hidden
//               />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
//             <div className="flex-1">
//               <label className="block font-semibold mb-1 text-black">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Enter your name"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block font-semibold mb-1 text-black">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block font-semibold mb-1 text-black">About:</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               placeholder="Tell us about yourself"
//               rows="3"
//               className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex gap-3 mb-4">
//             {hasChanges && (
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
//               >
//                 Reset Changes
//               </button>
//             )}
//             <button
//               type="submit"
//               disabled={isLoading || !hasChanges}
//               className={`flex-1 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
//                 isLoading ? "opacity-70 cursor-not-allowed" : ""
//               } ${!hasChanges ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {isLoading ? "Updating..." : "Update Profile"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
















import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../utils/axiosInstance";

export default function ProfileUpdateModal({ onClose, userData, onUpdateSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    profileImage: "",
    coverImage: ""
  });
  const [originalData, setOriginalData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  // Load user data
  useEffect(() => {
    const initialData = {
      name: userData?.name || "",
      email: userData?.email || "",
      description: userData?.description || "",
      profileImage: userData?.profile_image || "",
      coverImage: userData?.cover_image || ""
    };
    setFormData(initialData);
    setOriginalData(initialData);
  }, [userData]);

  // Check for changes
  useEffect(() => {
    const changesDetected = (
      formData.name !== originalData.name ||
      formData.email !== originalData.email ||
      formData.description !== originalData.description ||
      formData.profileImage !== originalData.profileImage ||
      formData.coverImage !== originalData.coverImage
    );
    setHasChanges(changesDetected);
  }, [formData, originalData]);

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasChanges) {
      alert("No changes detected");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("Authentication token not found");
      }

      const formDataToSend = new FormData();
      
      // Only append changed fields
      if (formData.name !== originalData.name) formDataToSend.append("name", formData.name);
      if (formData.email !== originalData.email) formDataToSend.append("email", formData.email);
      if (formData.description !== originalData.description) formDataToSend.append("description", formData.description);

      if (formData.profileImage !== originalData.profileImage && formData.profileImage.startsWith("data:image")) {
        const profileFile = dataURLtoFile(formData.profileImage, "profile.jpg");
        formDataToSend.append("profile_image", profileFile);
      }

      if (formData.coverImage !== originalData.coverImage && formData.coverImage.startsWith("data:image")) {
        const coverFile = dataURLtoFile(formData.coverImage, "cover.jpg");
        formDataToSend.append("cover_image", coverFile);
      }

      const response = await axiosInstance.post("/update-profile", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // Create the complete updated user object
      const updatedUser = {
        ...userData,
        name: formData.name,
        email: formData.email,
        description: formData.description,
        profile_image: formData.profileImage,
        cover_image: formData.coverImage,
      };

      // Update local storage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Call the success handler with the complete updated user object
      onUpdateSuccess(updatedUser);
      onClose();
    } catch (err) {
      console.error("Update error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to update profile. Please check your connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(originalData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
        <button
          className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-center mb-4 text-xl font-semibold text-black">
          Update Profile
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* ... rest of your modal JSX remains the same ... */}
          <div className="flex justify-between mb-4 gap-4">
              <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition"> 
              <label htmlFor="profileImage" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span>Upload Profile</span>
                )}
              </label>
              <input
                id="profileImage"
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "profileImage")}
                hidden
              />
            </div>

            <div className="w-[180px] h-[120px] border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center overflow-hidden cursor-pointer relative hover:border-blue-500 transition">
              <label htmlFor="coverImage" className="flex justify-center items-center w-full h-full text-gray-600 text-sm">
                {formData.coverImage ? (
                  <img src={formData.coverImage} alt="Cover" className="w-full h-full object-cover" />
                ) : (
                  <span>Upload Cover</span>
                )}
              </label>
              <input
                id="coverImage"
                name="coverImage"
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "coverImage")}
                hidden
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-8">
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-black">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-black">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1 text-black">About:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3 mb-4">
            {hasChanges && (
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              >
                Reset Changes
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading || !hasChanges}
              className={`flex-1 bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              } ${!hasChanges ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div> 
        </form>
      </div>
    </div>
  );
}