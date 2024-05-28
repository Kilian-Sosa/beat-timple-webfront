import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./BeatForm.scss";

// interface BeatFormProps {
//   mark: Mark;
//   setMarks: React.Dispatch<React.SetStateAction<Mark[]>>;
//   marks: Mark[];
// }

export const BeatForm: React.FC<any> = ({ mark, setMarks, marks }) => {
  const [formValues, handleInputChange] = useForm(mark);

  useEffect(() => {
    const existingIndex = marks.findIndex(
      (item: any) => item.id === formValues.id
    );
    if (existingIndex === -1) {
      setMarks([...marks, formValues]);
      return;
    }
    const updatedMarks = [...marks];
    updatedMarks[existingIndex] = formValues;
    setMarks(updatedMarks);
    // console.log(marks);
  }, [formValues]);

  return (
    <section className="form-cont">
      <div className="form-row">
        <label htmlFor="time">Beat Time</label>
        <input
          type="text"
          name="time"
          value={formValues.time}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <span>Side of the Platform</span>
        <div className="form-options">
          <label htmlFor="LeftLocX">Left</label>
          <input
            type="radio"
            id="LeftLocX"
            name="locationX"
            value="Left"
            checked={formValues.locationX === "Left"}
            onChange={handleInputChange}
          />
          <label htmlFor="CenterLocX">Middle</label>
          <input
            type="radio"
            id="CenterLocX"
            name="locationX"
            value="Center"
            checked={formValues.locationX === "Middle"}
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
        </div>
      </div>
      <div className="form-row">
        <span>Vertical Position</span>
        <div className="form-options">
          <label htmlFor="TopLocY">Top</label>
          <input
            type="radio"
            id="TopLocY"
            name="locationY"
            value="Top"
            checked={formValues.locationY === "Top"}
            onChange={handleInputChange}
          />
          <label htmlFor="DownLocY">Bottom</label>
          <input
            type="radio"
            id="DownLocY"
            name="locationY"
            value="Bottom"
            checked={formValues.locationY === "Bottom"}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-row">
        <span>Hit Side</span>
        <div className="form-options">
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
        </div>
      </div>
    </section>
  );
};
