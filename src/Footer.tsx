import React from 'react'
import Logo from "./Logo";
import "./index.css";


export default function Footer() {
    const instagramLink = "https://www.instagram.com/acmpfw/";
    const githubLink = "https://github.com/Purdue-Fort-Wayne-ACM";
    const youtubeLink = "https://www.youtube.com/@PFWComputingSociety";

    // Explain PFW ACM owns site, isn't responsible for its content, give report email and point to poolicy
    return (
    <div className="internal-footerWrapper">
        <footer>
            <div className="internal-footer">
                <div className="internal-footerFlexItem">
                    <h4> </h4>
                    <Logo height={90} width={90} className='logo'/>
                    <div className="social-media-bar">
                            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                <img height="20" src="https://cdn.simpleicons.org/instagram/ffffff?viewbox=auto" />
                            </a>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <img height="20" src="https://cdn.simpleicons.org/github/ffffff?viewbox=auto" />
                            </a>
                            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                                <img height="20" src="https://cdn.simpleicons.org/youtube/ffffff?viewbox=auto" />
                            </a>
                        </div>
                </div>
                <div className="internal-footerFlexItem">
                    <h4>Resources</h4>
                    <a>About Us</a>
                    <a>Officers</a>
                    <a>Github & Contribution</a>
                    
                </div> 
                <div className="internal-footerFlexItem">
                    <h4>Partners</h4>
                    <a>OUTspoken</a>
                    <a>Generation Action</a>
                </div> 
                <div className="internal-footerFlexItem">
                    <h4>Policies</h4>
                    <a>Test Links</a>
                </div> 

                <div className="internal-footerFlexItem">
                    <h4>PFW Websites</h4>
                    <a>Department of Comp. Sci</a>
                </div>    
            </div>

            <div className="internal-disclaimer">This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne, but are sanctioned by a student organization within it. If there are concerns regarding content or accessibility please contact acm@pfw.edu. </div>
             
        </footer>
    </div>
    );
}