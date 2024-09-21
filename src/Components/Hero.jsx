import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { search_icon, cross_icon, spinner } from "./Images";

const API_key = import.meta.env.VITE_PEXELS_API_KEY ;

export default function Hero() {
  const [images, setImages] = useState([]);
  const [Input, setInput] = useState("Cherry blossoms");
  const [active, setActive] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState();

  const MAX_PAGES = 20;
  const navigate = useNavigate();

  useEffect(() => {

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {
            Authorization: `${API_key}`,
          },
          params: {
            query: Input,
            per_page: 16,
            page: active,
          },
        });
        

        setImages(response.data.photos);
        const totalResults = response.data.total_results;
        const calculatedPages = Math.ceil(totalResults / 12);
        setTotalPages(Math.min(calculatedPages, MAX_PAGES));
      } catch (error) {
        console.error("Error fetching images from Pexels:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [Input, active]);

  const next = () => {
    if (active < totalPages) {
      setActive((prevActive) => prevActive + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setActive(1); // Reset to page 1 on input change
  };

  const clearInput = () => {
    setInput("");
  };

  const handleImage = (event) => {
    const imgUrl = event.currentTarget.dataset.highRes;
    navigate("/image-viewer", {
      state: {
        imageUrl: imgUrl,
        currentPage: active, // Pass current page number
      },
    });
  };

  return (
    <div className="bg-cover bg-center w-full h-auto overflow-auto p-5 flex flex-col justify-center items-center">
      <div className="w-9/12 bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white text-base hover:border-[#e4dfdf] cursor-pointer transition ">
        <div className=" flex">
          <button className="pl-3">
            <img src={search_icon} alt="Search Icon" />
          </button>
          <input
            value={Input}
            onChange={handleInput}
            placeholder="Enter your search term"
            className="w-full bg-transparent outline-none rounded-lg text-white px-2 py-1 text-base cursor-pointer transition"
            type="text"
          />
          {Input && (
            <button type="button" className="pr-3" onClick={clearInput}>
              <img src={cross_icon} alt="Cross Icon" />
            </button>
          )}
        </div>
      </div>

      {/* Conditionally render spinner or images */}
      {loading ? (
        <img
          src={spinner}
          alt="Loading..."
          className="h-20 w-20 animate-spin mt-8"
        />
      ) : (
        <div className="grid md-max:grid-cols-2 sm-max:block grid-cols-4 gap-4 mt-8 md:gap-8 ">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex justify-center p-1 border-4 border-transparent hover:border-[#e4dfdf] rounded-xl cursor-pointer sm-max:my-5 "
            >
              <img
                src={image.src.medium}
                alt={image.photographer}
                className="w-[500px] aspect-square object-cover rounded-xl sm-max:w-[300px]"
                loading="lazy"
                onClick={handleImage}
                data-high-res={image.src.large}
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-8 mt-8">
        <IconButton
          size="sm"
          variant="text"
          onClick={prev}
          className={`${
            active === 1 ? "invisible" : "visible"
          } flex items-center justify-center p-1 w-8 h-8`}
        >
          <ArrowLeftIcon strokeWidth={2} stroke="white" className="h-6 w-6" />
        </IconButton>

        <div className="font-normal text-white">
          Page <strong>{active}</strong> of <strong>{totalPages}</strong>
        </div>

        <IconButton
          size="sm"
          variant="text"
          onClick={next}
          className={`${
            active >= totalPages ? "Invisible" : "visible"
          } flex justify-center items-center p-1 w-8 h-8`}
        >
          <ArrowRightIcon strokeWidth={2} stroke="white" className="h-6 w-6" />
        </IconButton>
      </div>
    </div>
  );
}
