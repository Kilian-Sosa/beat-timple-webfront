import { NavLink } from 'react-router-dom'
import './BeatGeneratorCta.scss'

export const BeatGeneratorCta = () => {
  return (
    <>
      <div className="generator-cta-cont">
        <div className="generator-cta-content">
          <h1>DISCOVER A NEW MUSIC GAME</h1>

          <div className='text-container'>
          <p>Now you can choose to generate your song for the game manually, randomly or using our integrated AI with midi files</p>
            <div className="img-cont">

              <NavLink to={'beat-creation'}>
                <button>
                  <span>DISCOVER MORE</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
