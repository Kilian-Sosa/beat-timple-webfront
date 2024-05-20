
import { BeatCreationIntro } from "../components/BeatCreation/BeatCreationIntro/BeatCreationIntro";
import { BeatGenerator } from "../components/BeatCreation/BeatGenerator";
import { useEffect, useState } from "react";
import { BeatGeneratorManual } from "../components/BeatCreation/BeatGeneratorManual/BeatGeneratorManual";
import { BeatGeneratorAutomatic } from "../components/BeatCreation/BeatGeneratorAutomatic/BeatGeneratorAutomatic";
import { BeatGeneratorRandom } from "../components/BeatCreation/BeatGeneratorRandom/BeatGeneratorRandom";
import '../styles/beatCreation.scss'
import { Info } from "../components/Shared/Icons/Info";
import { BeatCreationModal } from "../components/BeatCreation/BeatCreationModal/BeatCreationModal";

interface OptionSelected {
  isAutomatic: boolean;
  isRandom: boolean;
  isManual: boolean;
}

export default function BeatCreation() {

  const [optionSelected, setOptionSelected] = useState({
    isAutomatic: false,
    isRandom: false,
    isManual: false
  })
  const [infoModalSelected, setInfoModalSelected] = useState({
    isAutomatic: false,
    isRandom: false,
    isManual: false
  })

  const [infoColor, setInfoColor] = useState("#cec8e2")

  useEffect(() => {

    const element = document.getElementById("generator");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }, []);

  return (
    <div id="generator">
      <BeatCreationIntro />

      <div className="beat-creation-section manual">

        <div className="beat-creation-content">
          <div className="gif-cont"></div>
          <div className="button-cont">
            <button onClick={() => setOptionSelected({ isAutomatic: false, isRandom: false, isManual: true })}>
              <span>MANUALLY</span>
            </button>
            <div onClick={() => setInfoModalSelected({ isAutomatic: false, isRandom: false, isManual: true })} className="icon-text">
              <span><Info color={infoColor} /></span><span>More info here</span>
            </div>
          </div>


          {infoModalSelected.isAutomatic && <BeatCreationModal optionSelected="automatic" setInfoModalSelected={setInfoModalSelected} />}
        </div>

        {
          optionSelected.isAutomatic &&
          <BeatGeneratorAutomatic />
        }
      </div>

      <div className="beat-creation-section automatic">

        <div className="beat-creation-content">

          <div className="button-cont">
            <button onClick={() => setOptionSelected({ isAutomatic: true, isRandom: false, isManual: false })}>
              <span>AUTOMATICALLY</span>
            </button>
            <div onClick={() => setInfoModalSelected({ isAutomatic: true, isRandom: false, isManual: false })} className="icon-text">
              <span><Info color={infoColor} /></span><span>More info here</span>
            </div>
          </div>

          <div className="gif-cont"></div>
          {infoModalSelected.isAutomatic && <BeatCreationModal optionSelected="automatic" setInfoModalSelected={setInfoModalSelected} />}
        </div>

        {
          optionSelected.isAutomatic &&
          <BeatGeneratorAutomatic />
        }
      </div>

      <div className="beat-creation-section random">

        <div className="beat-creation-content">
          <div className="gif-cont"></div>

          <div className="button-cont">
            <button onClick={() => setOptionSelected({ isAutomatic: false, isRandom: true, isManual: false })}>
              <span>RANDOMLY</span>
            </button>
            <div onClick={() => setInfoModalSelected({ isAutomatic: false, isRandom: true, isManual: false })} className="icon-text">
              <span><Info color={infoColor} /></span><span>More info here</span>
            </div>
          </div>

          {infoModalSelected.isAutomatic && <BeatCreationModal optionSelected="automatic" setInfoModalSelected={setInfoModalSelected} />}
        </div>

        {
          optionSelected.isAutomatic &&
          <BeatGeneratorAutomatic />
        }
        {
          optionSelected.isRandom &&
          <BeatGeneratorRandom />
        }
        {/* <BeatGenerator/> */}
      </div>

    </div>
  );
}
