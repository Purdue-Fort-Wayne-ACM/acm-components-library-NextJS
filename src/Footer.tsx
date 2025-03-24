import React from 'react'
import Logo from "./Logo";
import "../styles.css";

export default function Footer() {
    // Explain PFW ACM owns site, isn't responsible for its content, give report email and point to poolicy
    return (
    <div className="internal-footerWrapper">
        <footer>
            <div className="internal-footer">
                <div className="internal-footerFlexItem">
                    <h4> </h4>
                    <Logo height={50}/>
                    {/* TODO: Add social media bar*/}
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

            <div className="internal-disclaimer">This is a PFW-ACM site. The views on this page do not represent the views of Purdue Fort Wayne, but are sanctioned by a student organization within it. If there are concerns please contact acm@pfw.edu. </div>
             
        </footer>
    </div>
    );
}