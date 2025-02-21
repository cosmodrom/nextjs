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

          {/* Futuristic Popup Menu */}
          {isHovered && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-opacity-50 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg backdrop-blur-md text-white">
              <h3 className="text-lg font-bold">Futuristic Options</h3>
              <ul className="flex flex-col gap-4 mt-2">
                <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                  Option 1
                </li>
                <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                  Option 2
                </li>
                <li className="hover:text-yellow-300 cursor-pointer transition-colors">
                  Option 3
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
