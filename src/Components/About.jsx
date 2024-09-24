import { useState, useEffect } from "react";

import { flowers, food, technology, people } from "./Images";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`${
        isLoaded ? "slide-in" : ""
      } w-full flex flex-col justify-center items-center group transition-all duration-100 overflow-auto mt-10`}
    >
      <h1 className="text-teal-500 font-bold text-3xl border-b-4 border-transparent group-hover:border-b-red-500 border-0 rounded-b-lg mt-5 pb-1">
        About Us
      </h1>
      <div className="w-full flex items-center p-8 gap-16 md-max:flex-col md-max:p-2 md-max:mt-5">
        <div className="w-3/5 h-min text-xl tracking-wider text-white font-bold flex flex-col justify-center items-center pb-16 md-max:w-fit md-max:p-0">
          <p className="mb-8">
            Welcome to our image gallery website, where discovering beautiful
            images is simple and enjoyable. We've designed our site with you in
            mind, making it easy to browse through a wide variety of images. You
            can quickly find what you're looking for by sorting images by name,
            ensuring you spend more time enjoying your favorite visuals and less
            time searching.
          </p>
          <p className="mb-8">
            We know how important it is to have access to high-quality images
            whenever you need them, so we've made it easy for you to download
            any image directly to your device with just one click. Whether
            you're saving images for a project or simply want to keep a
            collection of your favorites, our download feature is here to help.
          </p>
          <p className="">
            We also take great pride in offering a responsive user interface
            that works beautifully on any device, whether you're using a
            desktop, tablet, or smartphone. Our design adapts seamlessly to
            different screen sizes, so you can enjoy the same high-quality
            experience whether you're at home or on the go. We’re committed to
            providing an accessible and enjoyable browsing experience, making it
            easy for you to explore, download, and share the images that
            resonate with you. Thank you for visiting our site, and we hope you
            find inspiration and joy in every corner of our gallery.
          </p>
        </div>

        <div className="w-max grid grid-cols-2 place-content-center place-items-center gap-2 sm-max:grid-cols-1 sm-max:gap-5">
          <img
            src={food}
            alt=""
            className="w-80 border rounded-bl-[40%] rounded-tr-[40%] sm-max:rounded-2xl"
          />
          <img
            src={technology}
            alt=""
            className="w-80 border rounded-br-[40%] rounded-tl-[40%] sm-max:rounded-2xl"
          />
          <img
            src={people}
            alt=""
            className="w-80 border rounded-br-[40%] rounded-tl-[40%] sm-max:rounded-2xl"
          />
          <img
            src={flowers}
            alt=""
            className="w-80 border rounded-bl-[40%] rounded-tr-[40%] sm-max:rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
