import { useState } from "react";

const NavBar = () => {
    return (
        <div className="nav">
            <div>
                <a href="/" className="navText">
                    Home
                </a>
            </div>
            <div>
                <a href="/blog" className="navText">
                    Blog
                </a>
            </div>
            <div>
                <a href="/contacts" className="navText">
                    Contacts
                </a>
            </div>
        </div>
    )
}

export default NavBar;