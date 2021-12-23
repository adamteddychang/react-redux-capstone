import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs';
import './about.css'

const About = () => {
  return(
    <section className="about-page">
  <div>
    <h3>This index is constructed by,<br></br> a developer who loves games</h3>
  </div>
  <div className="about">
    <h1>Hi, I am Adam.</h1>
    <div className="Links">
    <a className='github_link' target="_blank" href="https://github.com/adamteddychang"><BsGithub /></a>
    <a className='github_link' target="_blank" href="https://www.linkedin.com/in/adamteddychang/"><BsLinkedin /></a>
    <a className='github_link' target="_blank" href="https://twitter.com/AdamChang3"><BsTwitter /></a>
  </div>
  <p>Up there, those are my socials. Check them out!</p>
  <p className="Italic">This project was built within the week as a <strong>React-Redux Project</strong>.</p>
  <p>You can find the repository on GitHub, give it a star if you like it!</p>

  </div>

  
  </section>
  )
};

export default About;