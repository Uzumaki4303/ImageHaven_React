import React from 'react';
import { linkedInIcon , githubIcon } from './Images';

const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL

export default function Footer() {
  return (
    <div className="bg-gray-500/10 text-center p-5 h-auto">
      <span className="text-teal-500 text-xl font-bold mb-4 border-b-2 border-transparent border-0 border-b-teal-500">Connect with me</span>
      
      <div className="flex justify-center gap-8 pt-5">
        {/* LinkedIn Link */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInIcon}
            alt="LinkedIn"
            className="w-10 h-10 hover:brightness-100 transition-opacity brightness-75 duration-300"
          />
        </a>

        {/* GitHub Link */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-10 h-10 "

          />
        </a>
      </div>
    </div>
  );
}
