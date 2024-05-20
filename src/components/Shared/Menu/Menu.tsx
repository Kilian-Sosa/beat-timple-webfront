import { NavLink } from "react-router-dom"
import './Menu.scss'

export const Menu = () => {
  return (
    <section className="menu-cont">
        <div className="menu-left">
            <NavLink to=''>
                <p>Home</p>
            </NavLink>
        </div>
        <div className="menu-right">
            <NavLink to="faqs">
                <p>FAQs</p>
            </NavLink>
            <NavLink to="beat-creation">
                <p>Beat Creation</p>
            </NavLink>

        </div>
    </section>
  )
}
