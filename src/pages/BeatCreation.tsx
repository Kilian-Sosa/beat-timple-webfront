import { BeatCreationIntro } from "../components/BeatCreation/BeatCreationIntro/BeatCreationIntro";
// import { BeatGenerator } from "../components/BeatCreation/BeatGenerator";
import { useEffect, useState } from "react";
import { BeatGeneratorManual } from "../components/BeatCreation/BeatGeneratorManual/BeatGeneratorManual";
import { BeatGeneratorAutomatic } from "../components/BeatCreation/BeatGeneratorAutomatic/BeatGeneratorAutomatic";
import { BeatGeneratorRandom } from "../components/BeatCreation/BeatGeneratorRandom/BeatGeneratorRandom";
import "../styles/beatCreation.scss";
import { Info } from "../components/Shared/Icons/Info";
import BeatCreationModal from "../components/BeatCreation/BeatCreationModal/BeatCreationModal";

// interface OptionSelected {
//   isAutomatic: boolean;
//   isRandom: boolean;
//   isManual: boolean;
// }

export default function BeatCreation() {
  const [optionSelected, setOptionSelected] = useState({
    isAutomatic: false,
    isRandom: false,
    isManual: false,
  });
  const [infoModalSelected, setInfoModalSelected] = useState({
    isAutomatic: false,
    isRandom: false,
    isManual: false,
  });

  const [infoColor, setInfoColor] = useState("#cec8e2");

  useEffect(() => {
    const element = document.getElementById("generator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id="generator">
      <BeatCreationIntro />
      
      <div className="beat-creation-section manual">
        <div className="beat-creation-content">
          <div className="gif-cont"></div>
          <div className="button-cont">

            <button
              className="button"
              onClick={() =>
                setOptionSelected({
                  isAutomatic: false,
                  isRandom: false,
                  isManual: true,
                })
              }
            >
              <span>MANUALLY</span>
            </button>


            <button
              className="button"
              onClick={() =>
                setOptionSelected({
                  isAutomatic: false,
                  isRandom: false,
                  isManual: false,
                })
              }
            >
              <span>BACK</span>
            </button>

            <div
              onClick={() =>
                setInfoModalSelected({
                  isAutomatic: false,
                  isRandom: false,
                  isManual: true,
                })
              }
              className="icon-text"
            >
              <span>
                <Info color={infoColor} />
              </span>
              <span>More info here</span>
            </div>
          </div>

          {infoModalSelected.isManual && (
            <BeatCreationModal
              optionSelected="manual"
              setInfoModalSelected={setInfoModalSelected}
            />
          )}
        </div>

        {optionSelected.isManual
          &&
          <BeatGeneratorManual setOptionSelected={setOptionSelected} />}
      </div>
    </div>
  );
}
