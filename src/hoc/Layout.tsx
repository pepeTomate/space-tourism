import { Navbar } from "@/components";
import LayoutStyles from "@/styles/Layout.module.css"
import React from "react";

interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => {
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;