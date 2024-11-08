import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

const Gallery = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  // Next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  // Previous image
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleCircleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <section className="max-w-[100%] h-[100vh] flex bg-slate-600">
        <div className="flex w-[100%] h-[100%]">
          <div
            className="bg-slate-100 h-[100%] w-[100%] flex justify-center items-center bg-center bg-cover"
            style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}
          >
            <div className="absolute w-full px-4 flex justify-between transform -translate-y-1/2 opacity-70 z-10">
              <button onClick={previousImage} aria-label="Previous Image">
                <FaArrowLeft className="w-8 h-8 text-white cursor-pointer" />
              </button>
              <button onClick={nextImage} aria-label="Next Image">
                <FaArrowRight className="w-8 h-8 text-white cursor-pointer" />
              </button>
            </div>

            <div className="w-full flex justify-center absolute space-x-2 -bottom-[100%] my-4 ">
              {imageUrls.map((_, index) => (
                <FaCircle
                  key={index}
                  onClick={() => handleCircleClick(index)}
                  className={`cursor-pointer w-4 h-4 ${
                    index === currentImageIndex
                      ? "text-white opacity-80"
                      : "text-white opacity-40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
