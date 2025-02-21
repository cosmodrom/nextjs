import { useState, useRef } from "react";
import Image from "next/image";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-64 h-64 cursor-pointer" onClick={togglePlay}>
      <Image 
        src="/thumbnail.jpg" 
        alt="Audio Thumbnail" 
        layout="fill" 
        objectFit="cover" 
        className="rounded-lg"
      />
      <audio ref={audioRef} src="/audio.mp3" loop />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl font-bold">
        {isPlaying ? "Pause" : "Play"}
      </div>
    </div>
  );
}
