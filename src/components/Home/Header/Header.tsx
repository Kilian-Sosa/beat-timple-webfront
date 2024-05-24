import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  const logo: string = './assets/images/icons/logoNeonPink.svg'
  return (
    <div className='header-cont'>

      <div className="header-content">

        <img src={logo} alt="" />
        <h1>IMMERSE IN VR RHYTHM</h1>
        <h3> Create, Smash, Repeat!</h3>

        <div className="buttons-cont">
          <button className="btn">
            <span>download PC demo</span>
          </button>

          <NavLink to={'beat-generation'}>
            <button className='btn purple'>
              <span>GENERATE MUSIC</span>
            </button>
          </NavLink>
        </div>
      </div>

    </div>
  )
}
