import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { person } from "./Images";

const USERID = import.meta.env.VITE_EMAILJS_USERID;
const SERVICEID = import.meta.env.VITE_EMAILJS_SERVICEID;
const TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATEID;

export default function Feedback() {
  const [formData, setFormData] = useState({ Name: "", Message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Track when the page has loaded

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on page load
    setIsLoaded(true); // Trigger the animation after the page loads
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userID = USERID;
    const serviceID = SERVICEID;
    const templateID = TEMPLATEID;

    const templateParams = {
      user_name: formData.Name,
      message: formData.Message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true); // Update the state when email is successfully sent
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <div
      className={`${
        isLoaded ? "slide-in" : ""
      } w-full flex justify-center items-center p-5 gap-24 md-max:gap-5 sm-max:flex-col sm-max:p-2 transition-all`}
    >
      <img src={person} alt="" className="md-max:h-[280px]" />

      <form
        onSubmit={sendEmail}
        className="w-2/5 flex flex-col justify-center items-center p-5 md-max:w-full relative" // Added relative positioning here
      >
        <div className="w-full flex flex-col justify-center border border-slate-200 gap-2 rounded-xl p-5 text-sm">
          <h1 className="text-center text-slate-200 text-xl font-bold">
            Send Feedback
          </h1>

          <input
            name="Name"
            type="text"
            required
            placeholder="Enter Name"
            onChange={handleInputChange}
            className="bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border-2 border-slate-200 resize-none outline-none rounded-lg p-2 duration-300 hover:border-green-500"
          />

          <textarea
            name="Message"
            placeholder="Your feedback..."
            required
            onChange={handleInputChange}
            className="h-24 bg-slate-100 text-slate-600 placeholder:text-slate-600 placeholder:opacity-50 border-2 border-slate-200 resize-none outline-none rounded-lg p-2 duration-300 hover:border-green-500"
          ></textarea>

          <button
            type="submit"
            className="bg-slate-100 stroke-slate-600 border border-slate-200 flex justify-center rounded-lg mt-5 p-2 duration-300 hover:bg-green-500 focus:stroke-blue-200 group"
          >
            <span className="pr-2 text-green-500 font-bold rounded-lg group-hover:text-white">Submit</span>
            <span className="transform transition-transform duration-300 rotate-45 group-hover:rotate-0">
              🚀
            </span>
          </button>
        </div>

        {isSent && (
          <p className="w-full text-green-500 absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex justify-center border">
            🚀 Email sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}
