import { BeatCreationIntro } from "../components/BeatCreation/BeatCreationIntro/BeatCreationIntro";
import { BeatGenerator } from "../components/BeatCreation/BeatGenerator";
import { useEffect, useState } from "react";
import { BeatGeneratorManual } from "../components/BeatCreation/BeatGeneratorManual/BeatGeneratorManual";
import { BeatGeneratorAutomatic } from "../components/BeatCreation/BeatGeneratorAutomatic/BeatGeneratorAutomatic";
import { BeatGeneratorRandom } from "../components/BeatCreation/BeatGeneratorRandom/BeatGeneratorRandom";
import "../styles/BeatCreation.scss";
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

      {!optionSelected.isAutomatic && !optionSelected.isRandom && (
        <div className="beat-creation-section manual">
          <div className="beat-creation-content">
            {!optionSelected.isManual &&
              !optionSelected.isRandom &&
              !optionSelected.isAutomatic && <div className="gif-cont"></div>}
            <div className="button-cont">
              {!optionSelected.isManual &&
                !optionSelected.isRandom &&
                !optionSelected.isAutomatic && (
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
                )}
              {optionSelected.isManual && (
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
              )}
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

          {optionSelected.isManual && <BeatGeneratorManual />}
        </div>
      )}

      {!optionSelected.isManual && !optionSelected.isRandom && (
        <div className="beat-creation-section automatic">
          <div className="beat-creation-content">
            <div className="button-cont">
              {!optionSelected.isManual &&
                !optionSelected.isRandom &&
                !optionSelected.isAutomatic && (
                  <button
                    className="button"
                    onClick={() =>
                      setOptionSelected({
                        isAutomatic: true,
                        isRandom: false,
                        isManual: false,
                      })
                    }
                  >
                    <span>AUTOMATICALLY</span>
                  </button>
                )}
              {optionSelected.isAutomatic && (
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
              )}
              <div
                onClick={() =>
                  setInfoModalSelected({
                    isAutomatic: true,
                    isRandom: false,
                    isManual: false,
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

            {!optionSelected.isManual &&
              !optionSelected.isRandom &&
              !optionSelected.isAutomatic && <div className="gif-cont"></div>}
            {infoModalSelected.isAutomatic && (
              <BeatCreationModal
                optionSelected="automatic"
                setInfoModalSelected={setInfoModalSelected}
              />
            )}
          </div>
          {optionSelected.isAutomatic && <BeatGeneratorAutomatic />}
        </div>
      )}

      {!optionSelected.isAutomatic && !optionSelected.isManual && (
        <div className="beat-creation-section random">
          <div className="beat-creation-content">
            {!optionSelected.isManual &&
              !optionSelected.isRandom &&
              !optionSelected.isAutomatic && <div className="gif-cont"></div>}

            <div className="button-cont">
              {!optionSelected.isManual &&
                !optionSelected.isRandom &&
                !optionSelected.isAutomatic && (
                  <button
                    className="button"
                    onClick={() =>
                      setOptionSelected({
                        isAutomatic: false,
                        isRandom: true,
                        isManual: false,
                      })
                    }
                  >
                    <span>RANDOMLY</span>
                  </button>
                )}
              {optionSelected.isRandom && (
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
              )}
              <div
                onClick={() =>
                  setInfoModalSelected({
                    isAutomatic: false,
                    isRandom: true,
                    isManual: false,
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

            {infoModalSelected.isRandom && (
              <BeatCreationModal
                optionSelected="random"
                setInfoModalSelected={setInfoModalSelected}
              />
            )}
          </div>

          {optionSelected.isRandom && <BeatGeneratorRandom />}
          {/* <BeatGenerator/> */}
        </div>
      )}
    </div>
  );
}
