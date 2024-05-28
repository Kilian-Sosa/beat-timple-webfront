import './About.scss'
import "animate.css/animate.compat.css"
//@ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {
    const Pedro: string = './assets/images/icons/pedro.svg'
    const Amos: string = './assets/images/icons/amos.svg'
    const Kilian: string = './assets/images/icons/kilian.svg'
    const Abi: string = './assets/images/icons/abi.svg'
    const Isaac: string = './assets/images/icons/isaac.svg'
    const linkedin: string = './assets/images/icons/rrss/linkedin.svg'
    const github: string = './assets/images/icons/rrss/github.svg'

    return (
        <>
            <div className="about-cont">
                <div className="about-content">
                    <h1>MEET THE TEAM</h1>
                    <div className='team-member'>
                        <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Pedro} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="member-text">
                            <h2>Pedro</h2>
                            <p>I'm the clown of the team. I'm a developer who has studied both Java and C#
                                I also like to shout out guturals <s>and totally not to make people's ears bleed.</s>
                            </p>
                            <div className="ssmm-cont">

                                <a target='_blank' href="https://github.com/SrPeuva">
                                    <img src={github} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='team-member '>
                    <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Amos} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="member-text">
                            <h2>Amos</h2>
                            <p>I'm a software developer that has knowledge in C#. I have a great quote that says "if you hit a brick wall just ask ChatGPT for help".
                               
                            </p>

                            <div className="ssmm-cont">
                                <a target='_blank' href="https://www.linkedin.com/in/amos-ingman-135693250">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                                <a target='_blank' href="https://github.com/amos0000">
                                    <img src={github} alt="github" />
                                </a>
                            </div>
                        </div>
                       
                    </div>
                    <div className='team-member'>
                        <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Kilian} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="member-text">
                            <h2>Kilian</h2>
                            <p>Full Stack Developer and Game Designer. Team Leader. The team's party pooper.</p>
                            <div className="ssmm-cont">
                                <a target='_blank' href="https://www.linkedin.com/in/kilian-sosa-guillén/?locale=en_US">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                                <a target='_blank' href="https://github.com/Kilian-Sosa">
                                    <img src={github} alt="github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='team-member '>
                    <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Abi} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="member-text">
                            <h2>Abi</h2>
                            <p>Software Developer with an artistic background. I discovered that developing video games allows me to merge my two passions: programming and art.</p>
                            <div className="ssmm-cont">
                                <a target='_blank' href="https://es.linkedin.com/in/abigail-ojeda">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                                <a target='_blank' href="https://github.com/abigailojeda">
                                    <img src={github} alt="github" />
                                </a>
                            </div>
                        </div>
                       
                    </div>
                    <div className='team-member '>
                    <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Isaac} alt="" />
                            </ScrollAnimation>
                        </div>
                        <div className="member-text">
                            <h2>Isaac</h2>
                            <p>Studies composition at the Conservatorio Superior de Música de Canarias in Gran Canaria. He has composed music for both short films and video games using different musical styles.</p>
                            <div className="ssmm-cont">
                            </div>
                        </div>
                       
                    </div>


                </div>
            </div>

        </>

    )
}
