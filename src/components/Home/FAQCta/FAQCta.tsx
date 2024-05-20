import { NavLink } from 'react-router-dom'
import './FAQCta.scss'

export const FAQCta = () => {
  return (
    <>
      <div className="faq-cta-cont">
        <div className="faq-cta-content">
          <h1>HAVE YOU ANY QUESTION?</h1>

          <div className='text-container'>
            <div className="img-cont">
              <NavLink to={'documentation'}>
                <button>
                  <span>FAQs</span>
                </button>
              </NavLink>

            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis doloribus dicta molestiae aspernatur iusto, incidunt veniam odit beatae? Ex repellat quae ipsam sed eius nesciunt quo repellendus nostrum eaque?</p>
          </div>
        </div>
      </div>

    </>
  )
}
