const PopularStories = () => {
    return (
      <>
        <div
          className="relative flex justify-center items-center bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/assets/images/popular-stories-banner.jpg')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
  
          {/* Content Section */}
          <div className="relative text-center px-4 md:px-8 py-16 min-h-[400px] md:min-h-[500px] lg:min-h-[450px]">
            <div className="max-w-2xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Explore the Most Popular Stories!
              </h1>
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Discover captivating stories loved by our community. Engage, share, 
                and immerse yourself in thrilling narratives from around the world.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default PopularStories;
  