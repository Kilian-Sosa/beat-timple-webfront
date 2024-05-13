import { useState } from "react"
import './BeatFormList.scss'


export const BeatFormsList = ({ marks, setSelectedMark }: { marks: number[], setSelectedMark: (value: number) => void }) => {

    const [position, setPosition] = useState<number>(0)

    return (
        <>
            <div>BeatFormsList</div>

            {
                marks.map((mark: number, index: number) => (
                    <div key={index}>
                        {index === position && (
                            <>
                                <div>
                                    <input type="text" id="time" value={mark} onChange={() => console.log('tu puta madre')} />

                                    <label htmlFor="Left">Left</label>
                                    <input type="radio" id="Left" name="locationX" value="Left" />
                                    <label htmlFor="Center">Center</label>
                                    <input type="radio" id="Center" name="locationX" value="Center" />
                                    <label htmlFor="Right">Right</label>
                                    <input type="radio" id="Right" name="locationX" value="Right" />
                                    <button>×</button>
                                </div>
                                {
                                    index > 0 &&
                                    <button onClick={() => { setPosition(index - 1); setSelectedMark(index - 1) }}>prev</button>
                                }

                                {
                                    index < marks.length - 1 &&
                                    <button onClick={() => { setPosition(index + 1); setSelectedMark(index + 1) }}>next</button>

                                }
                            </>
                        )}
                    </div>
                ))
            }


        </>
    )
}
