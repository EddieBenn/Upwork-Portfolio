import { Container, Row, Col } from 'react-bootstrap';
import './Testimonies.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from '../../assets/images/color-sharp.png';

const Testimonies = () => {
    const testimonies = [
        {
            title: "Bond Akinmade (Engineering Manager - Decagon Institute)",
            description: "Edidiong is simply the most intriguing and inspiring professional to work with. He is very intelligent and can be relied upon when it comes to executing any task he is responsible for. I have worked closely with Edidiong on a couple of projects for over a year now and he is a rare blend of professionalism, leadership, dynamism, poise, and efficiency which he employs in everything he does. What amazes me about Edi is his creativity, he is always looking out for ways to improve projects and this makes him an asset to any team.",
        },
        {
            title: "Daniel Akams (Product Manager - MAX)",
            description: "Edidiong is a diligent and committed software engineer who consistently ensures that tasks are completed efficiently and effectively. His results-driven approach makes him an invaluable asset to any team. One of Edidiong's most impressive qualities is his unwavering commitment to continuous learning. Whether through research, taking courses, or staying updated on the latest tech trends, he always seeks to expand his knowledge and skills. This dedication sets him apart from other software engineers. When assigned a task, Edidiong not only delivers high-quality results but also often completes them ahead of schedule. His reliability and expertise make him highly recommended for any institution or organization seeking a top-tier software engineer.",
        },
        {
            title: "Raphael Okeibunor (Software Engineer)",
            description: "Edidiong is a diligent and hardworking leader who sets his mind to do a thing and gets it done. He is always willing to learn and never gives up on problems. I worked with Edi on the on-ramp project and his tenacity for success is second to none. He is a proactive, self-motivated, consistent and astute teammate. I really enjoyed working with Edi as he is an exceptional problem solver. Edidiong is an invaluable asset to any organisation he choses to be aligned with and he earns my highest recommendation.",
        },
        {
            title: "Caleb Oneyemi (Senior Software Engineer)",
            description: "Edidiong is someone that knows how to lead and really work well with people. In the times we worked on projects together, He showed His resourcefulness, He has a knack for learning new concepts in short amounts of time and has the ability to swiftly resolve bottlenecks. He is without a doubt an example of what 10x talent looks like and any team would be lucky to have him.",
        },
        {
            title: "Ebenezer Ifezulike (Senior Frontend Engineer)",
            description: "There is no better colleague than Edidiong. He is one of the most dedicated professionals I've worked with and is willing to put that extra help whenever you need it. His expertise as a project lead has helped the company come up with more efficient solutions on different projects. His contribution is valuable to the team, and I highly recommend Edidiong. I would love to work with him again. He ensures every one is on the same page of understanding what is meant to be done. He is a good and dedicated lead you will love to have in your team.",
        },
        {
            title: "Mercy Ajiboye (Program and Operations Manager)",
            description: "Edidiong is a focused and result oriented professional who always gets the job done in the most efficient way. He is an excellent communicator and very skilled at building positive relationships with people. Edi is an innovative and determined team player. He has great listening skills and always comes up with amazing ideas. I highly recommend Edidiong and I am confident that his traits and abilities would make him a great asset to any team.",
        },
    ];

    return (
        <section className='testimonies' id='testimonies'>
            <Container>
                <Row>
                    <Col>
                        <div className='testimonies-bx'>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ""}>
                                        <h2>Testimonies</h2>
                                        <Row>
                                            {testimonies.map((testimony, index) => (
                                                <Col md={6} key={index} className='mb-4'>
                                                    <div className='testimony-card'>
                                                        <h4>{testimony.title}</h4>
                                                        <p>{testimony.description}</p>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                }
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt='color-sharp' className='background-image-left' />
        </section>
    );
};

export default Testimonies;
