import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorStyle({
        left: event.clientX,
        top: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div>
    <div
      className="h-[60px] w-[30px] bg-primary dark:bg-primaryDark fixed rounded-full z-[9] blur-[50px] md:h-0 xl:h-0"
      style={{
        left: cursorStyle.left,
        top: cursorStyle.top,
      }}
    />
    <div
      className="cursor h-[15px] w-[15px] bg-primary dark:bg-primaryDark fixed rounded-full z-99 md:h-0 xl:h-0"
      style={{
        left: cursorStyle.left,
        top: cursorStyle.top,
      }}
    />
    </div>


    </>
  );
};

export default Cursor;

{/* <>
            <div id='cursor' className='h-[20px] w-[20px] bg-primary dark:bg-purple-800 fixed rounded-full z-99'></div>
            <div id='cursor-blur' className='h-[300px] w-[300px] bg-primary dark:bg-primaryDark fixed rounded-full z-9 blur-[40px]'></div>
</> */}