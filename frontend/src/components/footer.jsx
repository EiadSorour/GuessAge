import React from "react";

function Footer(){
    return (
        <footer>
            <div className="copyright">© Copyright, Eiad Sorour {new Date().getFullYear()}</div>
            <div className="seperate-line" ></div>
            <div className="facebook">
                <i className="fa-brands fa-facebook" style={ {"color": "#0A66C2"}}></i>
                <a href="https://www.facebook.com/eiad.sorour" target="_blank">Facebook</a>
            </div>
            <div className="linked-in">
                <i className="fa-brands fa-linkedin" style={ {"color": "#0A66C2"}}></i>
                <a href="https:/www.linkedin.com/in/eiad-sorour-3244a3257" target="_blank">LinkedIn</a>
            </div>
        </footer>
    )
}

export default Footer;