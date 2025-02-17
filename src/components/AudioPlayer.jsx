import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = () => {
  const [audio] = useState(new Audio('/audio/ROYALTY FREE Travel Video Background Music  Travel Pop Royalty Free Music by MUSIC4VIDEO.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log(error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className={`fixed bottom-12 right-16 z-50 border-transparent hover:border-white transition-all duration-150 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
        isPlaying ? "bg-white/90 text-black" : "bg-black/30 text-white"
      }`}
    >
      {/* Use icons with animation */}
      {isPlaying ? (
        <FaPause className="w-8 h-8 animate-pulse" size={24} />
      ) : (
        <FaPlay className="w-8 h-8 animate-pulse" size={24} />
      )}
    </button>
  );
};

export default AudioPlayer;
