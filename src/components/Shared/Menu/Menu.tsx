import { NavLink } from "react-router-dom"
import './Menu.scss'
const icon = './assets/images/icons/icon.png'

export const Menu = () => {
  return (
    <section className="menu-cont">
        <div className="menu-left">
            <NavLink to=''>
                <img className="icon" src={icon} alt="" />
            </NavLink>
        </div>
        <div className="menu-right">
            <NavLink to="faqs">
                <p>FAQs</p>
            </NavLink>
            <NavLink to="beat-generation">
                <p>Beat Generation</p>
            </NavLink>

        </div>
    </section>
  )
}
