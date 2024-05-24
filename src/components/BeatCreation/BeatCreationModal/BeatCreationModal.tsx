import './BeatCreationModal.scss';

interface BeatCreationModalProps {
  optionSelected: string;
  setInfoModalSelected: (options: { isAutomatic: boolean; isRandom: boolean; isManual: boolean; }) => void;
}

const BeatCreationModal: React.FC<BeatCreationModalProps> = ({ optionSelected, setInfoModalSelected }) => {
  const renderContent = () => {
    switch (optionSelected) {
      case 'manual':
        return <h2>Manual content goes here...</h2>;
      case 'automatic':
        return (
          <>
            <div className="text-cont">
              <h2>COMING SOON</h2>
              <p style={{ marginBottom: "20px" }}>
                This feature is currently under development. Stay tuned for future updates!
              </p>
              <h2>Explanation</h2>
              <p>
                This feature allows you to upload the midi file of a song and our AI
                will generate the beatmap for you, saving you time and effort.
                Unlike the random generation, our AI will analyze the song and predict
                the best beatmap for it. After the generation, you will be able to customize the beatmap generated.
              </p>
            </div>
          </>
        );
      case 'random':
        return (
          <>
            <div className="text-cont">
              <h2>Random content goes here...</h2>
            </div>
          </>
        )

      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (optionSelected) {
      case 'manual':
        return 'MANUALLY';
      case 'automatic':
        return 'AUTOMATICALLY';
      case 'random':
        return 'RANDOMLY';
      default:
        return '';
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{getTitle()}</h1>
          <span
            onClick={() => setInfoModalSelected({
              isAutomatic: false,
              isRandom: false,
              isManual: false
            })}
            className="close"
          >
            &times;
          </span>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default BeatCreationModal;
