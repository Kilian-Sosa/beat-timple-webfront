import './Introduction.scss'
import "animate.css/animate.compat.css"
//@ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
export const Introduction = () => {
  const boxSquare: string = './assets/images/icons/boxSquare.svg'
  const boxCircle: string = './assets/images/icons/boxCircle.svg'

  return (
    <>
      <div className="introduction-cont">
        <div className="introduction-content">
          <h1>DISCOVER A NEW MUSIC GAME</h1>

          <div className='text-container'>
            <div className='text'>
              <p>Dive into a unique virtual reality experience with Fleje Beats! This game combines a Kawaii aesthetic with neon colors, offering a visually charming and fun experience where you master the rhythm and slice through boxes with precision.</p>
            
           
            </div>
            <div className="img-cont">
              <ScrollAnimation animateIn='slideInDown'>
                <img src={boxCircle} alt="" />
              </ScrollAnimation>
              <ScrollAnimation animateIn='slideInDown' delay={100}>
                <img className='img-square' src={boxSquare} alt="" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
