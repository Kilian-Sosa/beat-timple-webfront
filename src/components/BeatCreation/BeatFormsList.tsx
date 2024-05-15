import { useEffect, useState } from "react";
import "./BeatFormList.scss";
import Mark from "../../interfaces/Mark";
import { BeatForm } from "./BeatForm";

export const BeatFormsList = ({
 
}: {
  defaultMarks: Mark[];
  setSelectedMark: (value: number) => void;
}) => {
  // const [position, setPosition] = useState<number>(0);
  // const [allowExtra, setAllowExtra] = useState<boolean>(false);
  // const [marks, setMarks] = useState<Mark[]>(defaultMarks);

  // useEffect(() => {
  //   setMarks(defaultMarks); // Update marks whenever defaultMarks change
  // }, [defaultMarks]);

  return (
    <>
      {/* <div>BeatFormsList</div>

      TODO: Fix extra box
      <button onClick={() => setAllowExtra(true)}>Add extra box</button>

      {marks.map((mark: Mark, index: number) => (
        <div key={index}>
          {index === position && (
            <>
              {allowExtra && (
                <BeatForm
                  mark={{
                    id: defaultMarks.length,
                    time: mark.time,
                    locationX: "",
                    locationY: "",
                    hit: ""
                  }}
                  setMarks={setMarks}
                  marks={marks}
                />
              )}

              <BeatForm mark={mark} setMarks={setMarks} marks={marks} />

              <button
                disabled={index < 1}
                onClick={() => {
                  setPosition(index - 1);
                  setSelectedMark(index - 1);
                }}
              >
                prev
              </button>

              <span>
                {index + 1}/{defaultMarks.length}
              </span>

              <button
                disabled={index == defaultMarks.length - 1}
                onClick={() => {
                  setPosition(index + 1);
                  setSelectedMark(index + 1);
                }}
              >
                next
              </button>
            </>
          )}
        </div>
      ))} */}
    </>
  );
};
