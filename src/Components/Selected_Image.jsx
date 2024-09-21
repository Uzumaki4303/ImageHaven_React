import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { spinner } from "./Images";

export default function Selected_Image() {
  const location = useLocation();
  const navigate = useNavigate();

  const { imageUrl, currentPage } = location.state || {};
  const [loading, setLoading] = useState(true); // State to track loading

  if (!imageUrl) {
    return <div>No image URL provided.</div>;
  }

  const handleDownload = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const fileName = imageUrl.split("/").pop().split("?")[0];

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download image.");
    }
  };

  const handleBack = () => {
    navigate("/ImageHaven_React/", { state: { currentPage } });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="gap-5 p-5 flex flex-col justify-center items-center">
        {loading && (
          <div className="flex items-center justify-center">
            <img src={spinner} alt="Loading..." className="h-20 w-20 animate-spin" />
          </div>
        )}
        <img
          src={imageUrl}
          alt="Selected"
          className={`w-full rounded-md ${loading ? "hidden" : "block"}`} // Hide image until it is loaded
          // loading="lazy"
          onLoad={() => setLoading(false)} // Set loading to false when image loads
        />

        <div className="flex w-full justify-between gap-16 md-max:gap-10">
          <button
            onClick={() => handleDownload(imageUrl)}
            className="text-white text-xl sm-max:text-base w-full sm-max:w-2/4 py-2 font-medium rounded-md flex justify-center items-center text-center bg-green-600 hover:bg-green-500"
          >
            Download
          </button>
          <button
            onClick={handleBack}
            className="text-white text-xl sm-max:text-base w-full sm-max:w-2/4 py-2 font-medium rounded-md flex justify-center items-center text-center bg-blue-600 hover:bg-blue-500"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
