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
            className="dark:invert cursor-pointer transition-transform duration-900 group-hover:scale-105"
            src="/csmdr.svg"
            alt="GET READY"
            width={230}
            height={100}
            priority
          />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">since 1985</footer>

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
