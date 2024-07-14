"use client"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "../../components/ui/navigation-menu"

import { Button } from "../../components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet"
import { Superscript } from "lucide-react"
import { useState,useRef,useEffect } from "react"


const NavItem = ({ href,  label, subItems, isOpen, onClick }) => {
  const subItemsRef = useRef(null);

  useEffect(() => {
    if (isOpen && subItemsRef.current) {
      subItemsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div className="relative ">
      <div
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer"
        onClick={onClick}
      >
        {/* <Icon className="h-5 w-5" /> */}
        {label}
        {subItems &&
        <span className={`ml-auto transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
}
      </div>
      {isOpen && subItems && (
        <div ref={subItemsRef} className="m-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {subItems.map((subItem, index) => (
              <Link key={index} href={subItem.href} prefetch={false}>
                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {subItem.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};



export default function Component() {
    const [openIndex, setOpenIndex] = useState(null);

  const handleNavItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

    const redirectToLogin = () => {
    const loginUrl = 'https://admin.kisanlink.in/#/account/login';
    window.open(loginUrl, '_blank');
  };
  return (
    <div className="lg:bg-white large:ml-60 medium:ml-12 z-50  lg:rounded-full">

  
    <header className="  top-0 z-50 w-full lg:bg-background lg:rounded-full lg:border-2 lg:border-black small:rounded-3xl">
    <div className="container flex h-16 items-center justify-end px-4 md:px-6">
    
      <nav className="hidden items-center z-50 bg-white gap-6 text-sm font-medium md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Technology</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="  bg-white grid w-[180px] p-2 -ml-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/navbar"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">SaaS Platform</div>
                        
                      </Link>
                    </NavigationMenuLink>
                   
                    <NavigationMenuLink asChild>
                      <Link
                        href="ecommerce"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">E-Commerce</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/membership-cards"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Smart Membership Cards</div>
                        
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
              <Link
                        href="/experience-center1"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Experience Center</div>
                        
                      </Link>
              
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Skill Training</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid  bg-white w-[180px] p-2 ml-[285px]  mt-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses-and-certificates"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Skill Training</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/kisanlink-academy"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Kisanlink Academy</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Stakeholders</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid  bg-white w-[180px] p-2 ml-[420px] mt-2">
                  <NavigationMenuLink asChild>
                      <Link
                        href="/for-farmers"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Farmers</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/for-fpos"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">FPOs</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/become-a-kisansathi"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Kisansathi</div>
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/become-a-collaborator"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Collaborators</div>
                       
                      </Link>
                    </NavigationMenuLink>
                    
                    <NavigationMenuLink asChild>
                      <Link
                        href="/our-partners"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Partners</div>
                        
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Brands</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid  bg-white w-[180px] p-2 ml-[560px] mt-2">
                  <NavigationMenuLink asChild>
                      {/* <Link
                        href="https://digicrop.vercel.app/"
                        className="group grid  items-center justify-start gap-1 rounded-md bg-background  text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      > */}
                        <Link
                        href="https://digicrop.vercel.app/"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Digicrop<sup className="inline-flex items-center justify-center w-2 h-2 ml-1 text-[0.3rem] align-top border border-current rounded-full">   TM</sup></div>
                        {/* <div className="-mt-12">< img height={10} src="./dig.png"></img></div> */}
                        
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      {/* <Link
                        href="https://amrti.com/"
                        className="group grid items-center justify-start gap-1 rounded-md bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      > */}
                        <Link
                        href="https://amrti.com/"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      ><div className="text-sm font-medium leading-none group-hover:underline">
                      Amrti<sup className="inline-flex items-center justify-center w-2 h-2 ml-1 text-[0.3rem] align-top border border-current rounded-full">TM</sup>
                    </div>
                    
                    
                        
     
                        {/* <div className="-mt-12"><img height={10} src="./amt.png"></img></div> */}
                        
                      </Link>
                    </NavigationMenuLink>
                    
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid  bg-white w-[180px] p-2 ml-[690px] mt-2">
                  <NavigationMenuLink asChild>
                      <Link
                        href="/about-us"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">About Us</div>
                        {/* <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn more about our company and mission.
                        </div> */}
                      </Link>
                    </NavigationMenuLink>
                    {/* <NavigationMenuLink asChild>
                      <Link
                        href="/for-farmers"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Solutions</div>
                        {/* <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover our solutions for Fpos and farmers.
                        </div> */}
                      {/* </Link>
                    </NavigationMenuLink> */} 
                    <NavigationMenuLink asChild>
                      <Link
                        href="/team"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Our Team</div>
                        {/* <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Meet the people behind the company.
                        </div> */}
                      </Link>
                    </NavigationMenuLink>
                    {/* <NavigationMenuLink asChild>
                      <Link
                        href="/our-brands"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Our Brands</div>
                        {/* <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore brands at our company.
                        </div> */}
                      {/* </Link>
                    </NavigationMenuLink>  */}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/careers"
                        className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                        prefetch={false}
                      >
                        <div className="text-sm font-medium leading-none group-hover:underline">Careers</div>
                        {/* <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore job opportunities at our company.
                        </div> */}
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="flex items-center gap-2 bg-white">
        
          <Sheet className="bg-white">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex flex-col gap-4 p-4 bg-white">
              
    <nav className="grid gap-2">
      <NavItem
        href="#"
        // icon={HomeIcon}
        label="Technology"
        subItems={[
          { href: '/navbar', label: 'SaaS Platform' },
          { href: '/ecommerce', label: 'E-Commerce' },
           { href: '/membership-cards', label: 'Smart Membership Cards' },
        ]}
        isOpen={openIndex === 0}
        onClick={() => handleNavItemClick(0)}
      />
      <a href="/experience-center1"><NavItem
        
        icon={PackageIcon}
        label="Experience Center"
      
        isOpen={openIndex === 1}
        onClick={() => handleNavItemClick(1)}
      /></a>
      <NavItem
        href="#"
        icon={DollarSignIcon}
        label="Skill Training"
        subItems={[
          { href: '/courses-and-certificates', label: 'Skill Training' },
          { href: '/kisanlink-academy', label: ' Kisanlink Academy' },
        ]}
        isOpen={openIndex === 2}
        onClick={() => handleNavItemClick(2)}
      />
      <NavItem
        href="#"
        icon={InfoIcon}
        label="Stakeholders"
        subItems={[
          { href: '/for-farmers', label: 'Farmers' },
          { href: '/for-fpos', label: 'FPOs' },
           { href: '/become-a-kisansathi', label: 'Kisansathi' },
            { href: '/become-a-collaborator', label: 'Collaborators' },
             { href: '/our-partners', label: 'Partners' },
        ]}
        isOpen={openIndex === 3}
        onClick={() => handleNavItemClick(3)}
      />
        <NavItem
        href="#"
        icon={InfoIcon}
        label="Our Brands"
        subItems={[
          { href: 'https://digicrop.vercel.app/', label: (
    <>
      Digicrop
      <sup className="inline-flex items-center justify-center w-2 h-2 ml-1 text-[0.3rem] align-top border border-current rounded-full">
        TM
      </sup>
    </>
  )},
          { href: 'https://amrti.com/', label: (
    <>
      Amrti
      <sup className="inline-flex items-center justify-center w-2 h-2 ml-1 text-[0.3rem] align-top border border-current rounded-full">
        TM
      </sup>
    </>
  ) },
        ]}
        isOpen={openIndex === 4}
        onClick={() => handleNavItemClick(4)}
      />
        <NavItem
        href="#"
        icon={InfoIcon}
        label="About Us"
        subItems={[
          { href: '/about-us', label: 'About Us' },
          { href: '/team', label: 'Our Team' },
          { href: '/careers', label: 'Careers' },
        ]}
        isOpen={openIndex === 5}
        onClick={() => handleNavItemClick(5)}
      />
    </nav>

                <div className="flex flex-col gap-2">
                 <button
            className="  ml-1 mr-1 px-4 py-2 rounded-full bg-brown-700 text-white hover:bg-blue-600 focus:outline-none"
            onClick={redirectToLogin}
          >
            FPO/Corporate Login
          </button>
                  
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </div>
  )
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}