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
            className="dark:invert cursor-pointer transition-transform duration-300 group-hover:scale-105"
            src="/csmdr.svg"
            alt="GET READY"
            width={340}
            height={100}
            priority
          />

          {/* Futuristic Tree Branch Popup Menu */}
          {isHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-0 h-0">
              <div className="relative flex justify-center items-center">
                {/* "Branch" item 1 */}
                <div
                  className="absolute text-5xl transform transition-all duration-700 hover:text-pink-500"
                  style={{
                    animation: "dance 10s ease-in-out infinite",
                    top: "-150px",
                    left: "0px",
                    color: "cyan",
                  }}
                >
            
                  connect
                </div>
                {/* "Branch" item 4 */}
                <div
                  className="absolute text-5xl transform transition-all duration-700 hover:text-pink-500"
                  style={{
                    animation: "dance 1s ease-in-out infinite",
                    top: "-200px",
                    left: "-50px",
                    color: "orangered",
                  }}
                >
                  vibs
                </div>
                {/* "Branch" item 5 */}
                <div
                  className="absolute text-5xl transform transition-all duration-700 hover:text-pink-500"
                  style={{
                    animation: "dance 4s ease-in-out infinite",
                    top: "-180px",
                    left: "150px",
                    color: "magenta",
                  }}
                >
                  extras
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
            transform: translateY(-10px) rotate(5deg);
          }
          50% {
            transform: translateY(0px) rotate(-5deg);
          }
          75% {
            transform: translateY(10px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
