"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  image: string;
  category: string;
  header: string;
}

interface SliderProps {
  slides: Slide[];
}

const ReactSlickSlider: React.FC<SliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderInsight = (slide: Slide) => {
    return (
      <div key={slide.header} className="p-2 mb-4 xl:mb-0 h-full">
        {/* Outer container with h-full to ensure it stretches */}
        <div className="md:h-[420px] lg:h-[460px] flex flex-col rounded-3xl shadow-lg text-center bg-white overflow-hidden">
          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.header}
            width={300}
            height={200}
            className="w-full h-48 object-cover hover:scale-105 transition-transform ease-in-out duration-300"
          />
          {/* Content Section */}
          <section className="p-5 md:p-8 flex flex-col flex-grow text-start">
            <div className="mb-2 text-base uppercase font-thin text-gray-500">
              {slide.category}
            </div>
            <div className="text-xl font-bold text-black">{slide.header}</div>
          </section>
        </div>
      </div>
    );
  };

  //   const renderInsight = (slide: Slide) => {
  //     return (
  //       <div key={slide.header} className="p-2 mb-4 h-full">
  //         <div className="h-full flex flex-col rounded-3xl shadow-xl text-center bg-white overflow-hidden">
  //           <Image
  //             src={slide.image}
  //             alt={slide.header}
  //             width={300}
  //             height={200}
  //             className="mb-4 w-full h-48 object-cover"
  //           />
  //           <section className="p-5 md:p-10 h-full flex flex-col flex-grow text-start">
  //             <div className="text-base uppercase font-thin text-gray-500">
  //               {slide.category}
  //             </div>
  //             <div className="text-xl font-bold text-black">{slide.header}</div>
  //           </section>
  //         </div>
  //       </div>
  //     );
  //   };

  return (
    <div className="mx-auto py-10">
      <section className="xl:hidden">
        <Slider {...settings}>
          {slides.map((slide) => renderInsight(slide))}
        </Slider>
      </section>
      <section className="hidden xl:flex items-start">
        {slides.map((slide) => renderInsight(slide))}
      </section>
    </div>
  );
};

export default ReactSlickSlider;

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// interface Slide {
//   image: string;
//   category: string;
//   header: string;
//   blurb: string;
// }

// interface SliderProps {
//   slides: Slide[];
// }

// const Slider: React.FC<SliderProps> = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [visibleSlides, setVisibleSlides] = useState<number>(1); // Default for mobile

//   // Update the number of visible slides based on screen size
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setVisibleSlides(4); // Large screens
//       } else if (window.innerWidth >= 768) {
//         setVisibleSlides(2); // Tablets
//       } else {
//         setVisibleSlides(1); // Mobile
//       }
//     };

//     handleResize(); // Set initial value
//     window.addEventListener("resize", handleResize); // Listen for window resize
//     return () => window.removeEventListener("resize", handleResize); // Cleanup
//   }, []);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - visibleSlides : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - visibleSlides ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(-${(currentIndex / slides.length) * 100}%)`,
//           width: `${(slides.length / visibleSlides) * 100}%`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 ${
//               visibleSlides === 1 ? "w-full" : `w-1/${visibleSlides}`
//             } flex items-center justify-center h-64 bg-gray-200`}
//           >
//             <div className="flex flex-col items-center p-4">
//               <Image
//                 src={slide.image}
//                 alt={slide.header || `Slide ${index + 1}`}
//                 className="w-full h-full object-contain"
//                 width={100}
//                 height={100}
//               />
//               <h3 className="font-bold mt-2">{slide.header}</h3>
//               <p className="text-sm text-gray-600">{slide.blurb}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8594;
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {Array.from({ length: Math.ceil(slides.length / visibleSlides) }).map(
//           (_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * visibleSlides)}
//               className={`w-3 h-3 rounded-full ${
//                 currentIndex === index * visibleSlides
//                   ? "bg-blue-500"
//                   : "bg-gray-300"
//               }`}
//             ></button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// "use client";
// import Image from "next/image";
// import { useState } from "react";

// interface Slide {
//   image: string;
//   category: string;
//   header: string;
//   blurb: string;
// }

// interface SliderProps {
//   slides: Slide[];
// }

// const Slider: React.FC<SliderProps> = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="w-full flex-shrink-0 flex items-center justify-center h-64 bg-gray-200"
//           >
//             <Image
//               src={slide.image}
//               alt={slide.header || `Slide ${index + 1}`}
//               className="w-full h-full object-contain"
//               width={100}
//               height={100}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8594;
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;

// "use client";

// import Image from "next/image";
// import { useState } from "react";

// interface Slide {
//   image: string;
//   category: string;
//   header: string;
//   blurb: string;
// }

// interface SliderProps {
//   slides: Slide[];
// }

// const Slider: React.FC<SliderProps> = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   const visibleSlides = 4; // Number of slides visible on large screens

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - visibleSlides : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === slides.length - visibleSlides ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
//       {/* Slides */}
//       <div
//         className="flex transition-transform duration-500"
//         style={{
//           transform: `translateX(-${(currentIndex / visibleSlides) * 100}%)`,
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="w-1/4 flex-shrink-0 flex items-center justify-center h-64 bg-gray-200"
//           >
//             <Image
//               src={slide.image}
//               alt={slide.header || `Slide ${index + 1}`}
//               className="w-full h-full object-contain"
//               width={100}
//               height={100}
//             />
//             <div className="text-center mt-2">
//               <h3 className="font-bold">{slide.header}</h3>
//               <p className="text-sm text-gray-600">{slide.blurb}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
//       >
//         &#8594;
//       </button>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {Array.from({ length: Math.ceil(slides.length / visibleSlides) }).map(
//           (_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index * visibleSlides)}
//               className={`w-3 h-3 rounded-full ${
//                 currentIndex === index * visibleSlides
//                   ? "bg-blue-500"
//                   : "bg-gray-300"
//               }`}
//             ></button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Slider;
