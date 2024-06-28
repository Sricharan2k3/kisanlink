"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer flex flex-row text-lg text-black hover:opacity-[0.9] dark:text-white"
      >
       <div className="p-1"><RiArrowDropDownLine /></div> {item}
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative h-24 pt-10 boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-10 px-8 py-6 "
    ><div>
    <img className="h-24 w-24 -mt-8 " src="https://www.kisanlink.in/wp-content/uploads/2023/03/cropped-cropped-cropped-Picsart_23-03-01_17-20-48-356-scaled-2.jpg"></img>
</div>
      {children}
      <div className=" -mt-2 flex justify-center md:block">
                       <a href="https://play.google.com/store/apps/details?id=com.kisanlink"><button  type="button" class=" flex items-center justify-center w-48 text-white bg-green-500 rounded-3xl h-10">
                            <div class="mr-3">
                                <svg viewBox="30 336.7 120.9 129.2" width="20">
                                    <path fill="#FFD400"
                                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                    </path>
                                    <path fill="#FF3333"
                                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                    </path>
                                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                    </path>
                                    <path fill="#3BCCFF"
                                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                
                                <div class="-mt-1 font-poppins text-md font-semibold">
                                    Download App
                                </div>
                            </div>
                        </button></a> 
                    </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
