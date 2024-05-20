import "animate.css/animate.compat.css"
import './MoreInfo.scss'
//@ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
export const MoreInfo = () => {

    const flyHead: string = './assets/images/icons/flyHead.svg'
    const rightWing: string = './assets/images/icons/wingRight.svg'
    const leftWing: string = './assets/images/icons/wingLeft.svg'


    return (
        <>
            <div className="info-cont">
                <div className="info-content">
                    <h1>DISCOVER A NEW MUSIC GAME</h1>

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis doloribus dicta molestiae aspernatur iusto, incidunt veniam odit beatae? Ex repellat quae ipsam sed eius nesciunt quo repellendus nostrum eaque?</p>
                    </div>
                </div>
            </div>
        </>
    )
}
