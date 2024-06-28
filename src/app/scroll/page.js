"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Icons components
function ContactIcon(props) {
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
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function FocusIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
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
  );
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
  );
}

function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

export default function Component() {
  const router = useRouter();

  useEffect(() => {
    // Check if there is a hash in the URL and scroll to that section on load
    if (router.replace("#")) {
      const id = router.replace.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.replace]);

  // Data array for sections
  const sections = [
    {
      id: "home",
      title: "Home",
      subtitles: [
        {
          subtitle: "Welcome to Our Company",
          subheadings: [
            {
              heading: "Discover the Power of Our Solutions",
              text: "Our company offers a wide range of innovative products and services to help you achieve your goals. Explore our offerings and see how we can transform your business.",
            },
          ],
        },
      ],
      icon: HomeIcon,
      imgAlt: "Home Image",
      imgSrc: "/placeholder.svg",
    },
    {
      id: "products",
      title: "Products",
      subtitles: [
        {
          subtitle: "Our Product Offerings",
          subheadings: [
            {
              heading: "Innovative Products for Your Needs",
              text: "Explore our diverse range of products designed to solve your unique challenges. From cutting-edge technology to user-friendly solutions, we have what you need to take your business to the next level.",
            },
          ],
        },
      ],
      icon: PackageIcon,
      imgAlt: "Products Image",
      imgSrc: "/placeholder.svg",
    },
    {
      id: "services",
      title: "Services",
      subtitles: [
        {
          subtitle: "Our Services",
          subheadings: [
            {
              heading: "Tailored Solutions for Your Success",
              text: "Our team of experts is dedicated to providing you with top-notch services that cater to your unique needs. From consulting to implementation, we'll work closely with you to ensure your success.",
            },
          ],
        },
      ],
      icon: ServerIcon,
      imgAlt: "Services Image",
      imgSrc: "/placeholder.svg",
    },
    {
      id: "features",
      title: "Features",
      subtitles: [
        {
          subtitle: "Key Features",
          subheadings: [
            {
              heading: "Unlock the Potential of Our Features",
              text: "Our platform is packed with powerful features designed to streamline your workflow and boost your productivity. Explore what we have to offer and see how our solutions can transform your business.",
            },
          ],
        },
      ],
      icon: FocusIcon,
      imgAlt: "Features Image",
      imgSrc: "/placeholder.svg",
    },
    {
      id: "contact",
      title: "Contact",
      subtitles: [
        {
          subtitle: "Get in Touch",
          subheadings: [
            {
              heading: "Let's Discuss Your Needs",
              text: "Whether you have a specific question or are interested in learning more about our solutions, our team is here to help. Don't hesitate to reach out, and we'll be happy to assist you.",
            },
          ],
        },
      ],
      icon: ContactIcon,
      imgAlt: "Contact Image",
      imgSrc: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <nav className="fixed left-0 top-0 h-full w-64 border-r bg-background px-4 py-16">
        <div className="flex flex-col items-start gap-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              prefetch={false}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            >
              <section.icon className="h-5 w-5" />
              {section.title}
            </Link>
          ))}
        </div>
      </nav>
      <main className="ml-64 flex-1 overflow-y-auto">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-12 md:py-24 lg:py-32 ${index === 0 ? "mt-24" : "mt-48"
              }`}
          >
            <div className="container px-4 md:px-6">
              <div
                className={`grid items-center gap-6 ${index % 2 === 0
                  ? "lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px]"
                  : "lg:grid-cols-[500px_1fr] xl:grid-cols-[550px_1fr]"
                  } lg:gap-12`}
              >
                {index % 2 !== 0 && (
                  <img
                    src={section.imgSrc}
                    width="550"
                    height="310"
                    alt={section.imgAlt}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                )}
                <div className="space-y-4">
                  {section.subtitles.map((subtitle, subIndex) => (
                    <div key={subIndex}>
                      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                        {subtitle.subtitle}
                      </div>
                      {subtitle.subheadings.map((subheading, shIndex) => (
                        <div key={shIndex}>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {subheading.heading}
                          </h2>
                          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {subheading.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                {index % 2 === 0 && (
                  <img
                    src={section.imgSrc}
                    width="550"
                    height="310"
                    alt={section.imgAlt}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
