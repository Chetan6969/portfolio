import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello! I'm Chetan Sen, a passionate developer with a keen interest in DevOps, Web3, and full-stack development. I have participated in multiple hackathons, where I built innovative projects like a decentralized Chess platform, a gamified waste management app, and a centralized news platform (NewQuill).
                            
                        Beyond hackathons, I have also contributed to research, with papers on enhancing solar energy productivity and secure private key management in Web3 (SuperKey). My journey has taken me through international conferences, 3D animation, and software development, shaping me into a well-rounded engineer eager to take on new challenges.
                            
                        Technologies I’ve Been Working With Recently:
                        DevOps & Cloud: Linux, Docker, Kubernetes, CI/CD
                        Web Development: JavaScript, TypeScript, React, Node.js, MERN Stack
                        Blockchain & Web3: Solidity, Ethereum, Smart Contracts
                        Database: PostgreSQL, MongoDB, Firebase
                        Other Tools: Twilio, Cloudinary, JWT Authentication
                        Other Tools: Twilio, Cloudinary, JWT Authentication
                        Always excited to build, learn, and collaborate on impactful projects! 🚀
                        Always excited to build, learn, and collaborate on impactful projects! 🚀
                            
                        Would you like to tweak it further to match your vision? 😊
                        </p>
                        <ul className="about__list">
                            <li>JavaScript </li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongodB</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Ansible</li>
                            <li>Terraform</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>See Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About