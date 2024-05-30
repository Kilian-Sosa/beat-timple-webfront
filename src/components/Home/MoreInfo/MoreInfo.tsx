
import { NavLink } from 'react-router-dom'
import './MoreInfo.scss'

export const MoreInfo = () => {

    const flyHead: string = './assets/images/icons/flyHead.svg'
    const rightWing: string = './assets/images/icons/wingRight.svg'
    const leftWing: string = './assets/images/icons/wingLeft.svg'


    return (
        <>
            <div className="info-cont">
                <div className="info-content">
                    <h1>ANY QUESTION?</h1>

                    <div className='text-container'>
                        <div className="img-cont">
                            <div className="head">
                                <img src={flyHead} alt="" />
                                <div className="right-wing">
                                    <img src={rightWing} alt="" />
                                </div>

                                <div className="left-wing">
                                    <img src={leftWing} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="right">

                            <p>This is a game that may surprise you, fun and pleasing to the eye, do you want to discover more?</p>
                            <div className="button-cont">
                                <NavLink to={'faqs'}>
                                    <button>
                                        <span>FAQs</span>
                                    </button>
                                </NavLink>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
