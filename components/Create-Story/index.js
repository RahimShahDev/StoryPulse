// import React, { useState } from "react";
// import axiosInstance from "../../utils/axiosInstance"; // Import the axios instance

// function CreateStory({ toggleStoryModal }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null); // State for storing the uploaded image

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Simple validation check
//     if (!title || !description || !image) {
//       alert("Please fill in all fields and upload an image!");
//       return;
//     }

//     try {
//       // Create a FormData object to send the image file
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("image", image); // Append the image file

//       // Make API call to create a blog using axios
//       const response = await axiosInstance.post("/create-blog", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // Set the content type for file upload
//         },
//       });

//       console.log("Blog created successfully:", response.data);

//       // Reset the form after successful submission
//       setTitle("");
//       setDescription("");
//       setImage(null);

//       // Close the modal or show a success message
//       toggleStoryModal();
//     } catch (error) {
//       console.error("Error creating blog:", error);
//       alert("Failed to create blog. Please try again.");
//     }
//   };

//   // Handle image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file); // Store the file object for FormData
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
//         {/* Close button */}
//         <button
//           className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer transition0"
//           onClick={toggleStoryModal}
//         >
//           &times;
//         </button>

//         <h2 className="text-center mb-4 text-xl font-semibold text-black">Create Story</h2>

//         <form onSubmit={handleSubmit} className="space-y-4 text-black">
//           {/* Title Input */}
//           <div className="flex flex-col space-y-2">
//             <input
//               type="text"
//               id="title"
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter Story Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           {/* Description Input */}
//           <div className="flex flex-col space-y-2">
//             <input
//               type="text"
//               id="description"
//               className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter Story Description"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           {/* Image Upload */}
//           <div className="flex items-center gap-4">
//             <div className="w-52 h-40 flex justify-center items-center border-2 border-gray-300 rounded-lg bg-gray-100 relative cursor-pointer">
//               <label htmlFor="image" className="absolute inset-0 flex justify-center items-center text-4xl text-gray-400">
//                 +
//               </label>
//               <input
//                 type="file"
//                 id="image"
//                 className="opacity-0 w-full h-full"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//             </div>

//             {image && (
//               <div className="w-52 h-40 flex justify-center items-center border-2 border-yellow-500 rounded-lg overflow-hidden">
//                 <img src={URL.createObjectURL(image)} alt="Story" className="w-full h-full object-cover" />
//               </div>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full mx-auto px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-orange-500 transition-colors"
//           >
//             Create Story
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateStory;









import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

function CreateStory({ toggleStoryModal, onStoryCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Enhanced validation with trim()
    if (!title.trim() || !description.trim()) {
      setError("Please enter both title and description");
      setIsLoading(false);
      return;
    }

    if (!image) {
      setError("Please upload an image");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("image", image);

      // Debugging: Log FormData contents
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axiosInstance.post("/create-blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Match EXACTLY with your API response structure
      if (!response.data?.success || !response.data?.story) {
        throw new Error(response.data?.message || "Story creation failed - invalid response");
      }

      console.log("Story created successfully:", response.data.story);

      // Pass the complete story object to parent
      onStoryCreated(response.data.story);
      toggleStoryModal();
    } catch (error) {
      console.error("Full error details:", error);
      setError(
        error.response?.data?.message ||
        error.message ||
        "Failed to create story. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Enhanced image validation
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file (JPEG, PNG, WEBP)");
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    setImage(file);
    setError(null); // Clear any previous errors
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[480px] max-w-[90%] relative">
        <button
          className="absolute top-3 right-3 text-2xl text-black hover:text-gray-700 cursor-pointer"
          onClick={toggleStoryModal}
          disabled={isLoading}
        >
          &times;
        </button>

        <h2 className="text-center mb-4 text-xl font-semibold text-black">Create Story</h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Enter story title"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              rows={3}
              placeholder="Enter story description"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Cover Image</label>
            <div className="flex items-center gap-4">
              <label className="w-40 h-40 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  disabled={isLoading}
                />
                <span className="text-gray-500 text-sm">
                  {image ? "Change Image" : "+ Upload Image"}
                </span>
              </label>
              
              {image && (
                <div className="w-40 h-40 border-2 border-yellow-500 rounded-lg overflow-hidden">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 rounded-md text-white font-medium ${
              isLoading ? "bg-yellow-600" : "bg-yellow-500 hover:bg-yellow-600"
            } transition-colors`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </span>
            ) : "Create Story"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateStory;