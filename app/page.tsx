"use client"; // Marking the file as a client-side component

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="logo flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            className="dark:invert cursor-pointer transition-transform duration-900 group-hover:scale-103"
            src="/csmdr.svg"
            alt="GET READY"
            width={350}
            height={180}
            priority
          />

          {/* Futuristic Tree Branch Popup Menu */}
          {isHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-0 h-0">
              <div className="relative flex justify-center items-center">
                {/* "Branch" item 1 */}
                <div
                  className="absolute text-3xl transform transition-all duration-400 hover:text-pink-300"
                  style={{
                    animation: "dance 10s ease-in-out infinite",
                    top: "-140px",
                    left: "43px",
                    color: "cyan",
                  }}
                >
            
                  projects
                </div>
                {/* "Branch" item 4 */}
                <div
                  className="absolute text-3xl transform transition-all duration-900 hover:text-pink-500"
                  style={{
                    animation: "dance 1s ease-in-out infinite",
                    top: "-150px",
                    left: "-5px",
                    color: "orangered",
                  }}
                >
                  vibs
                </div>
                {/* "Branch" item 5 */}
                <div
                  className="absolute text-1xl transform transition-all duration-900 hover:text-pink-500"
                  style={{
                    animation: "dance 4s ease-in-out infinite",
                    bottom: "10px",
                    left: "120px",
                    color: "lightgray",
                  }}
                >
                  U+1F680
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>

      <style jsx>{`
        @keyframes dance {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(9deg);
          }
          50% {
            transform: translateY(0px) rotate(-9deg);
          }
          75% {
            transform: translateY(10px) rotate(9deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
