import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/imfaisall" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohamed-faisal-340977170/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mohamed Faisal</h1>
          <p>Web Developer & UI/UX Designer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/imfaisall" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohamed-faisal-340977170/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;