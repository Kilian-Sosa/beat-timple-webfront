import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import './BeatGenerator.scss'
import { BeatFormsList } from "./BeatFormsList";
import Mark from "../../interfaces/Mark";

export const BeatGenerator: React.FC = () => {
  const [audioSelected, setAudioSelected] = useState<string | null>(null);
  const [marks, setMarks] = useState<Mark[]>([]);
  const arrowIcon= './assets/images/icons/arrow.svg'
  const noteIcon= './assets/images/icons/note.svg'
  
  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // New state variable
  const audioRef = useRef<HTMLAudioElement>(null);

  const [selectedMark, setSelectedMark] = useState(0)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setAudioSelected(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true); // Update isPlaying state when audio starts playing
      } else {
        audioRef.current.pause();
        setIsPlaying(false); // Update isPlaying state when audio pauses
      }
    }
  };

  const handleMarkButtonClick = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setMarks([...marks, {
        id: marks.length,
        time: currentTime,
        locationX: "",
        locationY: ""
      }]);
    }
  };

  useEffect(() => {
    const updateProgressWidth = () => {
      if (audioRef.current && audioRef.current.duration) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgressWidth((currentTime / duration) * 100);
      }
    };

    const intervalId = setInterval(updateProgressWidth, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleAudioEnded = () => {
      console.log(marks);
      setIsPlaying(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  return (
    <>
    <div className="beat-generator-cont">
     
      <div className="buttons-cont">
      <button onClick={handleMarkButtonClick} disabled={!audioSelected || !isPlaying}>
        Add Mark
      </button>
      </div>

    <section className="input-song">
      <label className={"music-input-icons " + (isPlaying ? "dancing": "")} htmlFor="music">
        <img className="arrow" src={arrowIcon} alt="" />
        <img className="note" src={noteIcon} alt="" />
      </label>
      <input disabled={isPlaying} className="music-input" type="file" id="music"  onChange={handleFileChange} />



      <div className="marks-cont" >
        <div className="progress"
          style={{
            width: `${progressWidth}%`,
          }}
        ></div>
        {marks.map((mark, index) => (
          <div
            className={selectedMark === index ? 'mark selected' : 'mark'}
            key={index}
            style={{
              left: `${(mark.time / (audioRef.current?.duration || 1)) * 100}%`,
            }}
          ></div>
        ))}
      </div>
      </section>

      <section className="buttons-cont">

        <div>
          {audioSelected && (
            <>
              <audio ref={audioRef} src={audioSelected} style={{ display: 'none' }} />
              <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            </>
          )}
        </div>
        <button disabled={!audioSelected} onClick={() => console.log(marks)}>Generate</button>
      </section >
   

     { marks && <BeatFormsList defaultMarks={marks} setSelectedMark={setSelectedMark}/> }
   
     </div>
   </>
  );
};
