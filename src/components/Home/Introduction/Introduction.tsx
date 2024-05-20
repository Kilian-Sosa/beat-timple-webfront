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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis doloribus dicta molestiae aspernatur iusto, incidunt veniam odit beatae? Ex repellat quae ipsam sed eius nesciunt quo repellendus nostrum eaque?</p>
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
