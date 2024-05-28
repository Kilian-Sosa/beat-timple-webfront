import { useEffect } from "react";
import "./BeatFormList.scss";
import Mark from "../../interfaces/Mark";
import { BeatForm } from "./BeatForm";

export const BeatFormsList = ({
  defaultMarks,
  setMarks,
  setSelectedMark,
}: {
  defaultMarks: Mark[];
  setMarks: any;
  setSelectedMark: (value: number) => void;
}) => {
  useEffect(() => {
    setMarks(defaultMarks.sort((a, b) => a.time - b.time));
  }, [defaultMarks.length]);

  const showForm = (index: number) => {
    setMarks((prev: Mark[]) => {
      const copy = [...prev];
      copy.forEach((mark, i) => {
        mark.formVisible = i === index ? !mark.formVisible : false;
      });
      return copy;
    });
    setSelectedMark(index);
  };

  return (
    <>
      <div className="beat-form-cont">
        {defaultMarks.map((mark: Mark, index: number) => (
          <div key={index}>
            <button
              onClick={() => {
                showForm(index);
              }}
            >
              {!mark.formVisible ? `Show ${mark.time}` : "Hide " + mark.time}
            </button>
            {mark.formVisible && (
              <>
                <button
                  onClick={() => {
                    setMarks((prev: Mark[]) => {
                      const copy = [...prev];
                      copy.push({
                        id: defaultMarks.length,
                        time: mark.time,
                        locationX: "",
                        locationY: "",
                        hit: "",
                        formVisible: true,
                      });
                      return copy;
                    });
                    showForm(defaultMarks.length);
                    //TODO: disable the button
                  }}
                >
                  Add extra box
                </button>
                <BeatForm
                  mark={mark}
                  setMarks={setMarks}
                  marks={defaultMarks}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
