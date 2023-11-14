import React from "react";
import Cursor from "./Cursor";

const Layout = ({children, classname=""}) => {
    return (
        <>
        <Cursor />
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 sm:p-8 ${classname}`}>
            {children}
        </div>
        </>
    )
}

export default Layout;