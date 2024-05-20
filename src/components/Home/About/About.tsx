import './About.scss'
import "animate.css/animate.compat.css"
//@ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

export const About = () => {
    const Pedro: string = './assets/images/icons/pedro.svg'
    const Amos: string = './assets/images/icons/amos.svg'
    const Kilian: string = './assets/images/icons/kilian.svg'
    const Abi: string = './assets/images/icons/abi.svg'

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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis sapiente sed sequi nesciunt ipsum obcaecati minima temporibus hic. Laudantium totam officiis sapiente debitis earum explicabo delectus velit omnis deserunt?
                                Minus similique amet repudiandae corporis culpa nam voluptatem atque ullam assumenda iste ad vel, placeat, provident exercitationem nulla architecto sequi, et nihil fugiat eum! Numquam debitis tempora sed ipsum sint?
                                Nobis modi quae, vero ullam voluptatibus vitae corporis sint adipisci possimus deserunt fugiat praesentium numquam quibusdam repellat dolores, natus officia illo consequuntur iure sequi hic? Voluptatem ut adipisci exercitationem vel.</p>
                        </div>
                    </div>
                    <div className='team-member reverse'>

                        <div className="member-text">
                            <h2>Amos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis sapiente sed sequi nesciunt ipsum obcaecati minima temporibus hic. Laudantium totam officiis sapiente debitis earum explicabo delectus velit omnis deserunt?
                                Minus similique amet repudiandae corporis culpa nam voluptatem atque ullam assumenda iste ad vel, placeat, provident exercitationem nulla architecto sequi, et nihil fugiat eum! Numquam debitis tempora sed ipsum sint?
                                Nobis modi quae, vero ullam voluptatibus vitae corporis sint adipisci possimus deserunt fugiat praesentium numquam quibusdam repellat dolores, natus officia illo consequuntur iure sequi hic? Voluptatem ut adipisci exercitationem vel.</p>
                        </div>
                        <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Amos} alt="" />
                            </ScrollAnimation>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis sapiente sed sequi nesciunt ipsum obcaecati minima temporibus hic. Laudantium totam officiis sapiente debitis earum explicabo delectus velit omnis deserunt?
                                Minus similique amet repudiandae corporis culpa nam voluptatem atque ullam assumenda iste ad vel, placeat, provident exercitationem nulla architecto sequi, et nihil fugiat eum! Numquam debitis tempora sed ipsum sint?
                                Nobis modi quae, vero ullam voluptatibus vitae corporis sint adipisci possimus deserunt fugiat praesentium numquam quibusdam repellat dolores, natus officia illo consequuntur iure sequi hic? Voluptatem ut adipisci exercitationem vel.</p>
                        </div>
                    </div>
                    <div className='team-member reverse'>

                        <div className="member-text">
                            <h2>Abi</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis sapiente sed sequi nesciunt ipsum obcaecati minima temporibus hic. Laudantium totam officiis sapiente debitis earum explicabo delectus velit omnis deserunt?
                                Minus similique amet repudiandae corporis culpa nam voluptatem atque ullam assumenda iste ad vel, placeat, provident exercitationem nulla architecto sequi, et nihil fugiat eum! Numquam debitis tempora sed ipsum sint?
                                Nobis modi quae, vero ullam voluptatibus vitae corporis sint adipisci possimus deserunt fugiat praesentium numquam quibusdam repellat dolores, natus officia illo consequuntur iure sequi hic? Voluptatem ut adipisci exercitationem vel.</p>
                        </div>
                        <div className="img-cont">
                            <ScrollAnimation animateIn='fadeIn'>
                                <img src={Abi} alt="" />
                            </ScrollAnimation>
                        </div>
                    </div>


                </div>
            </div>

        </>

    )
}
