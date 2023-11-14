import React from "react";

function Header(props){

    const currentPage = window.location.pathname;
    const isHomePage = currentPage === "/home" || currentPage === "/" ? true : false ;

    return (
        <div className="nav-bar">
            <div className="title">GUESS AGE</div>
            <div className="buttons">
                <a className="home-btn" href={props.FRONT_URL + "home"} style={ isHomePage? {textDecoration: "underLine"} : null } >Home</a>
                <a className="about-btn" href={props.FRONT_URL + "about"} style={ !isHomePage? {textDecoration: "underLine"} : null }>About</a>
            </div>
        </div>
    )
}

export default Header;