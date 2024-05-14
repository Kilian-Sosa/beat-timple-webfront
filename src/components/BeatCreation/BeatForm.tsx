import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Mark from "../../interfaces/Mark";

interface BeatFormProps {
  mark: Mark;
  setMarks: React.Dispatch<React.SetStateAction<Mark[]>>;
  marks: Mark[];
}

export const BeatForm: React.FC<BeatFormProps> = ({
  mark,
  setMarks,
  marks
}) => {
  const [formValues, handleInputChange, reset] = useForm(mark);

  useEffect(() => {
    const existingIndex = marks.findIndex((item) => item.id === formValues.id);
    if (existingIndex === -1) {
      setMarks([...marks, formValues]);
      return;
    }
    const updatedMarks = [...marks];
    updatedMarks[existingIndex] = formValues;
    setMarks(updatedMarks);
    console.log(marks);
  }, [formValues]);

  return (
    <>
      <input
        type="text"
        name="test"
        value={formValues.test}
        onChange={handleInputChange}
      />
      <label htmlFor="Left">Left</label>
      <input
        type="radio"
        id="Left"
        name="locationX"
        value="Left"
        checked={formValues.locationX === "Left"}
        onChange={handleInputChange}
      />
      <label htmlFor="Center">Center</label>
      <input
        type="radio"
        id="Center"
        name="locationX"
        value="Center"
        checked={formValues.locationX === "Center"}
        onChange={handleInputChange}
      />
      <label htmlFor="Right">Right</label>
      <input
        type="radio"
        id="Right"
        name="locationX"
        value="Right"
        checked={formValues.locationX === "Right"}
        onChange={handleInputChange}
      />
      <hr />
      <label htmlFor="Top">Top</label>
      <input
        type="radio"
        id="Top"
        name="locationY"
        value="Top"
        checked={formValues.locationY === "Top"}
        onChange={handleInputChange}
      />
      <label htmlFor="Down">Down</label>
      <input
        type="radio"
        id="Down"
        name="locationY"
        value="Down"
        checked={formValues.locationY === "Down"}
        onChange={handleInputChange}
      />

      <button onClick={reset}>×</button>
    </>
  );
};
