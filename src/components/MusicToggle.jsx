import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import backMusic from "../assets/BackgroundMusic.mp3"; // Ensure this path is correct

function MusicToggle() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;

      audioRef.current.play().catch(() => {
        // Autoplay was blocked, mute and play silently
        audioRef.current.muted = true;
        audioRef.current.play();
        setIsMuted(true);
        console.log("Autoplay blocked, muted to allow playback.");
      });
    }
  }, []);

  // Toggle mute/unmute and play/pause on click
  const toggleMute = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  return (
    <div onClick={toggleMute} style={{ cursor: "pointer", fontSize: "1.5rem" }}>
      {isMuted ? <VolumeX /> : <Volume2 />}
      <audio ref={audioRef} loop>
        <source src={backMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default MusicToggle;
