import { ChangeEvent, useEffect, useRef, useState } from "react";
import Mark from "../../../interfaces/Mark";
import { BeatFormsList } from "../BeatFormsList";
import "./BeatGeneratorManual.scss";

export const BeatGeneratorManual = ({setOptionSelected}:any) => {
  const [audioSelected, setAudioSelected] = useState<string | null>(null);
  const [marks, setMarks] = useState<Mark[]>([]);
  const [levels, setLevels] = useState<{ level1: Mark[], level2: Mark[], level3: Mark[] } | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<'level1' | 'level2' | 'level3' | null>(null);

  const arrowIcon = './assets/images/icons/arrow.svg';
  const noteIcon = './assets/images/icons/note.svg';

  const [progressWidth, setProgressWidth] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [selectedMark, setSelectedMark] = useState(0);

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
        setIsPlaying(true);

        if (!levels) {
          generate();
        }

        if (!selectedLevel) {
          setSelectedLevel('level1');
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
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
        locationY: "",
        hit: "",
        formVisible: false,
      }]);
    }
  };

  const generateMarksProperties = (marks: Mark[]): Mark[] => {
    const timeCounts: { [key: number]: { count: number; positions: string[] } } = {};

    return marks.map(mark => {
      if (!timeCounts[mark.time]) {
        timeCounts[mark.time] = { count: 0, positions: [] };
      }
      timeCounts[mark.time].count++;

      let locationX = "";
      let locationY = "";
      let tries = 0;

      do {
        locationX = ["Left", "Right", "Middle"][Math.floor(Math.random() * 3)];
        locationY = ["Top", "Bottom"][Math.floor(Math.random() * 2)];
        tries++;
      } while (
        timeCounts[mark.time]?.positions.includes(`${locationX}-${locationY}`) &&
        tries < 10
      );

      if (tries < 10) {
        timeCounts[mark.time].positions.push(`${locationX}-${locationY}`);
      }

      return {
        ...mark,
        locationX: mark.locationX || locationX,
        locationY: mark.locationY || locationY,
        hit: mark.hit || ["Top", "Bottom", "Left", "Right"][Math.floor(Math.random() * 4)],
      };
    });
  };

  const generate = () => {
    if (audioRef.current) {
      // Generate marks for each level
      const marksLevel1 = generateMarksProperties(marks);
      const marksLevel2 = generateMarksProperties(marks);
      const marksLevel3 = generateMarksProperties(marks);

      // Concatenate additional marks for each level
      const level1 = marksLevel1.concat(addAdditionalMarks(marksLevel1, 0.07));
      const level2 = marksLevel2.concat(addAdditionalMarks(marksLevel2, 0.15));
      const level3 = marksLevel3.concat(addAdditionalMarks(marksLevel3, 0.3));

      setLevels({ level1, level2, level3 });

      // Select level 1 by default
      setSelectedLevel('level1');
      setMarks(level1);
    }
  };

  const addAdditionalMarks = (existingMarks: Mark[], percentage: number): Mark[] => {
    const count = Math.ceil(existingMarks.length * percentage);
    const additionalMarks: Mark[] = [];
    const timeCounts: { [key: number]: { count: number; positions: string[] } } = {};

    existingMarks.forEach(mark => {
      if (!timeCounts[mark.time]) {
        timeCounts[mark.time] = { count: 0, positions: [] };
      }
      timeCounts[mark.time].count++;
      timeCounts[mark.time].positions.push(`${mark.locationX}-${mark.locationY}`);
    });

    for (let i = 0; i < count; i++) {
      const randomMark = existingMarks[Math.floor(Math.random() * existingMarks.length)];
      let time = randomMark.time;
      let tries = 0;
      let locationX = "";
      let locationY = "";

      do {
        locationX = ["Left", "Right", "Middle"][Math.floor(Math.random() * 3)];
        locationY = ["Top", "Bottom"][Math.floor(Math.random() * 2)];
        tries++;
      } while (
        timeCounts[time]?.positions.includes(`${locationX}-${locationY}`) &&
        tries < 10
      );

      if (tries < 10) {
        timeCounts[time].count++;
        timeCounts[time].positions.push(`${locationX}-${locationY}`);

        additionalMarks.push({
          id: existingMarks.length + i,
          time,
          locationX,
          locationY,
          hit: ["Top", "Bottom", "Left", "Right"][Math.floor(Math.random() * 4)],
          formVisible: false,
        });
      }
    }

    return additionalMarks.sort((a, b) => a.time - b.time);
  };

  const updateLevels = (level: 'level1' | 'level2' | 'level3') => {
    if (levels) {
      setLevels({
        ...levels,
        [level]: marks,
      });
    }
  };

  const selectLevel = (level: 'level1' | 'level2' | 'level3') => {
    if (levels) {
      updateLevels(selectedLevel as 'level1' | 'level2' | 'level3');
      setMarks(levels[level]);
      setSelectedLevel(level);
    }
  };

  const handleDownload = (level: 'level1' | 'level2' | 'level3') => {
    if (!levels) return;

    updateLevels(level);
    // FIX: Wait for the state to update before downloading


    // Fill empty forms with random values before downloading
    const filledMarks = levels[level].map(mark => {
      if (mark.locationX === "") {
        mark.locationX = ["Left", "Right", "Middle"][Math.floor(Math.random() * 3)];
      }
      if (mark.locationY === "") {
        mark.locationY = ["Top", "Bottom"][Math.floor(Math.random() * 2)];
      }
      if (mark.hit === "") {
        mark.hit = ["Top", "Bottom", "Left", "Right"][Math.floor(Math.random() * 4)];
      }
      return mark;
    });

    // TODO: Give feedback to the user


    const filteredMarks = filledMarks.map(({ id, formVisible, ...rest }) => rest);
    const data = { beatData: filteredMarks };
    downloadJSON(data, `${level}.json`);
  };

  const downloadJSON = (data: any, filename: string) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", filename);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
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

  // const handleCloseModal = () => {
  //   console.log('aquiii');
  //   setInfoModalSelected({
  //     isAutomatic: false,
  //     isRandom: false,
  //     isManual: false
  //   });
  // }

  useEffect(() => {
    const handleAudioEnded = () => {
      console.log(marks);
      setIsPlaying(false);
    };

    if (audioRef.current)
      audioRef.current.addEventListener("ended", handleAudioEnded);
    return () => {
      if (audioRef.current)
        audioRef.current.removeEventListener("ended", handleAudioEnded);
    };
  }, [marks]);

  return (
    <div className="beat-generator-cont">

      <div className="beat-generator-content">
        <div className="modal-header">
          <h1>BEAT GENERATOR</h1>
          <span
            onClick={ ()=> setOptionSelected({
                  isAutomatic: false,
                  isRandom: false,
                  isManual: false
                })}
            className="close"
          >
            &times;
          </span>
        </div>
        <div className="buttons-cont">
          <button className="mark-button" onClick={handleMarkButtonClick} disabled={!audioSelected || !isPlaying}>
            Add Mark
          </button>
          <button className="mark-button"
            onClick={() => {
              audioRef.current!.currentTime = 0;
              audioRef.current!.play();
              setIsPlaying(true);
            }}
          >
            Restart Song
          </button>
        </div>

        <section className="input-song">
          <label className={"music-input-icons " + (isPlaying ? "dancing" : "")} htmlFor="music">
            <img className="arrow" src={arrowIcon} alt="" />
            <img className="note" src={noteIcon} alt="" />
          </label>
          <input disabled={isPlaying} className="music-input" type="file" id="music" onChange={handleFileChange} />

          <div className="marks-cont">
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
          <button disabled={!audioSelected || marks.length === 0} onClick={generate}>
            Fill Forms Randomly
          </button>
          {levels && (
            <>
              <button onClick={() => selectLevel('level1')}>
                Show Level 1
              </button>
              <button onClick={() => selectLevel('level2')}>
                Show Level 2
              </button>
              <button onClick={() => selectLevel('level3')}>
                Show Level 3
              </button>
            </>
          )}
          {selectedLevel && marks.length !== 0 && (
            <button onClick={() => handleDownload(selectedLevel)}>
              Download {selectedLevel.replace('level', 'Level ')}
            </button>
          )}
        </section>

        {marks && <BeatFormsList defaultMarks={marks} setMarks={setMarks} setSelectedMark={setSelectedMark} />}
      </div>
    </div>
  );
};
