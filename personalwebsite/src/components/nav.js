import { useState } from "react";
import Link from 'next/link'


const NavBar = () => {
    return (
        <div className="nav">
            <div>
                <Link href="/" className="navText">
                    Home
                </Link>
            </div>
            <div>
                <Link href="/blogs" className="navText">
                    Blog
                </Link>
            </div>
        </div>
    )
}

export default NavBar;