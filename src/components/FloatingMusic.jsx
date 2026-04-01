// src/components/FloatingMusicPlayer.jsx
"use client";

import { useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart } from "lucide-react";

export default function FloatingMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // ▶️ Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // if song already ended → restart
      if (audioRef.current.ended) {
        audioRef.current.currentTime = 0;
      }

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => alert("Click again to allow audio"));
    }
  };

  // ⏪ Back 10 sec
  const back10 = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime -= 10;
  };

  // ⏩ Forward 10 sec
  const forward10 = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += 10;
  };

  return (
    <>
      {/* 🎵 AUDIO */}
      <audio
        ref={audioRef}
        src="/1.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      {/* 💖 FLOATING PLAYER */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-[5px] 
                        bg-white/10 backdrop-blur-[2px] 
                        border border-gray-200 
                        shadow-lg"
        >
          {/* ❤️ HEART */}
          <Heart className="w-4 h-4 text-pink-500 animate-pulse" />

          {/* ⏪ */}
          <button
            onClick={back10}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <SkipBack className="w-4 h-4 text-gray-600" />
          </button>

          {/* ▶️ / ⏸ */}
          <button
            onClick={togglePlay}
            className="bg-gradient-to-r from-pink-500 to-rose-500 
                       text-white p-2 rounded-full 
                       shadow-md hover:scale-105 transition"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-[2px]" />
            )}
          </button>

          {/* ⏩ */}
          <button
            onClick={forward10}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <SkipForward className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </>
  );
}
