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
      title: "Our Esteemed Partners",
      subtitles: [
        {
          subtitle: "",
          subheadings: [
            {
              heading: "",
              text: "At Kisanlink, our mission is to empower farmers, Farmer Producer Organizations (FPOs), and Kisansathis by providing them with innovative solutions and comprehensive support. Our esteemed partners play a crucial role in helping us deliver top-notch services and solutions to agricultural communities. Together, we are transforming the agricultural landscape and fostering sustainable growth",
            },
          ],
        },
      ],
      icon: HomeIcon,
      imgAlt: "Home Image",
      imgSrc: "https://www.kisanlink.in/wp-content/uploads/store-web-2.png",
    },

    {
      id: "products",
      title: "Onboarding Partners",
      subtitles: [
        {
          subtitle: "FPOs (Farmer Producer Organizations)",
          subheadings: [
            {
              heading: "Streamlined Onboarding",
              text: "Our partners assist in the seamless onboarding of FPOs, ensuring they have access to our comprehensive tech platform and resources.",
            },
            {
              heading: "Training and Support",
              text: "We provide training modules and workshops to FPOs, helping them understand and utilize our platform effectively for better communication and streamlined operations.",
            },
          ],
        },
        {
          subtitle: "Kisansathis",
          subheadings: [
            {
              heading: "Empowering Rural Entrepreneurs",
              text: "Our partners help identify and recruit motivated individuals from rural communities to become Kisansathis, who act as intermediaries between Kisanlink and local farmers",
            },
            {
              heading: "Comprehensive Training",
              text: "Kisansathis undergo extensive training to familiarize themselves with Kisanlink’s platform, products, and services, ensuring they can effectively support farmers.",
            },
          ],
        },
        {
          subtitle: "Farmers",
          subheadings: [
            {
              heading: "Direct Engagement",
              text: "Our partners facilitate direct engagement with farmers, helping them onboard onto our platform and access a wide range of agricultural products and services.",
            },
            {
              heading: "Continuous Support",
              text: "We provide ongoing support to farmers, ensuring they can make the most of our offerings to enhance their productivity and profitability.",
            },
          ],
        },
      ],
      icon: PackageIcon,
      imgAlt: "Products Image",
      imgSrc:
        "https://www.kisanlink.in/wp-content/uploads/kisansathis-training-web.png",
    },
    {
      id: "services",
      title: "Implementation Partners",
      subtitles: [
        {
          subtitle: "Order Management",
          subheadings: [
            {
              heading: "Efficient Order Processing",
              text: "Our partners play a crucial role in managing the order lifecycle, from placement to delivery, ensuring timely and accurate fulfillment of orders..",
            },
          ],
          subheadings: [
            {
              heading: "Logistics and Delivery",
              text: "We collaborate with our partners to cover delivery charges and ensure that products reach farmers efficiently through our dedicated logistics services.",
            },
          ],
        },
        {
          subtitle: "Training and Development",
          subheadings: [
            {
              heading: "Skill Development",
              text: "Our partners help create and deliver training modules, both online and offline, covering various agricultural topics and modern farming techniques.",
            },
          ],
          subheadings: [
            {
              heading: "Workshops and Certifications",
              text: "We organize workshops and certification programs to enhance the skills of farmers, FPOs, and Kisansathis, ensuring they stay updated with the latest developments in agriculture.",
            },
          ],
        },
      ],
      icon: ServerIcon,
      imgAlt: "Services Image",
      imgSrc: "https://www.kisanlink.in/wp-content/uploads/store-web-2.png",
    },

    {
      id: "features",
      title: "Channel Partners",
      subtitles: [
        {
          subtitle: "Experience Centers",

          subheadings: [
            {
              heading: "Comprehensive Agri Solutions",
              text: "Our experience centers offer a wide range of agricultural products and services, including seeds, fertilizers, machinery, and IoT devices, ensuring farmers have access to everything they need under one roof.",
            },
            {
              heading: "Field Demonstrations",
              text: "We conduct field demonstrations to showcase the effectiveness of our products and services, helping farmers make informed decisions.",
            },
            {
              heading: "Repair and Servicing",
              text: "Our centers provide repair and servicing for agricultural equipment, ensuring farmers can maintain their tools and machinery in optimal condition.",
            },
          ],
        },
        {
          subtitle: "Our Key Partners",

          subheadings: [
            {
              heading: "Jk University",
              text: "Kisanlink is proud to announce its strategic partnership with JKU University, a leading institution in agricultural education and research. This partnership aims to empower agri students through cutting-edge training programs and workshops.",
            },
            {
              heading: "Training Programs",
              text: "JKU University and Kisanlink have collaborated to develop comprehensive training programs for farmers, focusing on sustainable farming practices, precision agriculture, and agribusiness management.",
            },
            {
              heading: "Certification",
              text: "Participants in these training programs receive certification, demonstrating their proficiency and readiness to apply their skills in real-world scenarios. This certification not only enhances their credibility but also opens up new opportunities for career advancement..",
            },
            {
              heading: "EVERGREEN ENERGY ENTERPRISES",
              text: "Kisanlink has partnered with Evergreen Energy Enterprises to provide sustainable energy solutions to farmers and rural communities. This partnership aims to reduce carbon footprint and promote eco-friendly agricultural practices.",
            },
            {
              heading: "RELIANCE FOUNDATION",
              text: "Kisanlink has partnered with Reliance Foundation to support rural development initiatives and promote sustainable agriculture practices. This partnership aims to empower farmers and rural communities through capacity building.",
            },
          ],
        },
      ],
      icon: FocusIcon,
      imgAlt: "Features Image",
      imgSrc:
        "https://www.kisanlink.in/wp-content/uploads/Copy-of-kisanlink-certificate.png",
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
            className={`py-12 md:py-24 lg:py-32 ${
              index === 0 ? "mt-24" : "mt-48"
            }`}
          >
            <div className="container px-4 md:px-6">
              <div
                className={`grid items-center gap-6 ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px]"
                    : "lg:grid-cols-[500px_1fr] xl:grid-cols-[550px_1fr]"
                } lg:gap-12`}
              >
                {index % 2 !== 0 && (
                  <img
                    src={section.imgSrc}
                    width="400"
                    height="310"
                    alt={section.imgAlt}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  />
                )}
                <div className="space-y-6">
                  {section.subtitles.map((subtitle, subIndex) => (
                    <div key={subIndex} className="space-y-2">
                      <div className="inline-block rounded-lg bg-muted  py-1 text-4xl font-semibold">
                        {subtitle.subtitle}
                      </div>
                      {subtitle.subheadings.map((subheading, shIndex) => (
                        <div key={shIndex} className="space-y-2">
                          <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                            {subheading.heading}
                          </h2>
                          <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
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
