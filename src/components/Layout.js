import React from "react";

const Layout = ({children, classname=""}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 sm:p-8 ${classname}`}>
            {children}
        </div>
    )
}

export default Layout;