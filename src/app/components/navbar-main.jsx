"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    
      <Navbar />
      
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed inset-x-0 max-w-full mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
        <a  href="/"><MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/our-brands">Our Brands</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
          </div>
        </MenuItem></a>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/for-fpos">For FPOs</HoveredLink>
            <HoveredLink href="/for-farmers">For Farmers</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Technology">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/technology-links">Technology Links</HoveredLink>
            <HoveredLink href="/how-it-works-2">How it works? </HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Stakeholders">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/our-partners">Partners</HoveredLink>
            <HoveredLink href="/become-a-collaborator">Collaborators</HoveredLink>
            <HoveredLink href="/become-a-kisansathi">Kisansathi</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skill Training">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses-and-certificates">Agriculture Skill Training</HoveredLink>
        
            <HoveredLink href="/kisanlink-academy">Kisanlink Academy</HoveredLink>
            
          </div>
        </MenuItem>
        <div className="cursor-pointer text-lg text-black hover:opacity-[0.9] dark:text-white"><a href="/membership-cards">Smart card</a></div>
        {/* <MenuItem setActive={setActive} active={active} item="Smart Card"></MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Experience center"></MenuItem> */}
        <div className="cursor-pointer text-lg text-black hover:opacity-[0.9] dark:text-white"><a href="/experience-center1">Experience Center</a></div>
        
      </Menu>
    </div>
  );
}
