import './App.css'
import { useEffect, useState } from 'react';
// import useSound from 'use-sound';
import bruh from './assets/bruh.mp3';

function App() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioElement = new Audio(bruh);
    audioElement.autoplay = true;
    audioElement.loop = true;
    setAudio(audioElement);

    return () => {
      audioElement.pause();
    };
  }, []);

  const handlePausePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <button onClick={handlePausePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

export default App
