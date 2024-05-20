import './BeatCreationModal.scss';

export const BeatCreationModal = ({optionSelected, setInfoModalSelected}: {optionSelected: string,setInfoModalSelected:any}) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span
                onClick={() => setInfoModalSelected({
                    isAutomatic: false,
                    isRandom: false,
                    isManual: false
                
                })}
                className="close">&times;</span>
                {
                    optionSelected === "manual" &&
                    <h1>MANUALLY</h1>
                }
                {
                    optionSelected === "automatic" &&
                    <h1>AUTOMATICALLY</h1>
                }
                {
                    optionSelected === "random" &&
                    <h1>RANDOMLY</h1>
                }
            </div>
        </div>
    )
}
