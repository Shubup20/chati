import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import AudioFile from "../assets/audio/file_example.mp3";
import { Pause, Play } from "@phosphor-icons/react";

/* eslint-disable react/prop-types */
const Waveform = (props) => {
  const { incoming } = props;
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (waveformRef.current) {
      // Initialize WaveSurfer
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#3c50E0",
        progressColor: "#80CAEE",
        url: AudioFile,
        height: 100,
        barWidth: 2,
        responsive: true,
        normalize: true,
      });

      // Set up event listeners
      ws.on("ready", () => {
        setDuration(formatTime(ws.getDuration()));
      });

      ws.on("audioprocess", () => {
        setCurrentTime(formatTime(ws.getCurrentTime()));
      });

      ws.on("finish", () => {
        setIsPlaying(false);
        setCurrentTime("0:00");
      });

      wavesurferRef.current = ws;

      return () => {
        ws.destroy();
      };
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`flex flex-row items-center space-x-6 p-2 rounded-md ${
        !incoming ? "bg-transparent" : "bg-gray-300 dark:bg-boxdark"
      }`}
    >
      <button
        onClick={handlePlayPause}
        className="bg-gray-200 dark:bg-boxdark-2 rounded-full h-18 w-18 flex items-center justify-center shadow-lg"
      >
        {isPlaying ? (
          <Pause size={24} weight="bold" />
        ) : (
          <Play size={24} weight="bold" />
        )}
      </button>

      <div className="grow flex flex-col space-y-1">
        <div
          className="w-full !z-0"
          ref={waveformRef}
          style={{ overflow: "hidden" }}
        ></div>
        <div className="text-sm">
          {currentTime} / {duration}
        </div>
      </div>
    </div>
  );
};

export default Waveform;
