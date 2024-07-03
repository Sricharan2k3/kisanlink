import React from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

const LogoComponent = () => {
  return (
      <div className="max-w-md">
       <NavigationMenu><a
                        href="/"
                        prefetch={false}
                      >
    <img 
        src="./newlogo.png" 
        width={180} 
        height={120} 
        alt="Link Image"
    /></a></NavigationMenu>


      </div>
  );
};

export default LogoComponent;


