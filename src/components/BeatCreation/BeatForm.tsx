import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Mark from "../../interfaces/Mark";

// interface BeatFormProps {
//   mark: Mark;
//   setMarks: React.Dispatch<React.SetStateAction<Mark[]>>;
//   marks: Mark[];
// }

export const BeatForm: React.FC<any> = ({
  mark,
  setMarks,
  marks
}) => {
  const [formValues, handleInputChange, reset] = useForm(mark);

  // useEffect(() => {
  //   const existingIndex = marks.findIndex((item) => item.id === formValues.id);
  //   if (existingIndex === -1) {
  //     setMarks([...marks, formValues]);
  //     return;
  //   }
  //   const updatedMarks = [...marks];
  //   updatedMarks[existingIndex] = formValues;
  //   setMarks(updatedMarks);
  //   console.log(marks);
  // }, [formValues]);

  return (
    <>
      {/* <input
        type="text"
        name="test"
        value={formValues.test}
        onChange={handleInputChange}
      />

      <span>Side of the Platform</span>
      <label htmlFor="LeftLocX">Left</label>
      <input
        type="radio"
        id="LeftLocX"
        name="locationX"
        value="Left"
        checked={formValues.locationX === "Left"}
        onChange={handleInputChange}
      />
      <label htmlFor="CenterLocX">Center</label>
      <input
        type="radio"
        id="CenterLocX"
        name="locationX"
        value="Center"
        checked={formValues.locationX === "Center"}
        onChange={handleInputChange}
      />
      <label htmlFor="RightLocX">Right</label>
      <input
        type="radio"
        id="RightLocX"
        name="locationX"
        value="Right"
        checked={formValues.locationX === "Right"}
        onChange={handleInputChange}
      />
      <hr />

      <span>Vertical Position</span>
      <label htmlFor="TopLocY">Top</label>
      <input
        type="radio"
        id="TopLocY"
        name="locationY"
        value="Top"
        checked={formValues.locationY === "Top"}
        onChange={handleInputChange}
      />
      <label htmlFor="DownLocY">Down</label>
      <input
        type="radio"
        id="DownLocY"
        name="locationY"
        value="Down"
        checked={formValues.locationY === "Down"}
        onChange={handleInputChange}
      />
      <hr />

      <span>Hit Side</span>
      <label htmlFor="LeftHit">Left</label>
      <input
        type="radio"
        id="LeftHit"
        name="hit"
        value="Left"
        checked={formValues.hit === "Left"}
        onChange={handleInputChange}
      />
      <label htmlFor="RightHit">Right</label>
      <input
        type="radio"
        id="RightHit"
        name="hit"
        value="Right"
        checked={formValues.hit === "Right"}
        onChange={handleInputChange}
      />
      <label htmlFor="TopHit">Top</label>
      <input
        type="radio"
        id="TopHit"
        name="hit"
        value="Top"
        checked={formValues.hit === "Top"}
        onChange={handleInputChange}
      />
      <label htmlFor="BottomHit">Bottom</label>
      <input
        type="radio"
        id="BottomHit"
        name="hit"
        value="Bottom"
        checked={formValues.hit === "Bottom"}
        onChange={handleInputChange}
      />

      <button onClick={reset}>×</button> */}

      <h1>pepe</h1>
    </>
  );
};
